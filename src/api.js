import axios from "axios";


export const fetchProductList = async ({ pageParam = 1 }) => {
    const { data } = await axios.get("https://gutendex.com/books.json?page=" + pageParam);

    return data;
}; 


export const fetchProduct = async (id) => {
    const { data } = await axios.get(`https://gutendex.com/books/${id}.json`);

    return data;
}; 

