let addCardBtn = document.getElementById("addCard");
let todoContainer = document.getElementById("todo");
let deleteBtn = document.getElementById("delete");
let doneContainer = document.getElementById('done');

addCardBtn.addEventListener('click', addTask);

function addTask(){
    let divCard = document.createElement('div');
    divCard.className = 'divCard';
    todoContainer.append(divCard);
    let card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = 'Your Task';
    card.setAttribute('contenteditable',true);
    divCard.append(card);
    card.focus();
   
    
    
    card.addEventListener('blur', (eventDetails)=>{
        var targetCard = eventDetails.target;
        var parentCard = targetCard.parentNode; // this is to refer to its parent
        if(!targetCard.textContent .trim()){
            parentCard.remove();
            
        }
    });
    const selector = document.createElement('select');
    selector.innerHTML = `
    <option value='todo'>Todo</option>
    <option value='inProgress'>In Progress</option>
    <option value='done'>Done</option>`
    divCard.append(selector);

    selector.addEventListener('change',(eventDetails)=>{
        let status = eventDetails.target.value;
        document.getElementById(status).append(divCard);
    })
    card.addEventListener('click',deleteCard);
    function deleteCard(){
         deleteBtn.addEventListener('click',nowVanish);
         function nowVanish(){
            if(todoContainer.contains(divCard))
            divCard.remove();  
         }
    }
  

    // if( doneContainer.contains(card)){
    //     card.style.backgroundColor= 'lightGreen';
    // }

}
