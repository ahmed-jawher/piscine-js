import { readdir } from 'node:fs/promises';
import { argv } from 'node:process';
import fs from "fs/promises"; // Use fs.promises for async functions

async function processFiles() {
    if (argv.length <= 2) {
        console.error("❌ Please provide a directory path.");
        return;
    }

    let path = argv[2];

    try {
        const files = await readdir(path); // Read directory files
        let arr = [];

        for (const file of files) {
            try {
                const data = await fs.readFile(`${path}/${file}`, "utf8"); // Read file content
                let d = JSON.parse(data); // Parse JSON

                if (d["answer"] === "yes") {
                    arr.push(generateName(file));
                }
            } catch (err) {
                console.error(`❌ Error reading or parsing ${file}:`, err.message);
            }
        }

        arr.sort(); // Sort processed names

        arr.forEach((name, index) => console.log(`${index + 1}. ${name}`));
    } catch (err) {
        console.error("❌ Error reading directory:", err.message);
    }
}

// **Generates formatted names**
function generateName(fileName) {
    fileName = fileName.slice(0, -5); // Remove ".json"
    let parts = fileName.split('_');
    return parts[1] + " " + parts[0];
}

// Run the function
processFiles();
