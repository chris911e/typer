import * as typer from '../modules/typer.js'

function options() {
    typer.pop_up.style.visibility = "visible"
    
    switch(typer.option.value){
        case "nothing":   
            typer.option_input.style.visibility = "hidden"
            typer.type_button.style.visibility = "hidden"
            break
        default:   
            typer.option_input.style.visibility = "visible"
            typer.type_button.style.visibility = "visible"
            break
    }

    typer.option_input.style.visibility = "visible"
    typer.type_button.style.visibility = "visible"
    typer.html.style.backgroundColor = "rgb(10, 50, 73)"
    typer.input.style.backgroundColor = "rgb(10, 50, 73)"
}

function xfunc() {
    typer.pop_up.style.visibility = "hidden"
    typer.option_input.style.visibility = "hidden"
    typer.type_button.style.visibility = "hidden"
    typer.html.style.backgroundColor = "rgb(41, 93, 123)" 
    typer.input.style.backgroundColor = "rgb(41, 93, 123)"
}


typer.option.addEventListener('change', (event) => {
    if(typer.option.value == "words" || typer.option.value == "time"){
        typer.option_input.style.visibility = "visible"
        typer.type_button.style.visibility = "visible"
    } else if(typer.option.value == "nothing"){
        typer.option_input.style.visibility = "hidden"
        typer.type_button.style.visibility = "hidden"
    }
})

typer.option_button.addEventListener('click', options)
typer.x_button.addEventListener('click', xfunc)
