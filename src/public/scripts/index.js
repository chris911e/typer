import * as typer from '../modules/typer.js'

const text = document.querySelector(".text")
const input = document.querySelector(".input")
const menuWrapper = document.querySelector(".menu-wrapper")
const typistWrapper = document.querySelector(".typist-wrapper")

var str = "";
var strChars = []

function hello() {
    console.log("hello")
}

document.querySelector('.hello').addEventListener('click', hello)

// function options(){
//     document.getElementsByClassName("pop-up")[0].style.visibility = "visible"
// }
