const newItemInput = document.getElementById("new-item");
const addButton = document.getElementById("add-btn");
const list = document.getElementById("list");


addButton.addEventListener("click", addItem);


function addItem() {
    const itemText = newItemInput.value.trim(); 

    if (itemText === "") {
        alert("Por favor, escribe algo."); 
        return;
    }

    
    const li = document.createElement("li");
    li.textContent = itemText;

    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.addEventListener("click", () => {
        list.removeChild(li); 
    });

    li.appendChild(deleteBtn);

    
    list.appendChild(li);


    newItemInput.value = "";
    newItemInput.focus();
}