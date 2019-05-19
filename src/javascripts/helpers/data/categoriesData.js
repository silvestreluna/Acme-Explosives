import axios from 'axios';

const getCatergoriesData = () => axios.get('../db/categories.json');

export default { getCatergoriesData };
