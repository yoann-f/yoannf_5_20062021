var lsqty = 0;
var cardQTY = localStorage.cardQTY;
var cardList;

// Variable pour le panier
//Tableau: On récupère l'ensemble des tableaux produits (product_ID + product_QTY)
if (productList != undefined) {
    var productList = productList;
    console.log("#1: Ma variable productList vaut :", productList);
} else {
    var productList = [];
    console.log("#2: Ma variable productList vaut :", productList);    
};

var productItem = {}; //Je déclare un OBJET: on récupère le couple product_ID et product_QTY
var product_ID; //String de l'url produit
var product_QTY; //Integer: on récupère la quanttié de produit



//Ensuite, je déclare l'url de l'API en variable
//const URL_API = "https://ab-p5-api.herokuapp.com/api/";
const URL_API = "https://teddies-api.herokuapp.com/api/";
//const URL_API = "http://localhost:3000/api/";
//

// Ici, je choisis le type de produit vendu dans la boutique ("cameras", "teddies", "furniture") et le déclare en variable
const productSell = "teddies";