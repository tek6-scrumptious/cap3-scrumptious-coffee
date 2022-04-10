import axios from "axios";

export const deleteProduct = async (productId) => {
  try {
    axios.delete(`http://localhost:8080/products/delete/${productId}`);
  } catch (error) {
    console.log(error);
  }
};

export const addNewProduct = async (jsonData) => {
  try {
    await axios.post("http://localhost:8080/products/add", jsonData);
  } catch (error) {}
};

export const getProductById = async (productId) => {
  try {
    const responseData = axios
      .get(`http://localhost:8080/products/${productId}`)
      .then((response) => response.data);
    return responseData;
  } catch (error) {
    console.log(error);
  }
};

export const updateProduct = async (
  id,
  productName,
  productPrice,
  qty,
  productImgUrl,
  productDescription
) => {
  try {
    axios.put(
      `http://localhost:8080/products/adminUpdate/${id}`,
      {},
      {
        params: {
          productName,
          productPrice,
          qty,
          productImgUrl,
          productDescription,
        },
      }
    );
  } catch {}
};

// export const dataRes = async () => {
//   try {
//     const res = await getAllData();
//     console.log(res);

//     return res;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const getAllData = async () => {
  try {
    return await axios.get("http://localhost:8080/products");
    // console.log(res);
  } catch (err) {
    console.log("error");
    console.log(err);
  }
};
