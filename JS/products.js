document.addEventListener("DOMContentLoaded", () => {

    const products = [
        {
            name: "Cheesecake med glass och kolasås",
            price: 69,
            image: "https://img.koket.se/standard-mega/cheesecake-i-glas-med-kolasas-och-blabar.png.webp",
            description: "This is a longer card with supporting text below as a natural lead-in to additional content."
        },
        {
            name: "Varm choklad",
            price: 35,
            image: "https://img.koket.se/standard-mega/varm-choklad.jpg.webp",
            description: "This is a longer card with supporting text below as a natural lead-in to additional content."
        },
        {
            name: "Semmelvåffla",
            price: 39,
            image: "https://img.koket.se/standard-mega/smarrig-semmelvaffla-kungsornen-ny.png.webp",
            description: "This is a longer card with supporting text below as a natural lead-in to additional content."
        },
        {
            name: "Semla",
            price: 52,
            image: "https://assets.icanet.se/e_sharpen:80,q_auto,dpr_1.25,w_718,h_718,c_lfill/imagevaultfiles/id_246325/cf_259/klassiska_semlor.jpg",
            description: "This is a longer card with supporting text below as a natural lead-in to additional content."
        },
        {
            name: "Kola kaka",
            price: 25,
            image: "https://img.koket.se/standard-mega/kolakakor.jpg.webp",
            description: "This is a longer card with supporting text below as a natural lead-in to additional content."
        }
       
    ];

    function AddProducts() {
        const container = document.getElementById("bakverk");
        products.forEach(product => {
            const productHTML = `
                <div class="col">
                    <div class="card" price="${product.price}"> 
                        <img src="${product.image}" class="card-img-top" style="height: 300px; object-fit: cover;" alt="${product.name}" loading="lazy">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text">Lorem ipsum odor amet, consectetuer adipiscing elit.  </p>
                            <p class="price"></p>  
                            <button class="buyBtn">Köp</button>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += productHTML;
        });
    }


    AddProducts();
});
