//Mapeamento dos elementos HTML
const numero = document.getElementById("numero")

const btnAdd = document.getElementById("btn-add")

const txtContar = document.getElementById("txt-contar")

const inseridos = document.getElementById("inseridos")

const btnApagar = document.getElementById("btn-apagar")

const primeiro = document.getElementById("primeiro")
const ultimo = document.getElementById("ultimo")
const soma = document.getElementById("soma")
const maior = document.getElementById("maior")
const menor = document.getElementById("menor")

const btnFinalizar = document.getElementById("btn-finalizar")
const btnReiniciar = document.getElementById("btn-reiniciar")

//Lógica

var listaNumeros = Array()

btnFinalizar.style.cursor = "not-allowed"
btnFinalizar.setAttribute("disabled", null)
btnApagar.style.cursor = "not-allowed"
btnApagar.setAttribute("disabled", null)

btnAdd.addEventListener("click", ()=>{
    if( numero.value == "" ) {
        alert("Insira um número!")
    } else {

        listaNumeros.push( Number (numero.value) )
        txtContar.innerHTML = "Restam " +
                            (10 - listaNumeros.length) +
                            "números"

        const newOption = document.createElement("option")
        newOption.value = numero.value 
        newOption.text = numero.value 
        inseridos.appendChild(newOption)

        inseridos.size = listaNumeros.length

        if( listaNumeros.length > 0 ) {
            btnApagar.style.cursor = "pointer"
            btnApagar.removeAttribute("disabled")
            //document.getElementById("opt1").style.display = "none"

        }

        if( listaNumeros.length == 10 ) {
            numero.style.cursor = "not-allowed"
            numero.setAttribute("readonly", null)
            btnAdd.style.cursor = "not-allowed"
            btnAdd.setAttribute("disabled", null)
            btnFinalizar.style.cursor = "pointer"
            btnFinalizar.removeAttribute("disabled")
        }

        console.log(listaNumeros)
    }
})

btnFinalizar.addEventListener("click", ()=>{
    primeiro.innerHTML = listaNumeros[0]
    ultimo.innerHTML = listaNumeros.at(-1)
    soma.innerHTML = listaNumeros.reduce( (a, b) => a + b )
    maior.innerHTML = listaNumeros.reduce((a,b ) => Math.max(a,b ))
    menor.innerHTML = listaNumeros.reduce((a,b ) => Math.min(a,b ))

})

btnReiniciar.addEventListener("click", ()=>{
    window.location.reload()
})
