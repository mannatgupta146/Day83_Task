import axios from "axios"

export const getAllData = async ()=>{
    const response = await axios.get('https://fakestoreapi.com/products/')
    return response.data
}

export const getSelectedData = async (productId)=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    return response.data
}