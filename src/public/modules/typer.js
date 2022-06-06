import { words } from './words.js'

export const text = document.querySelector(".text")
export const input = document.querySelector(".input")
export const menuWrapper = document.querySelector(".menu-wrapper")
export const typistWrapper = document.querySelector(".typist-wrapper")

export const pop_up = document.querySelector(".pop-up")
export const html = document.getElementsByTagName("html")[0]

export const option = document.querySelector(".option")
export const option_button = document.querySelector('.option-button')
export const option_input = document.querySelector(".option-input")
export const x_button = document.querySelector('.x-button')
export const type_button = document.querySelector(".type-button")

export const option_suffix = document.querySelector(".option-suffix")
export const mode_option = document.querySelector(".mode-option")

export var str = ""
export var strChars = []

export function fillStr(mode, count){
    var prev = ""
    for(let i = 0; i < count; i++){
        var word = words[mode][Math.floor(Math.random() * words[mode].length)]
        if(word !== prev){
            str += `${word} `
            prev = word
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

