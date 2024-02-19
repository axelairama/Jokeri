let count = 0
const slots = document.querySelector('table')
document.querySelector('#count').innerHTML = count

const RNG = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

const slot = (number) => {
    document.querySelector("tr").insertCell(0).innerHTML = number
}

const newRow = () => {
    document.getElementById('numbers').insertRow(0).innerHTML = ""
}


document.querySelector('button').addEventListener('click', () => {
    newRow()
    for (let i = 0; i < 7;i++)
    slot(RNG(0,9))
    count++
    document.querySelector('#count').innerHTML = count
})