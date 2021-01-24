const body = document.body;
const ul = document.createElement("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");
body.append(ul);

button.onclick = function addItem(){
    const listItem = input.value;
    input.value = "";

    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteButton = document.createElement("button");
    li.append(span);
    span.innerText = listItem;
    li.append(deleteButton);
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function deleteItem(){
        li.remove();
    }
    ul.append(li);
    input.focus();
}

