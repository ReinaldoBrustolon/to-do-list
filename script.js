const entrada = document.querySelector('#tarefa-input')
const adicionar = document.querySelector('#adicionar-btn')
const container = document.querySelector('.container')
const ul = document.querySelector('.lista-tarefas')
formulario = document.querySelector('.form')
const lista_tarefas_armazenadas = JSON.parse(localStorage.getItem('tarefas') || '[]')
console.log(lista_tarefas_armazenadas)
const element_of_list = ''

adicionar.addEventListener('click',lista_de_tarefas)

                 //Inicio do formulário//
formulario.addEventListener('submit',(e)=>{
e.preventDefault()
})//fIM formulário (submit)

function atualizarLocolstorage() {
localStorage.setItem('tarefas',JSON.stringify(lista_tarefas_armazenadas))

}
             
           //Início da função//
function lista_de_tarefas() {
if (entrada.value.trim() === '') return alert('Digite uma tarefa')

lista_tarefas_armazenadas.push(entrada.value)
atualizarLocolstorage()
render()
entrada.value = '' 
}
       
// Resolver o problema dessa lista
// Já consegui salvar permanetemente os dados que vem do locolStorare, mas estão retornando duplicados enquanto não atualizo a página, mas quando a página é atualizada, então os dados ficam corretos! 

function render() {

lista_tarefas_armazenadas.forEach((element_of_list)=> {

let li = document.createElement('li')
li.classList.add('tarefa') 
ul.append(li)
console.log(element_of_list)
li.textContent = element_of_list
const button1 = document.createElement('button')
button1.classList.add('concluir-btn')
button1.textContent = 'Concluir'
li.append(button1)
button1.addEventListener('click', () => {

})
  
const button2 = document.createElement('button')
button2.classList.add('remover-btn')
button2.textContent = 'Remover'
li.append(button2) 
button2.addEventListener('click', ()=>{
ul.remove()

}) 

});



}       
render()
           
      
        
    
       
   
      
      