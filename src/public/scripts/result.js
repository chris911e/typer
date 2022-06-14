import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js'
import * as typer from '../modules/typer.js'

const result_canvas = document.getElementById('result-chart').getContext('2d')
var wpm_data = [], label_data = [], loc = document.location.href

typer.next_test.addEventListener('click', () => {
    wpm_data = []
    label_data = []
    location.replace(loc.replace('result', ''))
})

function createChart(){
}

window.addEventListener('load', () => {
    switch(sessionStorage.getItem('success')){
        case "true":
            wpm_data = sessionStorage.getItem('wpm_data').split(',')
            for(var i = 1; i < wpm_data.length+1; i++){
                label_data.push(i)
            }

            const data = {
                labels: label_data,
                datasets: [{
                    label: 'WPM',
                    borderColor: 'rgb(10, 50, 73)',
                    data: wpm_data,
                }]
            };

            const config = {
                type: 'line',
                data: data,
                options: {
                    y: {
                        ticks: {
                            stepSize: 5
                        }
                    }
                }
            };

            const result_chart = new Chart(result_canvas, config);

            break

        case "false":
            location.replace(loc.replace('result', ''))
            console.log("iufhs")
            break
    }
})


