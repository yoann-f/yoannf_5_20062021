// Ici, je choisis le type de produit vendu dans la boutique ("cameras", "teddies", "furniture") et le déclare en variable
const productSell = "teddies";

//Ensuite, je déclare l'url de l'API
const URL_API = "https://ab-p5-api.herokuapp.com/api/";

// Maintenant, j'effectue un fetch sur l'URL complète comprenant le lien de l'API "URL_API" associée au type de produit "productSell", à un slash séparatif "/" et enfin l'ID du produit
fetch(URL_API + productSell + "/" + localStorage.cardID)

    .then((res) => res.json()) // Envoie une promesse à notre application
    .then((data) => {
        console.log(data); // L'élément "data" retourne un tableau contenant l'ensemble des informations du produit

        // A l'aide de console.log, je teste si la requête pour chaque clés retourne bien un résultat
        console.log(data["colors"]);
        console.log(data["_id"]);
        console.log(data["name"]);
        console.log(data["description"]);
        console.log(data["price"]);
        console.log(data["imageUrl"]);

        /*      // Création d'une section avec la classe bootstrap : py-5 (Codée en dur dans le html)
              let section = document.createElement("section");
              section.classList.add("py-5");*/

        // Création d'une div avec les classes bootstrap (container px-4 px-lg-5 mt-5)
        let mainContent = document.createElement("div");
        mainContent.classList.add("container", "px-4", "px-lg-5", "mt-5");

        // Création d'une div avec les classes bootstrap (row gx-4 gx-lg-5 row-cols-2 row-cols-md-2 row-cols-xl-2 justify-content-center)
        let row = document.createElement("div");
        row.classList.add("row", "gx-4", "gx-lg-5", "row-cols-2", "row-cols-md-2", "row-cols-xl-2", "justify-content-center");

        // Création d'une div avec les classes bootstrap (row-cols-1 mb-5)
        let row_cols_1 = document.createElement("div");
        row_cols_1.classList.add("row-cols-1", "mb-5");

        // Création d'une div "card" avec les classes bootstrap suivante (card h-100)
        let card = document.createElement("div");
        card.classList.add("card", "h-100");

        // Création de la "card" contenant les informations du panier
        // Création du texte "Vos Articles :" <h4 class="row p-2 justify-content-center">Vos articles :</h4>
        let h4 = document.createElement("h4");
        h4.classList.add("row", "p-2", "justify-content-center");
        h4.innerText = "Vos articles :";

        // Création d'une div avec les classes bootstrap (row row-cols-2 card-body p-4)
        let row_2 = document.createElement("div");
        row_2.classList.add("row", "row-cols-2", "card-body", "p-4");

        // Création d'une div pour aligner le texte avec la classe bootstrap (text-center)
        let text_center = document.createElement("div");
        text_center.classList.add("text-center");

        // Création du titre du produit <h5 class="fw-bolder">Nom du produit</h5>
        let productName = document.createElement("h5");
        productName.classList.add("fw-bolder");
        productName.innerText = data["name"];

        // Création du prix du produit <span class="text-muted">€20.00</span>
        let spanPrice = document.createElement("span");
        spanPrice.classList.add("text-muted");
        spanPrice.innerText = data["price"] / 100 + " €";

        // Création d'une div pour la zone de quantité <div class="card-footer col-4 p-4 pt-0 border-top-0 bg-transparent"></div>
        let divQTY = document.createElement("div");
        divQTY.classList.add(
            "card-footer",
            "col-4",
            "p-4",
            "pt-0",
            "border-top-0",
            "bg-transparent"
        );

        let divQTYCenter = document.createElement("div");
        divQTYCenter.classList.add("text-center");

        let inputQTY = document.createElement("input");
        inputQTY.classList.add("form-control");
        inputQTY.type = "text";
        inputQTY.value = localStorage.getItem("cardQTY");

        // Création du bouton de validation de paiement <button class="btn text-black btn-outline-dark btn-block mt-auto" href="#">Payer</button>
        let cardValidation = document.createElement("button");
        cardValidation.classList.add("btn", "text-black", "btn-outline-dark", "btn-block", "mt-auto");
        cardValidation.href = "#";
        cardValidation.innerText = "Payer";


        // MISE EN FORME DES ÉLÉMENTS
        let myCard = document.getElementById("myCard");
        myCard.appendChild(mainContent);

        mainContent.appendChild(row);
        row.appendChild(row_cols_1);
        row_cols_1.appendChild(card);

        card.appendChild(h4);
        card.appendChild(row_2);
        row_2.appendChild(text_center);
        text_center.appendChild(productName);
        text_center.appendChild(spanPrice);

        row_2.appendChild(divQTY);
        divQTY.appendChild(divQTYCenter);
        divQTYCenter.appendChild(inputQTY);

        row_cols_1.appendChild(cardValidation);
    });