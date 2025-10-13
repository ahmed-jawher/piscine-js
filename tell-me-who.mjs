import { readdir } from 'node:fs/promises';
import { argv } from 'node:process';

if (argv.length > 2) {
    let path = argv[2]
    try {
        const files = await readdir(path);
       for (let i=0;i<files.length;i++){
        files[i]=generateName(files[i])
       }
       files.sort()
       for (let i=0;i<files.length;i++){
        let s=i+1+". "+files[i]
        console.log(s);
       }
    } catch (err) {
        console.error(1);
    }
}
function generateName(fileName){
    fileName=fileName.slice(0,fileName.length-5)
    fileName=fileName.split('_')
    fileName=fileName[1]+" "+fileName[0]
    return fileName
}