import axios from 'axios';

const getProductsData = () => new Promise((resolve, reject) => {
  axios.get('../db/products.json')
    .then((resp) => {
      const allProds = Object.values(resp.data.products[0]);
      resolve(allProds);
    })
    .catch(err => reject(err));
});

export default { getProductsData };
