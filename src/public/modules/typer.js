import { words } from './words.js'

export const text = document.querySelector(".text")
export const input = document.querySelector(".input")
export const menuWrapper = document.querySelector(".menu-wrapper")
export const typistWrapper = document.querySelector(".typist-wrapper")

export const stats = document.querySelector(".stats")

export const pop_up = document.querySelector(".pop-up")
export const html = document.getElementsByTagName("html")[0]

export const option = document.querySelector(".option")
export const option_button = document.querySelector('.option-button')
export const option_input = document.querySelector(".option-input")
export const x_button = document.querySelector('.x-button')
export const type_button = document.querySelector(".type-button")

export const option_suffix = document.querySelector(".option-suffix")
export const mode_option = document.querySelector(".mode-option")
export const mistakes = document.querySelector(".mistakes")
export const restart_button = document.querySelector(".restart-button")

export var scrollCount = 0

export var str = ""
export var strChars = []
export var success = null

export var time = null
export var wpm = 0
export var errors = 0
export var accuracy = 100

export function setScrollCount(difficulty){
    switch(difficulty){
        case "easy":
            scrollCount = 20
            break
        case "normal":
            scrollCount = 13
            break
        case "hard":
            scrollCount = 10
            break
    }
}

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
        strChar.classList.remove("wrong")
    })
}

export function startTyping(){
    input.addEventListener('keyup', (event) => {
        input.scrollIntoView()
        var key = event.key
        stats.style.visibility = "visible"
        if(time != null){
            timer = setTimeout(() => {
                success = false
            }, time);
        }
        var input_value = input.value
        resetStrChars()

        input_value.split("").map((letter, i) => {
            if(letter == str[i]){
                strChars[i].classList.add("correct")
            } else{
                strChars[i].classList.add("wrong")
            }
            switch(key){
                case "Backspace":
                    strChars[i+1].classList.remove("wrong")
                    strChars[i+1].classList.remove("correct")
            }
            mistakes.innerText = document.querySelectorAll(".wrong").length
        })

        if(input_value.length == str.length){
            success = true
        }
    })
}

export function clear() {
    input.value = ""
    str = ""
    strChars = []
    while(text.firstChild){
        text.removeChild(text.firstChild)
    }
    mistakes.innerText = document.querySelectorAll(".wrong").length
    input.focus()
}
