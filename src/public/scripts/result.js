import * as typer from '../modules/typer.js'

typer.next_test.addEventListener('click', () => {
    var loc = document.location.href
    location.replace(loc.replace('result', ''))
})

