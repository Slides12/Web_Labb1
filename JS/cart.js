document.addEventListener("DOMContentLoaded", () => {

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
        let itemPrice = card.getAttribute("price") || 9999;
        
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

        // Accordion grejer
    let accordion = document.createElement("div");
    accordion.classList.add("accordion", "accordion-flush");

    let accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    let accordionHeader = document.createElement("h2");
    accordionHeader.classList.add("accordion-header");

    let accordionButton = document.createElement("button");
    accordionButton.classList.add("accordion-button", "collapsed");
    accordionButton.type = "button";
    accordionButton.setAttribute("data-bs-toggle", "collapse");
    accordionButton.setAttribute("data-bs-target", `#flush-collapse-${itemName.replace(/\s+/g, '-')}`);
    accordionButton.setAttribute("aria-expanded", "false");
    accordionButton.setAttribute("aria-controls", `flush-collapse-${itemName.replace(/\s+/g, '-')}`);
    
    let accordionCollapse = document.createElement("div");
    accordionCollapse.id = `flush-collapse-${itemName.replace(/\s+/g, '-')}`;
    accordionCollapse.classList.add("accordion-collapse", "collapse");
    accordionCollapse.setAttribute("data-bs-parent", "#accordionFlushExample");

    let accordionBody = document.createElement("div");
    accordionBody.classList.add("accordion-body");
    accordionBody.textContent = `${itemName} är ett läckert bakverk som är gjort av:  Lorem ipsum odor amet, consectetuer adipiscing elit.`;

    accordionCollapse.appendChild(accordionBody);
    accordionItem.appendChild(accordionHeader);
    accordionHeader.appendChild(accordionButton);
    accordionItem.appendChild(accordionCollapse);
    accordion.appendChild(accordionItem);

    // Model grejer
    let modalBTN = document.createElement("button");
    modalBTN.textContent = "i";
    modalBTN.classList.add("fs-5");
    modalBTN.classList.add("btn", "btn-dark","rounded-pill");

    modalBTN.addEventListener("click", function() {

        let currentModal = document.getElementById("exampleModalCenteredScrollable");
        if (currentModal) {
            currentModal.remove();
        }


        let modal = document.createElement("div");
        modal.className = "modal fade";
        modal.id = "exampleModalCenteredScrollable";
        modal.tabIndex = "-1";
        modal.setAttribute("aria-labelledby", "exampleModalCenteredScrollableTitle");
        modal.setAttribute("aria-hidden", "true");
        modal.role = "dialog";

        modal.innerHTML = `
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5">${itemName}</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>${itemName} är ett läckert bakverk som är gjort av:  Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            `;

            document.body.appendChild(modal);
            new bootstrap.Modal(modal).show();

    });



    // bygg ihop allt

    titleRow.appendChild(nameSpan);
    priceRow.appendChild(priceSpan);
    priceRow.appendChild(minusOneButton);
    priceRow.appendChild(numberOfSpan);
    priceRow.appendChild(plusOneButton);
    titleRow.appendChild(modalBTN);
    
    newListItem.appendChild(titleRow);
    newListItem.appendChild(priceRow);
    newListItem.style.margin = "10px";
    newListItem.appendChild(accordion);
    
    list.appendChild(newListItem);
    TotalSum(itemPrice);
}

    function TotalSum(totSum){
        sum += Number(totSum);

        sumText.textContent = `Totalsumma: ${sum} kr`;
    }


   
    
});
