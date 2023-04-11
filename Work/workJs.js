// var temp = document.getElementById('d1')
// temp.innerHTML = "陳威翔"
// var cla = document.getElementsByClassName('c1')
// cla[1].innerHTML = "25"


// var x = document.createElement('div')
// x.setAttribute('id','new')
// x.innerText = '我應該要變成紅色'

// var y = document.createAttribute('input')
// y.setAttribute('type','text','value','你看到我了')




// function Func(ele,arg1,arg2,arg3,arg4,text) {    
//     var x = document.createElement(ele)
//     x.setAttribute(arg1,arg2)
//     x.setAttribute(arg3,arg4)
//     x.innerText = text
//     document.getElementsByTagName('body')[0].append(x)
// }


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
    // var btnRemove =document.getElementById('Remove')
    // btnRemove.addEventListener('click',reMove)
    // function reMove(){
    //     var li = document.getElementsByTagName('li');
    //     li.Remove();
    // }


// btn.addEventListener('click',Func) //第一個式事件(字串)，第二個是方法
// var isRed = false;
// function Func(){

//     isRed=!isRed;
//     var x = document.getElementById('d1')
//     if(isRed==true){
//         x.classList.add('red');
//         x.classList.remove('green')
//     }
//    else{
//         x.classList.add('green');
//         x.classList.remove('red')
//    }
    
//    document.getElementsByTagName('body')[0].addEventListener('mouseover',function(){ console.log('Hello')})

    
// }

