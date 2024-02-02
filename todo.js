const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  if(inputBox.value ===""){
    alert("Enter Somethig First")
  }
  else{
    let li = document.createElement("li");
    li.textContent= inputBox.value;
    li.className= "todo-item";
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);

    inputBox.value="";
    span.addEventListener("click", ()=>{
      li.remove();
    })
  }

  
}
