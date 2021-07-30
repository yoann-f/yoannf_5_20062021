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