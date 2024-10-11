// Example of "Event Loop" in action

const { readFile, writeFile } = require("fs").promises

// console.log("Started the first Task.");


//This readFile function is async and eventloop offload this task to file system here, then the code execution starts from line 18 when we get the output from the callback function inside of readFile function the response is provided.
// readFile('./content/first.txt', 'utf-8', (error,result)=>{
//     if(error){
//         console.log(error);
//         return;
//     }
//     console.log(result);
//     console.log("Completed first task");
// })

// console.log("Starting the Second task.");

// readFile('./content/second.txt', 'utf-8', (error,result)=>{
//     if(error){
//         console.log(error);
//         return;
//     }
//     console.log(result);
//     console.log("Completed Second task");
// })

// console.log("Start of the third task.");



// Example 2
const start = async () => {
    try {
        const first = await readFile('./content/first.txt', 'utf-8')
        const second = await readFile('./content/second.txt', 'utf-8')
        await writeFile('./content/result-async-await.txt',
            `This is Awesome:\n${first}\n${second} `
        )
        console.log(first,"\n",second)
    } catch (error) {
        console.log(error)
    }
}

start();