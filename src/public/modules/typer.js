import { words } from './words.js'

export const text = document.querySelector(".text")
export const input = document.querySelector(".input")
export const menuWrapper = document.querySelector(".menu-wrapper")
export const typistWrapper = document.querySelector(".typist-wrapper")

export const stats = document.querySelector(".stats")
export const stats_time = document.querySelector(".time")
export const stats_wpm = document.querySelector(".wpm")

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

export const keyboard = document.querySelector(".keyboard")


export var str = ""
export var strChars = []
export var success = false

export var timer = null
export var time = 0
export var time_for_time = 0
export var interval = null

export var wpm = 0
export var all_wpm = []
export var errors = 0
export var accuracy = 0

export var before = 0

export function setTime(time){
    this.time = time
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

export function timing() {
    switch(option.value){
        case "words":
            if(!interval){
                interval = setInterval(() => {
                    time++
                    wpm = Math.floor((input.value.length/5)/(time/60))
                    all_wpm.push(wpm)
                    stats_wpm.innerText = wpm
                    stats_time.innerText = time
                },1100)
            }
            break

        case "time":
            if(!timer && !interval){
                time = parseInt(option_input.value)
                stats_time.innerText = time
                timer = setTimeout(() => {
                    clearInterval(interval)
                }, time*1000);

                interval = setInterval(() => {
                    time--
                    time_for_time++
                    wpm = Math.floor((input.value.length/5)/(time_for_time/60))
                    all_wpm.push(wpm)
                    stats_time.innerText = time
                    stats_wpm.innerText = wpm
                }, 1000)
            }
            break
    }
}

// export async function highlightKey(){
//     input.value.split("").map(async (letter) => {
//         for(var i = 0; i < keyboard.children.length; i++){
//             for(var o = 0; o < keyboard.children[i].children.length; o++){

//                 const key_value = keyboard.children[i].children[o]
//                 switch(key_value.innerHTML){
//                     case letter:
//                         console.log(key_value)
//                         key_value.classList.add("highlighthed")
//                         new Promise(r => setTimeout(()=>{
//                             key_value.classList.remove("highlighthed")
//                         }, 100))
//                         break
//                 }
//             }
//         }
//     })
// }

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
    timer = null
    success = null
    errors = 0
    time = 0
    time_for_time = 0
    wpm = 0
    all_wpm = []
    stats_wpm.innerText = 0
    stats_time.innerText = 0
    mistakes.innerText = 100
}
