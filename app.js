const numero1 = document.getElementById('numero1')
const numero2 = document.getElementById('numero2')
const resultado = document.getElementById('resultado')
const sumar = document.getElementById('sumar')
const restar = document.getElementById('restar')
const multiplicar = document.getElementById('multiplicar')
const dividir = document.getElementById('dividir')

document.addEventListener('DOMContentLoaded', () => {
    resultado.value = ''
})

sumar.addEventListener('click', () => {
    if (numero1.value !== '' && numero2.value !== '' && !isNaN(parseFloat(numero1.value)) && !isNaN(parseFloat(numero2.value)))
        resultado.value = parseFloat(numero1.value) + parseFloat(numero2.value)
    else
        alert('Valores incorrectos')
})

restar.addEventListener('click', () => {
    if (numero1.value !== '' && numero2.value !== '' && !isNaN(parseFloat(numero1.value)) && !isNaN(parseFloat(numero2.value)))
        resultado.value = parseFloat(numero1.value) - parseFloat(numero2.value)
    else
        alert('Valores incorrectos')
})

multiplicar.addEventListener('click', () => {
    if (numero1.value !== '' && numero2.value !== '' && !isNaN(parseFloat(numero1.value)) && !isNaN(parseFloat(numero2.value)))
        resultado.value = parseFloat(numero1.value) * parseFloat(numero2.value)
    else
        alert('Valores incorrectos')
})

dividir.addEventListener('click', () => {
    if (numero1.value !== '' && numero2.value !== '' && !isNaN(parseFloat(numero1.value)) && !isNaN(parseFloat(numero2.value))) {
        if (parseFloat(numero1.value) === 0) {
            alert('No se puede dividir por cero')
            return
        }
        resultado.value = parseFloat(numero1.value) / parseFloat(numero2.value)
    }
    else
        alert('Valores incorrectos')
})

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err));
    });
}
