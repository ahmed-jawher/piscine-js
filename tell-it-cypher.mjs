import { argv } from 'node:process';
import fs from 'node:fs/promises';

let fileName = argv[2];
let code = argv[3];
let saveFile = argv[4];

(async () => {
    let content = await readFileContent(fileName);
    
    if (code == 'encode') {
        content = Buffer.from(content).toString('base64');
        saveFile = saveFile || 'cypher.txt';
    } else if (code == 'decode') {
        content = Buffer.from(content, 'base64').toString();
        saveFile = saveFile || 'clear.txt';
    }
    
    console.log(content);
    
    if (saveFile) {
        await saveContentToFile(saveFile, content);
    }
})();

async function saveContentToFile(fileName, content) {
    try {
        await fs.writeFile(fileName, content, 'utf8'); 
    } catch (err) {
        console.error(`Error saving content to file '${fileName}':`, err);
    }
}

async function readFileContent(filename) {
    try {
        const content = await fs.readFile(filename, 'utf8');
        return content;
    } catch (err) {
        console.error(`Error reading the file '${filename}':`, err);
        return null;
    }
}
