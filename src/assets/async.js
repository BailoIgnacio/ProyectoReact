import { useParams } from "react-router-dom";

export async function getSingleProduct(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const products = await response.json();
    return products;
}

export async function GetProduct() {
    const reponse = await fetch (`https://dummyjson.com/products`)
    const data = await reponse.json();
    return data;
}

