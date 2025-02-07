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
            CreateCartItem(event.target);
        });
    }

    function CreateCartItem(button) {
        let card = button.closest(".card");  
        
        if (!card) return; 
        
        let itemName = card.querySelector(".card-title").textContent;
        let itemPrice = card.getAttribute("price") || 100;
        
        if (list.children.length === 1 && list.children[0].textContent === "Är för tillfället tom.") {
            list.innerHTML = '';
        }

        let numberOf = 1;
        
        
        for (let item of list.children){
            
            if(item.querySelector(".fw-bold").textContent === itemName){
                numberOf += Number(item.getAttribute('numberOf'));
                item.setAttribute('numberOf', numberOf);
                list.removeChild(item);
            }
        }
        
        
        let newListItem = document.createElement("li");
        newListItem.classList.add("w-100");
        newListItem.setAttribute('numberOf', numberOf);
        
        let titleRow = document.createElement("div");
        titleRow.classList.add("d-flex", "justify-content-between", "align-items-center", "w-100");
        
        let priceRow = document.createElement("div");
        priceRow.classList.add("d-flex", "flex-row", "justify-content-between", "align-items-center", "w-50");
        
        let nameSpan = document.createElement("span");
        nameSpan.textContent = itemName;
        nameSpan.classList.add("fw-bold", "text-wrap", "flex-grow-1");
        
        let priceSpan = document.createElement("span");
        priceSpan.textContent = `${itemPrice} kr`;
        priceSpan.classList.add("text-muted", "d-block", "mt-1");
        
        
        let numberOfSpan = document.createElement("span");
        numberOfSpan.textContent = `${numberOf} st`;
        numberOfSpan.classList.add("text-muted", "d-block");
        
        // let removeButton = document.createElement("button");
        // removeButton.textContent = "X";
        // removeButton.classList.add("btn", "btn-danger", "btn-sm", "ms-2");
        // removeButton.addEventListener("click", () => {
        //     TotalSum(-itemPrice);
        //     list.removeChild(newListItem);
        // });

        let plusOneButton = document.createElement("button");
        plusOneButton.textContent = "+";
        plusOneButton.classList.add("btn", "btn-outline-secondary", "btn-sm");
        plusOneButton.addEventListener("click", () => {
            numberOf++;
            newListItem.setAttribute('numberOf', numberOf);
            numberOfSpan.textContent = `${numberOf} st`;
            TotalSum(itemPrice);
        });

        let minusOneButton = document.createElement("button");
        minusOneButton.textContent = "-";
        minusOneButton.classList.add("btn", "btn-outline-secondary", "btn-sm");
        minusOneButton.addEventListener("click", () => {
            if (numberOf > 1) {
                numberOf--;
                newListItem.setAttribute('numberOf', numberOf);
                numberOfSpan.textContent = `${numberOf} st`;
                TotalSum(-itemPrice);
            } else {
                list.removeChild(newListItem);
                TotalSum(-itemPrice);
            }
        });


        titleRow.appendChild(nameSpan);
        
        priceRow.appendChild(priceSpan);
        priceRow.appendChild(minusOneButton);
        priceRow.appendChild(numberOfSpan);
        priceRow.appendChild(plusOneButton);
        //priceRow.appendChild(removeButton);
        
        newListItem.appendChild(titleRow);
        newListItem.appendChild(priceRow);
        newListItem.style.margin = "10px";
        
        list.appendChild(newListItem);
        TotalSum(itemPrice);
    }

    function TotalSum(totSum){
        sum += Number(totSum);

        sumText.textContent = `Totalsumma: ${sum} kr`;
    }
});
