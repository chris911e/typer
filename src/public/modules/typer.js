import * as fs from "fs"
// const input = document.querySelector(".input")
// const typistWrapper = document.querySelector(".typist-wrapper")


export function fillStr(str, mode, count){
    fs.readFile('wordlists.json', 'utf-8', (err, myData) => {
        if (err) {
            console.log(err)
        }
    })

    for(let i = 0; i < count; i++){
        str += myData[`${mode}`]["words"][Math.floor(Math.random() * myData[`${mode}`]["words"].length)]
    }
    
}

export function fillText(strChars, text, str){
    str.split("").map(letter => {
        const span = document.createElement("span")
        span.innerText = letter
        text.appendChild(span)
        strChars.push(span)
    })
}

