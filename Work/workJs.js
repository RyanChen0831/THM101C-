input.addEventListener('keypress', (e)=>{
    if (e.key === 'Enter') {
      Add();  
    }
    else if(e.key === 'Delete'){
      Remove();
    }
  });
var btnAdd =document.getElementById('btn')

btnAdd.addEventListener('click',Add)

function Add(){
    var input = document.getElementById('input').value
    var list = document.createElement('li');
    var btnRemove = document.createElement('button');
    btnRemove.setAttribute('id','Remove');
    btnRemove.innerText = 'Remove';
    list.innerText = input;
    document.getElementById('order').append(list,btnRemove)
    btnRemove.addEventListener('click',Remove)
    function Remove(){
             list.remove();
             btnRemove.remove();
         }        
}


