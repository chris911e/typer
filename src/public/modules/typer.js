// const input = document.querySelector(".input")
// const typistWrapper = document.querySelector(".typist-wrapper")


export function fillStr(str, mode, count){
    
}

export function fillText(strChars, text, str){
    str.split("").map(letter => {
        const span = document.createElement("span")
        span.innerText = letter
        text.appendChild(span)
        strChars.push(span)
    })
}

