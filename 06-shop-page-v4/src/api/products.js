

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api/v1/products';

export const getProducts = async () => {
    const response = await axios.get('/');
    return response.data;
}

// add new review
export const addReview = async (productId, review) => {
    const response = await axios.post(`/${productId}/reviews`, review);
    return response.data;
}