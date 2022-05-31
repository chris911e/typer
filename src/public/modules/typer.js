import * as fs from 'fs'
// const input = document.querySelector(".input")
// const typistWrapper = document.querySelector(".typist-wrapper")


export function fillStr(mode, count){
    const data = fs.readFileSync('wordlists.json', 'utf-8')
    const parsed_data = JSON.parse(data)

    var prev_word = ""

    for(let i = 0; i < count; i++){
        var word = parsed_data[mode][Math.floor(Math.random() * parsed_data[mode].length)]
        if(word !== prev_word){
            str += `${word} `
            prev_word = word
        } else {
            i--
        }
    }
}

export function renderText(str){
    str.split("").map(letter => {
        const span = document.createElement("span")
        span.innerText = letter
        text.appendChild(span)
        strChars.push(span)
    })
}

export function resetStrChars(){
    strChars.map(strChar => {
        strChar.classList.remove("correct")
        strChar.clasList.remove("wrong")
    })
    strChars = []
    renderText(str)
}

export function type(){
    input.addEventListener("keyup", () => {
        if(!timer){
            timer = setTimeout()
        }
    })
}

