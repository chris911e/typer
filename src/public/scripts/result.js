import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js'
import * as typer from '../modules/typer.js'

const result_canvas = document.getElementById('result-chart').getContext('2d')
var wpm_data = [], label_data = [], loc = document.location.href, wpm_avg = 0

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
            var errors = parseInt(sessionStorage.getItem('errors'))
            var accuracy = parseInt(sessionStorage.getItem('accuracy'))
            var time = parseInt(sessionStorage.getItem('time'))
            var input_length = parseInt(sessionStorage.getItem('input_length'))
            var difficulty = sessionStorage.getItem('difficulty')
            var option_mode = sessionStorage.getItem('option_mode')

            document.getElementById('accuracy').innerText = `${accuracy}%`
            document.getElementById('mistakes').innerText = errors
            document.getElementById('chars').innerText = input_length
            document.getElementById('type').innerText = `${option_mode} | ${difficulty}`
            document.getElementById('time').innerText = `${time}s`

            wpm_data = sessionStorage.getItem('wpm_data').split(',')

            for(var x = 0; x < wpm_data.length; x++){
                wpm_avg += parseInt(wpm_data[x])
            }
            document.getElementById('wpm').innerText = Math.floor(wpm_avg/wpm_data.length)

            for(var i = 1; i < wpm_data.length+1; i++){
                label_data.push(i)
            }

            const data = {
                labels: label_data,
                datasets: [{
                    label: 'WPM',
                    borderColor: 'rgb(10, 50, 73, 0.5)',
                    data: wpm_data,
                }]
            };

            const config = {
                type: 'line',
                data: data,
                options: {
                    maintainAspectRatio: false,
                    responsive: false,
                    x: {
                        title: {
                            display: true,
                            text: 'seconds'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'wpm'
                        },
                        min: 0,
                        max: 300,
                        ticks: {
                            stepSize: 2
                        }
                    }
                }
            };

            new Chart(result_canvas, config);
            break

        case "false":
            location.replace(loc.replace('result', ''))
            break
    }
})


