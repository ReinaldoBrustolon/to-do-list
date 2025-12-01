const entrada = document.querySelector('#tarefa-input')
const adicionar = document.querySelector('#adicionar-btn')
const container = document.querySelector('.container')
const ul = document.querySelector('.lista-tarefas')
formulario = document.querySelector('.form')
const lista_tarefas_armazenadas = JSON.parse(localStorage.getItem('tarefas') || '[]')   

adicionar.addEventListener('click',lista_de_tarefas)

                 //Inicio do formulário//
formulario.addEventListener('submit',(e)=>{
e.preventDefault()

lista_de_tarefas()//All the list

})       //fIM formulário (submit)

function atualizarLocolstorage() {
localStorage.setItem('tarefas',JSON.stringify(lista_tarefas_armazenadas))

}
             
           //Início da função//
function lista_de_tarefas() {
if (entrada.value.trim() === '') return alert('Digite uma tarefa')

lista_tarefas_armazenadas.push(entrada.value)

atualizarLocolstorage()

let li = document.createElement('li')
li.classList.add('tarefa') 
ul.appendChild(li) 
render(li)

const button1 = document.createElement('button')
button1.classList.add('concluir-btn')
button1.textContent = 'Concluir'
li.appendChild(button1)
button1.addEventListener('click', () => {
     
})
  
const button2 = document.createElement('button')
button2.classList.add('remover-btn')
button2.textContent = 'Remover'
li.appendChild(button2) 
button2.addEventListener('click', ()=>{
ul.remove()
}) 

entrada.value = '' 

}           

function render(li) {

lista_tarefas_armazenadas.forEach(element => {
li.innerHTML = element

});
atualizarLocolstorage()
}
       
       
               
                   
                
           
      
        
    
       
   
      
      