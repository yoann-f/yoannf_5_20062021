// Je récupère la quantité de produit ajouté au panier et l'affiche dans le panier en page d'accueil

var myqty = document.getElementById("qty-cart");
var qty = localStorage.getItem("cardQTY");
myqty.innerText = qty;

if (localStorage.getItem("cardQTY") && localStorage.cardQTY == 0) {
  console.log(
    "L'indication pour la quantité de produit a déja été créé dans le localstorage :",
    "KEY= cardQTY / Value= ",
    localStorage.cardQTY
  );
} else if (localStorage.getItem("cardQTY") && localStorage.cardQTY > 0) {
  console.log(
    'L\'indication pour la quantité de produit existe dans le localstorage et a une valeur autre que "0" :',
    "KEY= cardQTY / Value= ",
    localStorage.cardQTY
  );
} else {
  let myqty = 0;
  localStorage.setItem("cardQTY", JSON.stringify(myqty));
  console.log(
    "L'indication pour la quantité de produit n'existait pas dans le localstorage et a été créé :",
    "KEY= cardQTY / Value= ",
    localStorage.cardQTY
  );
}



//Cette fonction permet de récupérer les infos produit.
//On a besoin de récupérer l'ID du produit qui est un string
//On récupère un tableau
getProduct = (id) => {
  // A l'aide de la propriété "search", de l'interface "location", j'isole une chaîne de requête contenant un "?", suivi de paramètres URL
  const urlPage = window.location.search;
  // console.log(urlPage); //DEBUG: Récupération de l'url complet du produit de la page

  // Une fois le paramètre URL isolé, je récupère uniquement l'élément qui m'intéresse, dans mon cas, l'ID du produit présent dans l'URL
  const urlProductPage = new URLSearchParams(urlPage);
  // console.log(urlProductPage); //DEBUG:

  idProduct = urlProductPage.get("id");
  //console.log(idProduct); //DEBUG: Récupération de l'ID du produit présenté sur la page

  return idProduct; //Met fin à l'éxécution de la fonction et définit une valeur à renvoyer à la fonction appelante
};


//Cette fonction permet de vérifier si des produits sont présent dans le panier
//Cas 1: productList est vide ==> @return = string Votre panier est vide
//Cas 2: productList contient une ou des valeurs ==> @return = Array de la liste produits
checkProductList = (arrayProductList) => {

  if ((productList === undefined) || (productList == 0)) {
    return productList = 0;
    console.log("Votre panier est vide.", "Il n'y a pas d'entrée dans le tableau \"productList\": ", productList);
    } else {
    localStorage.testList = JSON.stringify(productList);
    console.log("Le tableau \"productList\" renvoie la valeur suivante :", localStorage.testList);
    }
  //Condition: Si array productList = vide alors string "votre panier est vide" sinon, on renvoie arrayProductList
};

    //Etape suivante Cas 2: On boucle sur le tableau productList lorsque l'on se trouve sur la page produit
    //Si productItem.product_ID existe déjà, alors on ne remplace que la valeur de quantité (productItem.product_QTY)
    //sinon, on ajoute le couple: productItem.product_ID + productItem.product_QTY
    //@return = array de productItem
    checkProduct = (arrayProductItem) => {
      if (productItem.product_ID == idProduct) {
          productItem.product_QTY = productItem.push(lsqty);
      } else {
        
          productItem.product_ID = productItem.push(idProduct);
          productItem.product_QTY = productItem.push(lsqty);
      }
      console.log(productItem);
      console.log(productList);

      //Condition: Si productItem.product_ID est présent (cela veut dire que nous avons un IDet une quantité). A partir de là, on remplace l'ancienne valeur de productItem.product_QTY par la nouvelle valeur
      //sinon, productItem.product_ID n'existe pas, on renvoie l'array productItem
      //@return = array productItem [product_ID, product_QTY]
    };


//Cette fonction permet de récupérer le couple ID produit + quantité
//On lui envoie en paramètre un tableau
//@Exemple : var productItem = [ProductItem.product_ID, productItem.product_QTY]
//On sauvegardera productList dans le localStorage (voir fichier variables.js)
addProductToCard = (arrayProduct) => {
		// arrayProduit = [idProduit, qte];
		// Dans LocalStorage sauvegarder l'idProduit & la quatité
		// localStorage.cardList = [arrayProduct[0],arrayProduct[1]];
		lsqty++; //Quantité de produit ajouté au panier. + 1 à chaque clic sur le bouton d'ajout au panier. La valeur est remise à 0 sur chaque page produit
        localStorage.cardLSQTY = lsqty; //Conserve en mémoire la valeur da ma variable lsqty tant que je ne la réinitialise pas en ajoutant un nouveau produit au panier
        cardQTY++; //Quantité total de produit présent dans le panier + 1 (à chaque clic sur le bouton d'ajout au panier)
        document.getElementById("qty-cart").innerHTML = cardQTY; //Envoie la valeur cardQTY à l'élément ID: qty-cart de mon DOM (correspond au bouton panier de la page)
        localStorage.cardQTY = cardQTY; //Mise en localstorage de la valeur cardQTY du panier (pour pouvoir la récupérer et l'afficher sur les autres pages). Chaque clic d'ajout au panier permet de raffraîchir la valeur

          //Ici, j'envoie les informations idProduct et lsqty dans le tableau productItem. J'indique également des 'keys' pour chacunes des valeurs
          //productItem.product_ID = idProduct;
          //productItem.product_QTY = lsqty;

          //On teste si le produit n'est pas déjà dans le panier, on ajoute l'ID produit et la quantité sinon on remplace uniquement la quantité
          if (productItem.product_ID != idProduct) {
            productItem.product_ID = idProduct;
			productItem.product_QTY = lsqty;
			//productItem.push(idProduct);
            //productItem.push(lsqty);
			console.log("productItem.product_ID est différent de idProduct !!!")

            //productList.product_LIST = productItem;
            productList.push(productItem);
            cardList = JSON.stringify(productList);
            localStorage.cardList = cardList;
          } else {
            //productList.product_LIST = productItem;
			
			productItem.product_QTY = lsqty;
			cardList = JSON.stringify(productList);
            localStorage.cardList = cardList;
            console.log('Valeur pour le tableau produit "productItem" :', productItem); //DEBUG LINE
            console.log("valeur de ma localStorage productList:", productList);
			
			};

    //productList = JSON.stringify([productItem.product_ID, productItem.product_QTY]);

    //on récupère productItem et on l'envoie dans la localStorage
    //localStorage.cardList = productList;
    console.log("valeur de ma localStorage cardList:", localStorage.cardList); //DEBUG:
};


//Cette fonction sert pour delete un produit du panier
//@condition: productItem existe
//On va modifier la quantité de la variable productItem
deleteProduct = (arrayProductItem) => {
  if (productList) {
    let id = productList.indexOf("idProduct"); //Retourne l'id produit depuis le tableau productList
    let removedProduct = productList.splice(id, 1); //Supprime le produit (dont l'id est indiqué) du tableau productList. La variable removedProduct prend la valeur du tableau productItem supprimé

    console.log(removedProduct); //Valeur du tableau productItem supprimé
    console.log(productList); //Renvoie le contenu du tableau productList après avoir retiré le productItem sélectionné

  }
};
