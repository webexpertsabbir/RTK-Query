import axios from "../../utils/axios.config"

export const fatchProducts = async() =>{
    // const res = await fetch("products.json");
    // const data = await res.json();

    const data = await axios.get("/products");
    return data.data.data;
}
