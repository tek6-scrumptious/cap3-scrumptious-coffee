import { addNewProduct } from "./AdminAPI";
export const formValidation = (
  e,
  name,
  price,
  quantity,
  description,
  imageUrl,
  roast,
  location,
  inputs
) => {
  let flag = 5;

  for (let element of inputs) {
    if (element.value === "" || element.value === 0) {
      emptyInput(element);
      flag--;
    } else {
      filledInput(element);
    }
  }

  if (flag === 5) {
    for (let element of inputs) {
      element.value = "";
    }
    document.getElementById("add-new-product-success").style.visibility =
      "visible";
    document.getElementById("add-new-product-error").style.visibility =
      "hidden";
    const jsonData = {
      name: name,
      imageUrl: imageUrl,
      description: description,
      storeQuantity: quantity,
      pricePrePound: price,
      roast: roast,
      location: location,
    };
    addNewProduct(jsonData);
  }
};

function emptyInput(element) {
  element.style.borderColor = "red";
  document.getElementById("add-new-product-error").style.visibility = "visible";
}

function filledInput(element) {
  element.style.borderColor = "black";
  document.getElementById("add-new-product-error").style.visibility = "hidden";
}

export const clearInput = (inputs) => {
  for (let element of inputs) {
    element.value = "";
  }
  document.getElementById("updated-product-success").style.visibility =
    "visible";
  if (
    (document.getElementById("updated-product-success").style.visibility =
      "visible")
  ) {
    setTimeout(function () {
      document.getElementById("updated-product-success").style.visibility =
        "hidden";
    }, 5000);
  }
};
