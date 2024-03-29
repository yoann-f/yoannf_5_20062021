/*
* Start Bootstrap - Shop Homepage v5.0.0 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/

// //////////////////////////////////////////////////////////////////////////////// 
//MEMO : variables.js

    // Je récupère la quantité de produit ajouté au panier et l'affiche dans le panier en page d'accueil
    var myqty = document.getElementById("qty-cart");
    var qty = localStorage.getItem("cardQTY");
    myqty.innerText = qty;

    if (localStorage.getItem("cardQTY") && localStorage.cardQTY == 0) {
        console.log("L'indication pour la quantité de produit a déja été créé dans le localstorage :", "KEY= cardQTY / Value= ", localStorage.cardQTY);
    }
    else if (localStorage.getItem("cardQTY") && localStorage.cardQTY > 0) {
        console.log("L'indication pour la quantité de produit existe dans le localstorage et a une valeur autre que \"0\" :", "KEY= cardQTY / Value= ", localStorage.cardQTY);
    } else {
        let myqty = 0;
        localStorage.setItem("cardQTY", JSON.stringify(myqty));
        console.log("L'indication pour la quantité de produit n'existait pas dans le localstorage et a été créé :", "KEY= cardQTY / Value= ", localStorage.cardQTY);
    };

    //  ///////////////////////////////////////////////////////////////////////////////
    // Déclaration de la variable lsqty
    /*if (localStorage.cardQTY != 0) {
        var lsqty = localStorage.cardQTY;
        console.log("La variable lsqty est égale à :", lsqty); //DEBUG LIGNE
    } else {
        var lsqty = 0;
        console.log("Valeur par défaut de la variable lsqty :", lsqty); //DEBUG LIGNE
    }*/
    var lsqty = 0;
    var cardQTY = localStorage.cardQTY;

    
    /* /////////////////////PISTE ÉTUDIÉE /
    var productItem = JSON.parse(localStorage.getItem("productItem")) || "[]";
    console.log("Test:" + productItem);
    var productsList = JSON.parse(localStorage.getItem("cardList")) || "[]";
    console.log("Test:" + productsList);*/

/*
    if (productItem === undefined) {
      var productItem = [];
    } else {
      //productItem.push(idProduct);
      //productItem.push(lsqty);
      productItem.idProduct = localStorage.cardID;
      productItem.lsqty = localStorage.cardLSQTY;
      console.log('Contenu du tableau produit "productItem" :', productItem);
    };

    if (productsList === undefined) {
        var productsList = [];
    } else {
      //productsList.push(productItem);
      productsList.productItem = productItem;
      console.log('Contenu du tableau principal "productList" :', productsList);
      localStorage.cardList = JSON.stringify(productsList); //Besoin de passer le contenu du tableau en localstorage ??? Euh... non
    };*/





/*
  if (productItem === undefined && productsList === undefined) {
    var productItem = [];
    var productsList = [];
  } else {
    //productItem.push(idProduct);
    //productItem.push(lsqty);
    productItem.product_ID = localStorage.cardID;
    productItem.product_QTY = localStorage.cardLSQTY;
    console.log('Contenu du tableau produit "productItem" :', productItem);

    //productsList.push(productItem);
    productsList.push(productItem);
    console.log('Contenu du tableau principal "productList" :', productsList);
    localStorage.cardList = JSON.stringify(productsList); //Besoin de passer le contenu du tableau en localstorage ??? Euh... non
  };*/

  
  //////////////////////////////////////////////
        if (productItem === undefined) {
          var productItem = [];
        } else {
        }
  
////////////////////////////////////////////////
    if (productsList === undefined) {
        var productsList = [];
        //localStorage.cardList = JSON.stringify(productsList);
        console.log('Le tableau principal "productList" est vide :', productsList);
    } else {
        
        console.log('Contenu du tableau principal "productList" :', productsList);
    }
/////////////////////////////////////////////////


    /*if (productItem === undefined && productsList === undefined) {
      var productItem = [];
      var productsList = [];
    } else {
      //productItem.push(idProduct);
      //productItem.push(lsqty);
      /*productItem.product_ID = localStorage.cardID;
      productItem.product_QTY = localStorage.cardLSQTY;
      console.log('Contenu du tableau produit "productItem" :', productItem);*
      
      //productsList.push(productItem);
      //productsList.push(productItem);
      console.log('Contenu du tableau principal "productList" :', productsList);
      //localStorage.cardList = JSON.stringify(productsList); //Besoin de passer le contenu du tableau en localstorage ??? Euh... non
    };*/







/*
        // EN COURS /AVEC GIANCARLO
            //var productsList = [];
            //var productItem = [];

            var quantityItem = 0; //dédié au sélecteur de quantité
            //productItem.push(idProduct);
            //productItem.push(lsqty);
            productItem.idProduct = localStorage.cardID;
            productItem.lsqty = localStorage.cardLSQTY;
            console.log("Contenu du tableau produit \"productItem\" :", productItem);

            


            //productsList.push(productItem);
            productsList.productItem = productItem;
            console.log("Contenu du tableau principal \"productList\" :", productsList);
            localStorage.cardList = JSON.stringify(productsList); //Besoin de passer le contenu du tableau en localstorage ??? Euh... non
*/




// Ici, je choisis le type de produit vendu dans la boutique ("cameras", "teddies", "furniture") et le déclare en variable
const productSell = "teddies";

//Ensuite, je déclare l'url de l'API en variable
//const URL_API = "https://ab-p5-api.herokuapp.com/api/";
const URL_API = "https://teddies-api.herokuapp.com/api/";
//const URL_API = "http://localhost:3000/api/";


// PAGE ACCUEIL ////////////////////////////////////////////////////////////////////////////////
//A partir de l'url de l'API et du type de produit sélectionné, je récupère les informations et organise la construction de la page d'accueil du site
//MEMO : scripts.js == productsLayout
productsLayout = () => {

  

  fetch(URL_API + productSell)
    .then((res) => res.json())
    .then((data) => {
      console.log(data); //DEBUG: Le dossier retourne un tableau contenant l'ensemble des informations produits
      let l = data.length; // Envoie en valeur "l", le nombre d'éléments contenus dans le tableau pour la boucle "for" ci-après

      for (let i = 0; i < l; i++) {
        //DEBUG: Tous les éléments console.log sont présent afin de vérifier que je récupère bien les données de chaque produit
        /*console.log(data[i]);
            console.log(data[i]["color"]);
            console.log(data[i]["_id"]);
            console.log(data[i]["name"]);
            console.log(data[i]["description"]);
            console.log(data[i]["price"]);
            console.log(data[i]["imageUrl"]);*/

        // Création d'une div "conteneur" avec les classes bootstrap : col et mb-5
        let col = document.createElement("article");
        col.classList.add("col", "mb-5");
        col.id = "article-thumbnail";

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

        // Création d'un paragraphe qui contient la description du produit récupérée dans le tableau. Ajout de la classe "card-text"
        let productDescription = document.createElement("p");
        productDescription.classList.add("card-text");
        productDescription.innerText = data[i]["description"];

        // Création d'un élément span avec les classes (text-muted et my-3). Cet élément contient également le prix du produit divisé par 100 (car le prix indiqué dans l'API est en centimes)
        let price = document.createElement("span");
        price.classList.add("text-muted", "my-3");
        price.innerText = data[i]["price"] / 100 + " " + "€";

        // Création d'une div avec les classes (d-flex, justify-content-between et align-items-center)
        let productAction = document.createElement("div");
        productAction.classList.add(
          "d-flex",
          "justify-content-between",
          "align-items-center"
        );

        // Ici, je fais en sorte que la la vignette soit cliquable dans son intégralité avec un renvoi vers la page produit concernée
        let btnThumbnail = document.createElement("a");
        btnThumbnail.classList.add("stretched-link");
        btnThumbnail.href = "produit.html" + "?id=" + data[i]["_id"];

        /* --------------------------------------------- */
        // Mise en relation des éléments que nous avons créé ci-dessus et ajout de ces derniers au DOM de la page index.html

        //Création des "cards" visible sur la page index.html de la boutique Orinoco
        productAction.appendChild(btnThumbnail);
        productAction.appendChild(price);
        thumbnail.appendChild(productName);
        thumbnail.appendChild(productDescription);
        thumbnail.appendChild(productAction);
        col.appendChild(card);
        card.appendChild(img);
        card.appendChild(thumbnail);

        // Récupération de l'élément HTML dans lequel je veux inclure mes vignettes
        let container = document.getElementById("row");
        container.appendChild(col);
      }
    })

    // En cas d'erreur (non récupération de l'API par exemple), je retourne via une alert(), l'erreur en question
    .catch(function (error) {
      alert("Erreur : " + error);
    });
};










// PAGE PRODUIT ////////////////////////////////////////////////////////////////////////////////
productThumbnail = () => {
// A l'aide de la propriété "search", de l'interface "location", j'isole une chaîne de requête contenant un "?", suivi de paramètres URL
const urlPage = window.location.search;
//console.log(urlPage); //DEBUG : Récupération de l'url complet du produit de la page


// Une fois le paramètre URL isolé, je récupère uniquement l'élément qui m'intéresse, dans mon cas, l'ID du produit présent dans l'URL
const urlProductPage = new URLSearchParams(urlPage);
//console.log(urlProductPage); //DEBUG:

var idProduct = urlProductPage.get("id");
//console.log(idProduct); //DEBUG : Récupération de l'ID du produit présenté sur la page


// Maintenant, j'effectue un fetch sur l'URL complète comprenant le lien de l'API "URL_API" associée au type de produit "productSell", à un slash séparatif "/" et enfin l'ID du produit
fetch(URL_API + productSell + "/" + idProduct)

    .then((res) => res.json()) // Envoie une promesse à notre application
    .then((data) => {
        console.log(data); // L'élément "data" retourne un tableau contenant l'ensemble des informations du produit

        // A l'aide de console.log, je teste si la requête pour chaque clés retourne bien un résultat
        /*console.log(data["colors"]);
        console.log(data["_id"]);
        console.log(data["name"]);
        console.log(data["description"]);
        console.log(data["price"]);
        console.log(data["imageUrl"]);*/


// ////////////////////////////////////////////////////////////////////////////////
/* ---------- DÉBUT DE LA MISE EN FORME DE LA PAGE ---------- */
        // J'ajoute le nom du produit au titre de la page
        document.title = document.title + "-" + data["name"];

        // Création d'une div "conteneur" avec les classes bootstrap : col
        let col = document.createElement("article");
        col.classList.add("col", "mb-5");
        col.id = "article-thumbnail" + data["_id"];

        // Création d'une div "vignette" avec les classes bootstrap : card, h-100 et shadow
        let card = document.createElement("div");
        card.classList.add("card", "shadow");

        // Si soldé, création d'un "badge" indiquant que le produit est en solde
        let badge = document.createElement("div");
        badge.classList.add(
            "badge",
            "bg-dark",
            "text-white",
            "position-absolute"
        );

        // Création d'un élément image qui récupère l'url de l'image associée via le tableau. J'ajoute également une largeur de 100% et une hauteur de 50% ainsi que la propriété "cover"
        let img = document.createElement("img");
        img.src = data["imageUrl"];
        img.style.width = "100%";
        img.style.height = "50%";
        img.style.objectFit = "cover";

        // Création d'une div qui contient les éléments : nom, déscription et prix du produit, mise en forme avec les classes bootstrap: card-body, p-4, text-center, border, border-warning et border-2
        let thumbnail = document.createElement("div");
        thumbnail.classList.add(
            "card-body",
            "p-4",
            "text-center",
            "border",
            "border-warning",
            "border-2"
        );

        // Création du titre contenant le nom du produit
        let productName = document.createElement("h5");
        productName.classList.add("fw-bolder", "text-center");
        productName.innerText = data["name"];

        // Création d'un paragraphe contenant la description du produit. Ajout de la classe "card-text"
        let productDescription = document.createElement("p");
        productDescription.classList.add("card-text");
        productDescription.innerText = data["description"];

        // Création d'un élément "span" avec les classes "text-muted" et "my-3" afin d'afficher le prix du produit. Ce dernier sera divisé par 100 car il est affiché en centimes d'euros
        let price = document.createElement("span");
        price.classList.add("text-muted", "my-3");
        price.innerText = data["price"] / 100 + " " + "€";

        // Création d'une "div" avec les classes "d-flex", "justify-content-between" et "align-items-center". Permet la mise en forme des éléments affichant le prix, le choix des couleurs, l'ajout au panier
        let productAction = document.createElement("div");
        productAction.classList.add(
            "d-flex",
            "justify-content-between",
            "align-items-center"
        );

        // Création du bouton deroulant pour selectionner la couleur du produit parmi les choix possibles
        let productColorForm = document.createElement("form");
        productColorForm.style.zIndex = "3";

        let productColorLabel = document.createElement("label");
        productColorLabel.for = "product-option";
        productColorLabel.innerText = "Choisir la couleur : ";

        let productColorSelect = document.createElement("select");
        productColorSelect.name = "product-option";
        productColorSelect.id = "product-option";
        productColorSelect.style.margin = "0.5em";

        let options = data["colors"];
        for (let i = 0; i < options.length; i++) {
            var opt = options[i];
            var productColorOption = document.createElement("option");
            productColorOption.textContent = opt;
            productColorOption.value = opt;
            productColorSelect.appendChild(productColorOption);
        }

        // Création d'une "div" avec la classe "btn-group"
        let btnGroup = document.createElement("div");
        btnGroup.classList.add("btn-group");

        // Création d'un bouton avec les classes "btn", "btn-sm" et "btn-outline-secondary". Le texte "Ajouter au panier" est également ajouté à l'aide d'un innerText
        let btn = document.createElement("button");
        btn.classList.add(
            "btn",
            "btn-sm",
            "btn-outline-dark",
            "mt-auto",
        );
        btn.id = "addToCart";
        btn.style.margin = "0.5em";
        btn.innerText = "Ajouter au panier";
/* ---------- FIN DE LA MISE EN FORME DE LA PAGE ---------- */
// ////////////////////////////////////////////////////////////////////////////////


// ////////////////////////////////////////////////////////////////////////////////
/* ---------- MISE EN RELATION DE L'ENSEMBLE DES ÉLÉMENTS HTML QUE NOUS AVONS CRÉÉ PRÉCÉDEMMENT ET AJOUT DE CES DERNIERS AU DOM DE LA PAGE produit.html ---------- */
        // Bouton d'ajout au panier
        productAction.appendChild(btnGroup);
        btnGroup.appendChild(btn);

        // Menu déroulant pour le choix de la couleur du produit
        productAction.appendChild(productColorForm);
        productColorForm.appendChild(productColorLabel);
        productColorLabel.appendChild(productColorSelect);
        productColorSelect.appendChild(productColorOption);

        // Cadre contenant le nom, la description et le prix du produit. Ce cadre est lui-même contenu dans la vignette principale
        productAction.appendChild(price);
        thumbnail.appendChild(productName);
        thumbnail.appendChild(productDescription);
        thumbnail.appendChild(productAction);

        // Élément contenant l'image du produit mise en forme à l'aide de la propriété bootstrap "card". Cela permet à cette dernière d'être affichée en entête de la vignette
        col.appendChild(card);
        card.appendChild(img);

        // Vignette principale contenant l'ensemble des informations du produit
        card.appendChild(thumbnail);

        // Élément du code HTML dans lequel j'inclue ma vignette
        let container = document.getElementById("row");
        container.appendChild(col);
/* ---------- FIN DE LA MISE EN RELATION DE L'ENSEMBLE DES ÉLÉMENTS HTML QUE NOUS AVONS CRÉÉ PRÉCÉDEMMENT ET AJOUT DE CES DERNIERS AU DOM DE LA PAGE produit.html ---------- */
// ////////////////////////////////////////////////////////////////////////////////


// ////////////////////////////////////////////////////////////////////////////////
/* ---------- AFFICHAGE DU NOMBRE DE PRODUITS AJOUTER AU PANIER DANS LE BOUTON "PANIER" EN HAUT DE PAGE ---------- */
        // AFFICHE UN MESSAGE EN CONSOLE.LOG LORSQUE JE CLIQUE SUR UN BOUTON "AJOUTER AU PANIER"
        const addToCartClass = document.getElementById("addToCart");

        localStorage.cardID = idProduct;
        /*if (productItem === undefined) {
          var productItem = [];
        } else {
        }*/
        
        /*(function() {
          var productItem = JSON.parse(localStorage.getItem("productItem") || "[]");
          console.log("Test:" + productItem);
          productItem.forEach(function(idProduct, lsqty) {
          });
        });*/

        //Renvoie le nombre de produits présent dans le panier via le localstorage
        if (localStorage.cardQTY != 0) {
            var cardQTY = JSON.parse(localStorage.cardQTY);
            console.log("Mon panier contient", cardQTY, "produits") //DEBUG LIGNE
                        
            // Incrémentation du nombre de produits présent dans le panier
            addToCartClass.addEventListener("click", () => {
                lsqty++;
                localStorage.cardLSQTY = lsqty;//Conserve en mémoire la valeur da ma variable lsqty tant que je ne la réinitialise pas en ajoutant un nouveau produit au panier
                cardQTY++;
                document.getElementById("qty-cart").innerHTML = cardQTY;
                localStorage.cardQTY = cardQTY;
                productItem.product_ID = idProduct;
                productItem.product_QTY = lsqty;
                //productItem.push(idProduct);
                //productItem.push(lsqty);
                console.table([productItem]);
//                console.log('Nouveau contenu du tableau produit "productItem" :', productItem); //DEBBUG LINE
                //productsList.product_LIST = productItem;
                localStorage.setItem("cardList", JSON.stringify(productItem));
                //localStorage.cardList = productsList;
            });

            //MÉMO 
            //addToCartClass.addEventListener("click", () => (localStorage.cardID = idProduct));

            //addToCartClass.addEventListener("click", () => (productsList.product_LIST = productItem));
            //addToCartClass.addEventListener("click", () => (console.log('Contenu du tableau principal "productList" :', productsList))); //DEBUG LINE
            //addToCartClass.addEventListener("click", () => (localStorage.cardList = JSON.stringify(productsList)));
        } else {
            var cardQTY = 0;
            console.log("Mon panier ne contient pas de produits");

            // Incrémentation du nombre de produits présent dans le panier
            addToCartClass.addEventListener("click", () => {
              lsqty++; //Quantité de produit ajouté au panier. + 1 à chaque clic sur le bouton d'ajout au panier. La valeur est réemise à 0 sur chaque page produit
              localStorage.cardLSQTY = lsqty; //Conserve en mémoire la valeur da ma variable lsqty tant que je ne la réinitialise pas en ajoutant un nouveau produit au panier
              cardQTY++; //Quantité total de produit présent dans le panier + 1 (à chaque clic sur le bouton d'ajout au panier)
              document.getElementById("qty-cart").innerHTML = cardQTY; //Envoie la valeur cardQTY à l'élément ID: qty-cart de mon DOM (correspond au bouton panier de la page)
              localStorage.cardQTY = cardQTY; //Mise en localstorage de la valeur cardQTY du panier (pour pouvoir la récupérer et l'afficher sur les autres pages). Chaque clic d'ajout au panier permet de raffraîchir la valeur

              //Ici, j'envoie les informations idProduct et lsqty dans le tableau productItem. J'indique également des 'keys' pour chacunes des valeurs
              productItem.product_ID = idProduct;
              productItem.product_QTY = lsqty;

              //On teste si le produit n'est pas déjà dans le panier, on ajoute l'ID produit et la quantité sinon on remplace uniquement la quantité
              if (productItem.product_ID != idProduct) {
              productItem.push(idProduct);
              productItem.push(lsqty);
              } else {
              console.log("esle");
              //productItem.product_QTY.replace("15");
              };
              //console.table([productItem]);
              console.log('Nouvelle valeur pour le tableau produit "productItem" :', productItem); //DEBUG LINE

              
              //productsList.product_LIST = productItem;
              //localStorage.setItem("cardList", JSON.stringify(productItem));
              //localStorage.cardList = productsList;
            });

          //MÉMO
          //addToCartClass.addEventListener("click", () => (localStorage.cardID = idProduct));

          //addToCartClass.addEventListener("click", () => (productsList.product_LIST = productItem));
          //addToCartClass.addEventListener("click", () => (console.log('Contenu du tableau principal "productList" :', productsList))); //DEBUG LINE
          //addToCartClass.addEventListener("click", () => (localStorage.cardList = JSON.stringify(productsList)));
        }

        /*
        // EN COURS /AVEC GIANCARLO
            //var productsList = [];
            //var productItem = [];
            var quantityItem = 0; //dédié au sélecteur de quantité
            //productItem.push(idProduct);
            //productItem.push(lsqty);
            productItem.idProduct = localStorage.cardID;
            productItem.lsqty = localStorage.cardLSQTY;
            console.log("Contenu du tableau produit \"productItem\" :", productItem);
productItem.product_ID = idProduct;
              productItem.product_QTY = lsqty;
            


            //productsList.push(productItem);
            */
            //productsList.push(productItem);
            //productsList.product_LIST = productItem;
//            console.log("VERIFICATION PAGE PRODUIT: Contenu du tableau principal \"productList\" :", productsList);
            //localStorage.cardList = productsList;
            //localStorage.cardList = JSON.stringify(productsList); //Besoin de passer le contenu du tableau en localstorage ??? Euh... non


    })

    .catch(function (error) {
        alert("Erreur : " + error);
    });
}













// PAGE PANIER ////////////////////////////////////////////////////////////////////////////////
productsCard = () => {
// Maintenant, j'effectue un fetch sur l'URL complète comprenant le lien de l'API "URL_API" associée au type de produit "productSell", à un slash séparatif "/" et enfin l'ID du produit
if (localStorage.cardList != undefined) {
    
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

            /*      // Création d'une section avec la classe bootstrap : py-5
            let section = document.createElement("section");
            section.classList.add("py-5");*/

            // Création d'une div avec les classes bootstrap (container px-4 px-lg-5 mt-5)
            let mainContent = document.createElement("div");
            mainContent.classList.add("container", "px-4", "px-lg-5", "mt-5");

            // Création d'une div avec les classes bootstrap (row gx-4 gx-lg-5 row-cols-2 row-cols-md-2 row-cols-xl-2 justify-content-center)
            let row = document.createElement("div");
            row.classList.add(
                "row",
                "gx-4",
                "gx-lg-5",
                "row-cols-1",
                "row-cols-md-2",
                "row-cols-xl-2",
                "justify-content-center"
            );

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

            // Création d'une div avec les classes bootstrap (row row-cols-3 card-body p-4)
            let row_2 = document.createElement("div");
            row_2.classList.add("row", "row-cols-4", "card-body", "p-4");
            row_2.style.alignItems = "center";

            // Création de la balise <img src="" />
            let miniIMG = document.createElement("img");
            miniIMG.src = data["imageUrl"];

            // Création du bouton de suppression de produit (<button type="button" class="btn-close" aria-label="Close"></button>)
            let deleteButton = document.createElement("button");
            deleteButton.classList.add("btn-close");
            deleteButton.type = "button";
            deleteButton.ariaLabel = "Close";

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
            cardValidation.classList.add(
                "btn",
                "text-black",
                "btn-outline-dark",
                "btn-block",
                "mt-auto"
            );
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
            row_2.appendChild(miniIMG);
            row_2.appendChild(text_center);
            text_center.appendChild(productName);
            text_center.appendChild(spanPrice);

            row_2.appendChild(divQTY);
            divQTY.appendChild(divQTYCenter);
            divQTYCenter.appendChild(inputQTY);
            row_2.appendChild(deleteButton);

            //row_cols_1.appendChild(cardValidation);
            let buyer = document.getElementById("buyerCard");
            buyer.appendChild(cardValidation);
        })

} else {
    // Création d'une div avec les classes bootstrap (container px-4 px-lg-5 mt-5)
    let mainContent = document.createElement("div");
    mainContent.classList.add("container", "px-4", "px-lg-5", "mt-5");

    // Création d'une div avec les classes bootstrap (row gx-4 gx-lg-5 row-cols-2 row-cols-md-2 row-cols-xl-2 justify-content-center)
    let row = document.createElement("div");
    row.classList.add(
        "row",
        "gx-4",
        "gx-lg-5",
        "row-cols-1",
        "row-cols-md-2",
        "row-cols-xl-2",
        "justify-content-center"
    );

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
    h4.innerText = "Votre panier est vide";

    // MISE EN FORME DES ÉLÉMENTS
    let myCard = document.getElementById("myCard");
    myCard.appendChild(mainContent);

    mainContent.appendChild(row);
    row.appendChild(row_cols_1);
    row_cols_1.appendChild(card);

    card.appendChild(h4);
};
}