import { words } from './words.js'

export const text = document.querySelector(".text")
export const input = document.querySelector(".input")
export const menuWrapper = document.querySelector(".menu-wrapper")
export const typistWrapper = document.querySelector(".typist-wrapper")

export const stats = document.querySelector(".stats")
export var stats_time = document.querySelector(".time")

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


export var str = ""
export var strChars = []
export var success = false

export var timer = null
export var time = 0
export var interval = null

export var wpm = 0
export var errors = 0
export var accuracy = 0

export var before = 0


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

export function timing() {
    switch(option.value){
        case "words":
            if(!interval){
                interval = setInterval(() => {
                    time++
                    stats_time.innerText = time
                },1100)
            }
            break

        case "time":
            if(time != null){
                timer = setTimeout(() => {
                    success = false
                }, time);
            }
            break
    }
}

export function startTyping(){
    stats.style.visibility = "visible"
    input.addEventListener('keyup', (event) => {

        before = document.querySelectorAll(".wrong").length
        input.scrollIntoView()
        var key = event.key

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

            if (before < document.querySelectorAll(".wrong").length) {
                errors++
            }
            mistakes.innerText = Math.floor((str.length-errors)/str.length*100)
            timing()

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
    // stats.style.visibility = "hidden"
    while(text.firstChild){
        text.removeChild(text.firstChild)
    }
    clearInterval(interval)
    interval = null
    success = null
    errors = 0
    time = 0
    stats_time.innerText = 0
    mistakes.innerText = 100
}
