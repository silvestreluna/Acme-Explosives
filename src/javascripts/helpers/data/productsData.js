import axios from 'axios';

const getProductsData = () => axios.get('../db/products.json');

export default { getProductsData };
