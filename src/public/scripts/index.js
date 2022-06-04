import * as typer from '../modules/typer.js'

function options() {
    typer.pop_up.style.visibility = "visible"
    typer.html.style.backgroundColor = "rgb(10, 50, 73)"
    typer.input.style.backgroundColor = "rgb(10, 50, 73)"
}

function xfunc() {
    typer.pop_up.style.visibility = "hidden"
    typer.html.style.backgroundColor = "rgb(41, 93, 123)"
    typer.input.style.backgroundColor = "rgb(41, 93, 123)"
}

document.querySelector('.x-button').addEventListener('click', xfunc)
document.querySelector('.option-button').addEventListener('click', options)
