import { addNewProduct } from "./AdminAPI";
const inputErrorText = document.getElementById("add-new-product-error");
export const formValidation = (
  e,
  name,
  price,
  quantity,
  description,
  imageUrl,
  inputs
) => {
  let flag = 5;
  console.log(` before :${price}`);
  for (let element of inputs) {
    if (element.value == "" || element.value == 0) {
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
    console.log(` sending to db :${price}`);
    const jsonData = {
      name: name,
      imageUrl: imageUrl,
      description: description,
      storeQuantity: quantity,
      pricePrePound: price,
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
  document.getElementById("add-new-product-success").style.visibility =
    "visible";
}
