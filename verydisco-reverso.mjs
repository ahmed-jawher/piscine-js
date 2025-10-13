import fs from "fs"

const args = process.argv.slice(2);

if (args && args.length > 0) {

    fs.readFile(args[0], "utf8", (err, data) => {
        if (!err) {
            
            let arr = data.split(" ")

            for (let i in arr) {
                let l = arr[i].length
                let half = Math.floor(l / 2)

                if (l % 2 == 0) {
                    arr[i] = (arr[i].slice(half, l) + arr[i].slice(0, half));
                } else {
                    arr[i] = (arr[i].slice(half , l) + arr[i].slice(0, half ));
                }
            }
            console.log(arr.join(" "));
        }
    });

}

