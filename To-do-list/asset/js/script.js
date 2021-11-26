const articolo= document.querySelector('#inputIn')
const printAlert =document.querySelector('#printDisplay1')
const lista = document.querySelector('.lista');

lista.addEventListener('click', deleteList)

function addArticolo (e) {
  //CONTROLLO VALORE IN INPUT
  if(!articolo.value){printAlert.innerHTML= `<div class="alert alert-danger" role="alert" > INSERISCI UN PROMEMORIA</div>`
  }else{
    printAlert.innerHTML=``
    //CREO ELEMENTO LI
    const insertList = document.createElement('li');
    insertList.className = 'task'

    //stampo valore in imput in un nuovo text node
    insertList.appendChild(document.createTextNode(articolo.value))

    //creo link per eliminare createTextNode
    const del = document.createElement('a');

    //aggiiungo classe ad elemento a
    del.className='toDo';
    del.innerHTML=`<h3><i class="bi bi-check2-square"></i></h3>`
    insertList.appendChild(del)

    //inserisco del all'interno dell'LI
    lista.appendChild(insertList)
    //svuoto campo input
    articolo.value = ""

  }

}


function deleteList (e){
  if(e.target.parentElement.parentElement.classList.contains('toDo')){
    e.target.parentElement.parentElement.parentElement.remove()
  };
}
