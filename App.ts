#!/usr/bin/env node

import inquirer from "inquirer";

let input :{
sentence:string
}=await inquirer.prompt([
    {
    name:"sentence",
    type:"input",
    message:"Enter your sentence To find out How many number there are ?"
}
])

let counter=input.sentence.trim().split(" ");
console.log(counter);
console.log(`In Your sentence the number of Words are : ${counter.length}`);

















// #!/usr/bin/env node
// import inquirer from "inquirer";
// const answers: {
//     Sentence: string
// } = await inquirer.prompt([
//     {
//         nmae: "Sentence",
//         type: "input",
//         message: "Enter your sentence to count the word:"
//     }
// ])
// const words = answers.Sentence.trim().split(" ")
// console.log(`Your sentence word count is ${words.length}`)





