document.addEventListener("DOMContentLoaded", () => {

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let price = card.getAttribute("price"); 
        let priceElement = card.querySelector(".price");
        if (priceElement) {
            priceElement.textContent = `Pris: ${price}`; 
        }
    });

    let list = document.getElementById("list");
    let buttons = document.getElementsByClassName("buyBtn");
    let sumText = document.getElementById("totalSum");
    let sum = 0;


    for (let btn of buttons) {
        btn.addEventListener("click", (event) => {
            AddItemToCart(event.target);
        });
    }

    function AddItemToCart(button) {
        let card = button.closest(".card");  

        if (!card) return; 

        let itemName = card.querySelector(".card-title").textContent;
        let itemPrice = card.getAttribute("price") || "100 SEK";

        if (list.children.length === 1 && list.children[0].textContent === "Är för tillfället tom.") {
            list.innerHTML = '';
        }

        let newListItem = document.createElement("li");

        let nameSpan = document.createElement("span");
        nameSpan.textContent = itemName;
        nameSpan.style.marginRight = "10px";

        let priceSpan = document.createElement("span");
        priceSpan.textContent = itemPrice;
        priceSpan.style.marginRight = "10px";

        let removeButton = document.createElement("button");
        removeButton.textContent = "X";
        removeButton.classList.add("btn", "btn-danger");
        removeButton.style.marginLeft = "10px";
        removeButton.addEventListener("click", () => {
            TotalSum(-itemPrice);
            list.removeChild(newListItem);
        });

        newListItem.appendChild(nameSpan);
        newListItem.appendChild(priceSpan);
        newListItem.appendChild(removeButton);
        newListItem.style.margin = "10px";
        
        list.appendChild(newListItem);
        TotalSum(itemPrice);
    }

    function TotalSum(totSum){
        sum += Number(totSum);

        sumText.textContent = `Totalsumma: ${sum} kr`;
    }
});
