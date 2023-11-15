import inquirer from "inquirer"
import wordhalk from "chalk"
import gradient from "gradient-string"
import showBanner from "node-banner"

let asking = [
    {
        type: "string",
        name: "ask",
        message: "Please type English Paragraph"
    }
]
let {ask} = await inquirer.prompt(asking);
let wordCounter = (para:string)=>{
    let array = para.split('');
    let loopingArray = array.map((word) => {
        if(word === ' '){
            let som =  word.indexOf(' ')
            let rem = array.splice(som, 1)
        }
    })
    console.log('*******counting characters....')
    setTimeout(()=>{
        console.log(`Your Paragraph is consist of ${array.length} characters`);
    },2000)
}
let b = wordCounter(ask);


