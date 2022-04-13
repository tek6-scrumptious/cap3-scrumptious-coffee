import axios from "axios";

export const deleteProduct = async (productId) => {
  try {
    await axios.delete(
      `http://scrumptious-env-2.eba-ixgv7adq.us-east-1.elasticbeanstalk.com/delete/${productId}`
    );
  } catch (error) {
    console.log(error);
  }
};

export const addNewProduct = async (jsonData) => {
  try {
    await axios.post(
      "http://scrumptious-env-2.eba-ixgv7adq.us-east-1.elasticbeanstalk.com/add",
      jsonData
    );
  } catch (error) {}
};

export const getProductById = async (productId) => {
  try {
    const responseData = await axios.get(
      `http://scrumptious-env-2.eba-ixgv7adq.us-east-1.elasticbeanstalk.com/${productId}`
    );
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
    await axios.put(
      `http://scrumptious-env-2.eba-ixgv7adq.us-east-1.elasticbeanstalk.com/adminUpdate/${id}`,
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

export const getAllData = async () => {
  try {
    return await axios.get(
      "http://scrumptious-env-2.eba-ixgv7adq.us-east-1.elasticbeanstalk.com/"
    );
  } catch (err) {
    console.log("error");
    console.log(err);
  }
};
