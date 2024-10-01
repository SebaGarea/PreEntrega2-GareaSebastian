import axios from 'axios'; //instalar axios npm i axios

export async function getAllProducts() {                    //funcion asincrona.. Esto es un GET en axios.
    return await axios.get('https://dummyjson.com/products');
}

export async function getProductById(id) {
    return await axios.get(`https://dummyjson.com/products/${id}`)
}