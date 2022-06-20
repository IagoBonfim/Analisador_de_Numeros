let num = document.querySelector('#txtn')
let select = document.querySelector('#select')
let res = document.querySelector('#res')
let btnAdd  = document.querySelector('#btnadd')
let arr = []

function adicionar(){
    if(num.value < 0 || num.value >100){
        alert(`Não é possível adicionar esse valor`)  
        num.value = ' '  
    }else if(num.value.length ==0){
        alert(`Digite um número!`) 
    }else {
        arr.push(Number(num.value))
        let item = document.createElement('option')
        item.text = (Number(num.value))
        select.appendChild(item)
        num.value = ' '
        arr.sort()
    }
}
function analisar(){
    if(!(arr.length ==0)){
        let arrSoma = 0
        for (let s of arr){
            arrSoma += s
        }       
        res.innerHTML = `<p>Ao todo, temos ${arr.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor foi ${arr[arr.length -1]}.<p>` 
        res.innerHTML += `<p>O menor valor foi ${arr[0]}.<p>` 
        res.innerHTML += `<p>Somando todos os valores, temos ${arrSoma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${(arrSoma / arr.length).toFixed(1)}</p>`
        btnAdd.addEventListener('click', () => {res.innerHTML = ''})
    }    
}
