import React, { useState } from 'react'
import axios from "axios";
import "./add.css";
function AddTour() {
    const [tourData, setTourData] = useState({ title: "", duration: "", priceFrom: "", image: "", reviews: '', rating: "" });
    const [file, setFile] = useState(null)
    const upload = async () => {
        try {
            const formData = new FormData();
            formData.append("image", file)
            const res = await axios.post("https://travel-tour-6xx0.onrender.com/api/upload", formData);
            return `/tours/${res.data}`;
        } catch (error) {
            console.log(error);
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTourData({ ...tourData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Set the first selected file to the state
    };

    const addTour = async (e) => {
        e.preventDefault();
        try {
            let imgUrl = "";
            if (file) imgUrl = await upload();
            const newTourData = { ...tourData, image: imgUrl };
            //const token = localStorage.getItem("token");
            const res = await axios.post("http://localhost:3002/api/add-tour", newTourData, {
                withCredentials: true,
            });

            console.log(res);
            setTourData({ title: "", duration: "", priceFrom: "", image: "", reviews: '', rating: "" });
            setFile(null)

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <section className='section'>
            <div className='container-add'>
                <h1>Add New Tour</h1>
                <form encType='multipart/form-data' action="">
                    <input type="text" name="title" placeholder='TourTitle' onChange={handleInputChange} />
                    <input type="text" name="duration" placeholder='duration' onChange={handleInputChange} />
                    <input type="number" name="priceFrom" placeholder='price' onChange={handleInputChange} />
                    <input type="file" name="image" placeholder='Image URL' onChange={handleFileChange} required />
                    <input type="number" name="reviews" placeholder="Reviews" onChange={handleInputChange} />
                    <input type="number" name="rating" placeholder="Rating" onChange={handleInputChange} />
                    <button onClick={addTour}>Add Tour</button>
                </form>
            </div>

        </section>
    )
}

export default AddTour
