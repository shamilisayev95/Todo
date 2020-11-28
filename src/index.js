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

        container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(removeButton);

        removeButton.addEventListener("click", () => {
            this.remove(itemBox);
        })

    }
    remove(item){
        container.removeChild(item);
    }
}

function check() {
    if (input.value !== "") {
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener("click", check);


