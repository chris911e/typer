import * as typer from '../modules/typer.js'

const text = document.querySelector(".text")
const input = document.querySelector(".input")
const typistWrapper = document.querySelector(".typist-wrapper")

const pop_up = document.querySelector(".pop-up")
const html = document.querySelector("html")

var str = "";
var strChars = []

function options(){
    pop_up.style.visibility = "visible"
    html.style.backgroundColor = "rgb(7, 41, 60)"
    input.style.backgroundColor = "rgb(7, 41, 60)"

}

function xfunc(){
    pop_up.style.visibility = "hidden"
    html.style.backgroundColor = "rgb(41, 93, 123)"
    input.style.backgroundColor = "rgb(41, 93, 123)"
}

document.querySelector('.x-button').addEventListener('click', xfunc)
document.querySelector('.option-button').addEventListener('click', options)
