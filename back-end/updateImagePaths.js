import { MongoClient } from 'mongodb';

async function updateImagePaths() {
    const uri = 'mongodb://localhost:27017'; // Replace with your MongoDB URI
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db('safariDB'); // Replace with your database name
        const tours = database.collection('tours');

        const cursor = tours.find({});
        while (await cursor.hasNext()) {
            const tour = await cursor.next();
            if (tour.image && !tour.image.startsWith('/tours/')) {
                const updatedImagePath = `/tours/${tour.image}`;
                await tours.updateOne(
                    { _id: tour._id },
                    { $set: { image: updatedImagePath } }
                );
            }
        }
        console.log('Image paths updated successfully');
    } catch (error) {
        console.error('Error updating image paths:', error);
    } finally {
        await client.close();
    }
}

updateImagePaths();
