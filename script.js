const entrada = document.querySelector('#tarefa-input')
const adicionar = document.querySelector('#adicionar-btn')
const container = document.querySelector('.container')
const ul = document.querySelector('.lista-tarefas')
formulario = document.querySelector('.form')
const lista_tarefas_armazenadas = JSON.parse(localStorage.
getItem('tarefas') || '[]')
console.log('locolStorage-data-obtained',lista_tarefas_armazenadas)

adicionar.addEventListener('click',lista_de_tarefas)

function atualizarLocolstorage() {
    localStorage.setItem('tarefas',JSON.stringify(lista_tarefas_armazenadas))
}

                 //Inicio do formulário//
formulario.addEventListener('submit',(e)=>{
e.preventDefault()
})             //fIM formulário (submit)

//lista_de_tarefas//
function lista_de_tarefas(element) {
if (entrada.value.trim() === '') return alert('Digite uma tarefa')
lista_tarefas_armazenadas.push(entrada.value)

render_temporaria()

if (element === entrada.value) {
 render_permanente()
}
atualizarLocolstorage()
entrada.value = '' 

}

function render_temporaria() {
    ul.innerHTML += `
    <li class="tarefa">${entrada.value}
    <button class="concluir-btn">Concluir</button>
    <button class="remover-btn">Remover</button>
    </li>
    `
} 

function render_permanente() {

lista_tarefas_armazenadas.forEach((element)=> {

let li = document.createElement('li')
li.classList.add('tarefa') 
ul.append(li)
li.textContent = element

const button1 = document.createElement('button')
button1.classList.add('concluir-btn')
button1.textContent = 'Concluir'
li.append(button1)
button1.addEventListener('click', () => { 
 
})        //end-button1 

const button2 = document.createElement('button')
button2.classList.add('remover-btn')
button2.textContent = 'Remover'
li.append(button2) 

button2.onclick = () => {
li.remove()


atualizarLocolstorage()

} //end button 2

});//end-forEach

}//end-render_permanente

render_permanente()







   

      
        
    
       
   
      
       