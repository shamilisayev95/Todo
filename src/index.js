const  addButton = document.querySelector(".addButton");
let input = document.querySelector(".input");
const container = document.querySelector(".container");

class item {
    constructor(itemName) {
        this.createDiv(itemName)
    }

    createDiv(itemName) {
        let input = document.createElement("input");
        input.value = itemName;
        input.disabled = true;
        input.type = "text";
        input.classList.add("item_input");

        let itemBox = document.createElement("div");
        itemBox.classList.add("item");

        let removeButton = document.createElement("button");
        removeButton.innerHTML = "Delete";
        removeButton.classList.add("removeButton");

        let lineThroughtButton = document.createElement("button");
        lineThroughtButton.innerHTML = "Strike Out";
        lineThroughtButton.classList.add("lineThroughtButton");

        let editButton = document.createElement("button");
        editButton.innerHTML = "Edit";
        editButton.classList.add("editButton");


        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(removeButton);
        itemBox.appendChild(lineThroughtButton);
        itemBox.appendChild(editButton);

        removeButton.addEventListener("click", () => {
            this.remove(itemBox);
        })

        lineThroughtButton.addEventListener("click", () => {
            this.paintThroughtLine(input);
        })

        editButton.addEventListener("click", () => {
            this.edit(input)
        })

    }

    remove(item) {
        container.removeChild(item)
    }

    paintThroughtLine(input) {
        input.style.textDecoration = "line-through";
    }

    edit(input) {
        input.disabled = !input.disabled;
    }
}

    function check() {

        if (input.value !== "") {
            new item(input.value);
            input.value = "";
        }
    }

addButton.addEventListener("click", check);


