document.addEventListener("DOMContentLoaded", () => {

    let list = document.getElementById("list");
    let btn = document.getElementById("btn");

    btn.addEventListener("click", () => {
        AddItemToCart();
    });

    function AddItemToCart() {
        if (list.children.length === 1 && list.children[0].textContent === "Är för tillfället tom.") {
            list.innerHTML = '';
        }

        let newListItem = document.createElement("li");

        let itemName = document.createElement("span");
        itemName.textContent = "Hejsan!";
        itemName.style.marginRight = "10px";

        let itemPrice = document.createElement("span");
        itemPrice.textContent = "100 SEK";
        itemPrice.style.marginRight = "10px";

        let removeButton = document.createElement("button");
        removeButton.textContent = "X";
        removeButton.classList.add("btn", "btn-danger");
        removeButton.style.marginLeft = "10px";
        removeButton.addEventListener("click", () => {
            list.removeChild(newListItem);
        });

        newListItem.appendChild(itemName);
        newListItem.appendChild(itemPrice);
        newListItem.appendChild(removeButton);

        list.appendChild(newListItem);
    }
});
