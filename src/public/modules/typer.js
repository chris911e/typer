const text = document.querySelector(".text")
const input = document.querySelector(".input")
const typistWrapper = document.querySelector(".typist-wrapper")

const strChars = []

function fillText(str){
    str.split("").map(letter => {
        const span = document.createElement("span")
        span.innerText = letter
        text.appendChild(span)
        strChars.push(span)
    })
}

module.exports = {
    fillText: fillText
};
