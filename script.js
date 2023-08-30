const inputBox = document.getElementById("ipbox");
const listCon = document.getElementById("listcon");

function addTask() {
    if(inputBox.value === '' ){
        alert("Please add some text.")
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = inputBox.value;
        listCon.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listCon.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listCon.innerHTML)
}

function getData(){
    listCon.innerHTML = localStorage.getItem("data");
}
getData();