// Déclaration de la variable localstorage ID (lsID)
var lsID;

function cardProduct() {
  if (lsID == undefined) {
    let objStringify = JSON.stringify(lsID);
    localStorage.setItem("cardID", objStringify);

  } else {
    let objStringify = JSON.stringify(lsID);
    localStorage.setItem("cardID", objStringify);
  }
}

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