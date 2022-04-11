let todolist = [];

function add(){
    let task = document.getElementById("todo").value;
    todolist.push(task);
    console.log(todolist);
    showTasks();
}


function showTasks(){
    let ullist = document.getElementById(`todoList`);
    ullist.innerHTML = "";
    let bodyList = "";
    
    for(let i=0; i<todolist.length; i++){
        bodyList += `<li> ${todolist[i]}  <button onclick="remove(${i})">remove</button></li> `;
    }

    ullist.innerHTML = bodyList;

}

function remove(index){
    todolist.splice(index,1);
    showTasks();
}