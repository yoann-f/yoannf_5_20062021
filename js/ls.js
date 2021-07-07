/* ********************************************************** */
// POUR TESTER LE L'ENVOI DE VALEURS DANS LE LOCALSTORAGE
localStorage.setItem("cart", "Teddy");
localStorage.cart2 = "Teddy2";
/* ********************************************************** */


var lsqty = 0;
localStorage.cartQTY = lsqty;

/* ********************************************************** */
//FONCTION QUI PERMET D'APPELER L'ENSEMBLE DES ID DE PRODUITS
function getProduct() {
  fetch(URL_API + productSell)
  .then((response) => response.json())
  
  .then((data) => {
    //let i = 0;
    //console.log(data);
    
    let l = data.length;
    for (let i = 0; i < l; i++) {
      console.log(data[i]._id);
    }})
    .catch((error) =>
    console.log(error)
    );
  }

getProduct();
/* ********************************************************** */


/* ********************************************************** */
// AFFICHE UN MESSAGE EN CONSOLE.LOG LORSQUE JE CLIQUE SUR UN BOUTON "AJOUTER AU PANIER"
//let addToCartClass = document.getElementsByClassName("addToCart");
//console.log(addToCartClass);

//for(let i = 0; i < addToCartClass.length; i++) {
// DANS LE CAS PRÉSENT, JE PEUX CLIQUER N'IMPORTE OU SUR LA PAGE, MAIS CE N'EST PAS CE QUE JE VEUX !!!!
//addToCartClass[i].addEventListener("click", () => console.log("test"));
/* ********************************************************** */
//};


// /////////////********************************************************************************************* */
// fetch(URL_API + productSell)
//   .then((res) => res.json()) // not useful for our app
//   .then((data) => {
//     console.log(data); // Le dossier retourne un tableau contenant l'ensemble des informations des ours en peluche
//     let l = data.length; // get numbers of element in the array for the for loop

//     for (let i = 0; i < l; i++) {
//       // All console.log are here to test if I request them well
//       console.log(data[i]);
//       console.log(data[i]["color"]);
//       console.log(data[i]["_id"]);
//       console.log(data[i]["name"]);
//       console.log(data[i]["description"]);
//       console.log(data[i]["price"]);
//       console.log(data[i]["imageUrl"]);

// /*let btnThumbnail = document.createElement("a");
// btnThumbnail.classList.add("stretched-link");
// btnThumbnail.href = data[i]["_id"];
// localStorage.productID = btnThumbnail.href;*/
// localStorage.productID = data[i]["_id"];    
// }});
// /////////////********************************************************************************************* */




// /*localStorageCart = JSON.parseFloat(localStorage.getItem("cart"));
// console.log(localStorageProduct);*/



// /// C'EST SUR LA BONNE VOIE !!!!!!!!!!!!!


// /////////////////////////////////////////////////////////////////////////////////////////////////
// const urlPageLS = window.location.search;
// console.log(urlPageLS);

// const urlProductPageLS = new URLSearchParams(urlPageLS);
// console.log(urlProductPageLS);

// const idProductLS = urlProductPageLS.get("id");
// console.log(idProductLS);
// /////////////////////////////////////////////////////////////////////////////////////////////////


// //console.log(URL_API + productSell + "/" + idProduct);

// //    AFFICHE DES ACCOLADES MAIS PAS LE CONTENU. JE CHERCHE A AFFICHER LES DONNÉES DE PRODUIT
//     let objAPI = fetch(URL_API + productSell + "/" + idProductLS);
//     let objStringify = JSON.stringify(objAPI);
//     localStorage.setItem("obj", objStringify);

//     let objParse = JSON.parse(objStringify);
//     localStorage.setItem("Obj2", objParse);