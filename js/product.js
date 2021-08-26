// PAGE PRODUIT ////////////////////////////////////////////////////////////////////////////////
productThumbnail = () => {
  var idProduct = getProduct();
  console.log(idProduct); //DEBUG LINE: Affichage de l'ID du produit présenté sur la page, qui est récupéré via la fonction getProduct()

  // Maintenant, j'effectue un fetch sur l'URL complète comprenant le lien de l'API "URL_API" associée au type de produit "productSell", à un slash séparatif "/" et enfin l'ID du produit
  fetch(URL_API + productSell + "/" + idProduct)
    .then((res) => res.json()) // Envoie une promesse à notre application
    .then((data) => {
      // console.log(data); // L'élément "data" retourne un tableau contenant l'ensemble des informations du produit

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
      btn.classList.add("btn", "btn-sm", "btn-outline-dark", "mt-auto");
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

	  
      //Renvoie le nombre de produits présent dans le panier via le localstorage
      if (localStorage.cardQTY != 0) {
        var cardQTY = JSON.parse(localStorage.cardQTY);
        console.log("Mon panier contient", cardQTY, "produits"); //DEBUG LIGNE
		
		productList = JSON.parse(localStorage.cardList);

        // Incrémentation du nombre de produits présent dans le panier
        addToCartClass.addEventListener("click", () => {
          lsqty++;
          localStorage.cardLSQTY = lsqty; //Conserve en mémoire la valeur da ma variable lsqty tant que je ne la réinitialise pas en ajoutant un nouveau produit au panier
          cardQTY++;
          document.getElementById("qty-cart").innerHTML = cardQTY;
          localStorage.cardQTY = cardQTY;
		  
          //Ici, j'envoie les informations idProduct et lsqty dans le tableau productItem. J'indique également des 'keys' pour chacunes des valeurs
          //productItem.product_ID = idProduct;
          //productItem.product_QTY = lsqty;


          console.log("Voir :", productItem, productItem.product_ID, idProduct);
          //On teste si le produit n'est pas déjà dans le panier. On ajoute l'ID produit et la quantité sinon on remplace uniquement la quantité
          if (productItem.product_ID != idProduct) {
            //productItem.push(idProduct);
			productItem.product_ID = idProduct;
			productItem.product_QTY = lsqty;
			console.log("productItem.product_ID est différent de idProduct !!!")

            //productList.product_LIST = productItem;
            productList.push(productItem);

            cardList = JSON.stringify(productList);
            localStorage.cardList = cardList;
          } else {
            productItem.product_QTY = lsqty;
			console.log("productItem.product_ID n'est pas différent de idProduct !!!")

            //productList.product_LIST = productItem;
            //productList.push(productItem);

            cardList = JSON.stringify(productList);
            localStorage.cardList = cardList;
            console.log('Valeur pour le tableau produit "productItem" :', productItem); //DEBUG LINE
            console.log("valeur de ma localStorage cardList:", localStorage.cardList);
          }
        });
      } else {
        var cardQTY = 0;
        console.log("Mon panier ne contient pas de produits");

        // Incrémentation du nombre de produits présent dans le panier
        addToCartClass.addEventListener("click", () => {
          //J'ajoute le ID et la Qté au panier
          addProductToCard({idProduct, lsqty});
          console.log("Suis je bien sur cet event ?");

          /*lsqty++; //Quantité de produit ajouté au panier. + 1 à chaque clic sur le bouton d'ajout au panier. La valeur est remise à 0 sur chaque page produit
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

            //productList.product_LIST = productItem;
            productList = JSON.stringify([productItem.product_ID, productItem.product_QTY]);
            localStorage.cardList = productList;
          } else {
            //productList.product_LIST = productItem;
            productList = JSON.stringify([productItem.product_ID, productItem.product_QTY]);
            localStorage.cardList = productList;
            console.log(
              'Valeur pour le tableau produit "productItem" :',
              productItem
            ); //DEBUG LINE
            console.log(
              "valeur de ma localStorage cardList:",
              localStorage.cardList
            );
          }*/

          //console.table([productItem]);
          //productsList.product_LIST = productItem;
          //localStorage.setItem("cardList", JSON.stringify(productItem));
          //localStorage.cardList = productsList;
        });
      }

	})

    .catch(function (error) {
      alert("Erreur : " + error);
    });
};