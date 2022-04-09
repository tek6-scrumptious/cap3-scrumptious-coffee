import axios from "axios";
import AdminDashboard from "./AdminDashboard";

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

export const dataRes = async () => {
  try {
    const res = await getAllData();
    console.log(res);

    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getAllData = async () => {
  try {
    const res = await axios.get("http://localhost:8080/products");
    //   .then((response) => response.data);

    return res.data;
  } catch {
    console.log("error");
  }
};
