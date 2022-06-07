import * as typer from '../modules/typer.js'

var difficulty, amount, option_mode

function options() {
    typer.pop_up.style.visibility = "visible"
    typer.option.value = "nothing"
    typer.mode_option.value = "nothing"
    typer.option_input.style.visibility = "hidden"
    typer.type_button.style.visibility = "hidden"
    typer.html.style.backgroundColor = "rgb(10, 50, 73)"
    typer.input.style.backgroundColor = "rgb(10, 50, 73)"
}

function xfunc() {
    typer.pop_up.style.visibility = "hidden"
    typer.option_input.style.visibility = "hidden"
    typer.type_button.style.visibility = "hidden"
    typer.option_suffix.style.visibility = "hidden"
    typer.mode_option.style.visibility = "hidden"
    typer.html.style.backgroundColor = "rgb(41, 93, 123)"
    typer.input.style.backgroundColor = "rgb(41, 93, 123)"
}

function type() {
    difficulty = typer.mode_option.value
    amount = parseInt(typer.option_input.value)
    option_mode = typer.option.value
    switch(option_mode){
        case "time":
            typer.fillStr(difficulty, amount * 5)
            typer.time = amount
            typer.renderText(typer.str)
            break;
        case "words":
            typer.fillStr(difficulty, amount)
            typer.renderText(typer.str)
            break;
    }
    typer.startTyping()

    typer.pop_up.style.visibility = "hidden"
    typer.option_input.style.visibility = "hidden"
    typer.type_button.style.visibility = "hidden"
    typer.option_suffix.style.visibility = "hidden"
    typer.mode_option.style.visibility = "hidden"
    typer.html.style.backgroundColor = "rgb(41, 93, 123)"
    typer.input.style.backgroundColor = "rgb(41, 93, 123)"
}

function restart(){
    typer.str = ""
    type()
}


typer.option.addEventListener('change', (event) => {
    if(typer.option.value == "words" || typer.option.value == "time"){
        typer.option_input.style.visibility = "visible"
        typer.type_button.style.visibility = "visible"
        typer.option_suffix.style.visibility = "visible"
        typer.mode_option.style.visibility = "visible"

        switch(typer.option.value){
            case "words":
                typer.option_suffix.innerHTML = "words"
                break
            case "time":
                typer.option_suffix.innerHTML = "seconds"
                break
        }
        typer.option_input.focus()

    } else if(typer.option.value == "nothing"){
        typer.option_suffix.style.visibility = "hidden"
        typer.option_input.style.visibility = "hidden"
        typer.type_button.style.visibility = "hidden"
        typer.mode_option.style.visibility = "hidden"
    }
})

typer.type_button.addEventListener('click', type)

window.addEventListener('load', (event) => {
    typer.option.value = "words"
    typer.mode_option.value = "easy"
    typer.option_input.value = 5
    type()
})

typer.option_button.addEventListener('click', options)
typer.x_button.addEventListener('click', xfunc)
