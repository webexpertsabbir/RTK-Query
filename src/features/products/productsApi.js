import axios from "../../utils/axios.config"

export const fatchProducts = async() =>{
    // const res = await fetch("products.json");
    // const data = await res.json();

    const data = await axios.get("/products");
    return data.data.data;
}

export const postProduct = async(productData) =>{
    await axios.post("/product", productData);
}
export const deleteProduct = async(id) =>{
    await axios.delete(`/product/${id}`);
}

