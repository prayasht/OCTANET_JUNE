function addtask(){
    let str=document.getElementById('getname').value;
    if(str!=""){
    let main=document.getElementById('contain');

    let task=document.createElement('div');
    task.className='todo';
  

    let check=document.createElement('input');
    check.type='checkbox';
    check.className='todo-checkbox';

    let label=document.createElement('label');
    label.id='taskname';
    label.textContent=str;

    let edit=document.createElement('button');
    edit.id='editname';
    edit.innerHTML=`<i class="ri-edit-2-fill"></i>`;
    edit.addEventListener('click' ,() =>{
     edittaskname(edit); 
    }
    );

    let dlt=document.createElement('button');
    dlt.id='remove-task';
    dlt.innerHTML=`<i class="ri-delete-bin-fill"></i>`;
    dlt.addEventListener('click' ,() =>{
     removetask(dlt); 
    }
    );

    task.appendChild(check);
    task.appendChild(label);
    task.appendChild(edit);
    task.appendChild(dlt);
    main.appendChild(task);

    document.getElementById('getname').value="";
}
else
 alert("please enter a task name.")    

}

function edittaskname(name){
 let strr=prompt("Enter the task name");
let tododiv=name.closest(".todo");
 tododiv.querySelector('#taskname') .innerText=strr;
}

function removetask(del){
    del.closest(".todo").remove();
}
function removeall(){
    var elements = document.getElementsByClassName('todo');
while(elements.length > 0){
    elements[0].parentNode.removeChild(elements[0]);
}
}

function checkall(){
    var checkboxs = document.getElementsByClassName('todo-checkbox');
    var i=checkboxs.length -1;
while( i>= 0){
    checkboxs[i].checked=true;
    i--;
  }
}

function uncheckall(){
    var checkboxs = document.getElementsByClassName('todo-checkbox');
    var i=checkboxs.length -1;
while( i>= 0){
    checkboxs[i].checked=false;
    i--;
}

}