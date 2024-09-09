/*import { mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

// Create __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directories = [
    'path/to/directory1',
    'path/to/directory2',
    // Add more directories as needed
];

directories.forEach((dir) => {
    try {
        mkdirSync(path.resolve(__dirname, dir), { recursive: true });
        console.log(`Directory ${dir} created successfully!`);
    } catch (err) {
        console.error(`Error creating directory ${dir}:`, err);
    }
});*/
