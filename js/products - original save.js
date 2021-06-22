// 1. Start the server in the folder JWDP5 (npm start server)
// 2. Utilisation de "fetch" pour récupérer les informations depuis l'API (dans notre cas : teddies)

// Ici, je choisis le type de produit vendu dans la boutique ("cameras", "teddies", "furniture") et le déclare en variable
const productSell = "teddies";

//Ensuite, je déclare l'url de l'API + productSell en variable
const URL_API = "https://ab-p5-api.herokuapp.com/api/";



fetch(URL_API + productSell)

    .then((res) => res.json()) // not useful for our app
    .then((data) => {
        //console.log(data); // Le dossier retourne un tableau contenant l'ensemble des informations des ours en peluche
        let l = data.length; // get numbers of element in the array for the for loop

        for (let i = 0; i < l; i++) {
            // All console.log are here to test if I request them well
            console.log(data[i]);
            console.log(data[i]["color"]);
            console.log(data[i]["_id"]);
            console.log(data[i]["name"]);
            console.log(data[i]["description"]);
            console.log(data[i]["price"]);
            console.log(data[i]["imageUrl"]);

            
            // J'ajoute le nom du produit au titre de la page
            //let docTitle = document.title; //PAS BESOIN DE LE DECLARER EN VARIABLE ??
            document.title = document.title + "-" + data[i]["name"];
            
            /////////////////////////////////////////////////////////////////////////
            /*/Instruction pour tester l'emploi d'URL avec le nom du produit et son ID
            idProduct = data[i]["_id"];
            nameProduct = data[i]["name"];
            alert(URL_API + productSell + "/" + nameProduct + "/" + idProduct);
            ////////////////////////////////////////////////////////////////////////*/

            

            // Création d'une div "conteneur" avec les classes bootstrap : col
            let col = document.createElement("div");
            col.classList.add("col");

            // Création d'une div "vignette" avec les classes bootstrap : card, h-100 et shadow
            let card = document.createElement("div");
            card.classList.add("card", "h-100", "shadow");

            // Si soldé, création d'un "badge" indiquant que le produit est en solde
            let badge = document.createElement("div");
            badge.classList.add(
                "badge",
                "bg-dark",
                "text-white",
                "position-absolute"
            );

            // Création d'un élément image qui récupère l'url de l'image associée via le tableau
            //where I fill the src attribute with the url given via the array "data". I also add a width 100% and a height 100%.
            let img = document.createElement("img");
            img.src = data[i]["imageUrl"];
            img.style.width = "100%";
            img.style.height = "50%";
            img.style.objectFit = "cover";

            // Création d'une div qui contient les éléments : nom, déscription et prix du produit, mis en forme avec les classes bootstrap: card-body, p-4 et text-center
            let thumbnail = document.createElement("div");
            thumbnail.classList.add(
                "card-body",
                "p-4",
                "text-center",
                "border",
                "border-warning",
                "border-2"
            );

            // Création du titre contenant le nom du produit qui est récupéré dans le tableau
            let productName = document.createElement("h5");
            productName.classList.add("fw-bolder", "text-center");
            productName.innerText = data[i]["name"];

            // creation of a p tag that contain the description of the camera given by the array "data". Also added a class "card-text"
            let productDescription = document.createElement("p");
            productDescription.classList.add("card-text");
            productDescription.innerText = data[i]["description"];
            /*thumbnail.style.height = "15em";
            thumbnail.style.overflow = "hidden";*/

            // Creation of a small tag with class text-muted and with a text that contain the price of the camera given by the array "data" divided by 100 because the price was in penny
            let price = document.createElement("span");
            price.classList.add("text-muted", "my-3");
            price.innerText = data[i]["price"] / 100 + " " + "€";

            // creation of a div tag with classes d-flex, justify-content-between and align-items-center
            let productAction = document.createElement("div");
            productAction.classList.add(
                "d-flex",
                "justify-content-between",
                "align-items-center"
            );

            // creation of a div tag with the class btn-group
            let btnGroup = document.createElement("div");
            btnGroup.classList.add("btn-group");

            // creation of a btn with the class btn, btn-sm and btn-outline-secondary. I also added the text "Buy" inside.
            let btn = document.createElement("button");
            btn.classList.add("btn", "btn-sm", "btn-outline-dark", "mt-auto");
            btn.style.margin = "0.5em";
            btn.innerText = "Ajouter au panier";


            /* --------------------------------------------- */

            /* Here, we will connect all the HTML elements we have created above and added them to the DOM of the index.html*/


            //Création des "cards" visible sur la page index.html de la boutique Orinoco
            productAction.appendChild(btnGroup);
            btnGroup.appendChild(btn);
            productAction.appendChild(price);

            thumbnail.appendChild(productName);
            //      thumbnail.appendChild(productReview);
            thumbnail.appendChild(productDescription);
            thumbnail.appendChild(productAction);

            col.appendChild(card);
            card.appendChild(img);
            card.appendChild(thumbnail);

            // get the HTML element where I want to include my card
            let container = document.getElementById("row");
            container.appendChild(col);
        }
    })
    .catch(function (error) {
        alert("Erreur : " + error);
    });
