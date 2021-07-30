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
