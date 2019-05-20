import axios from 'axios';
// import prod from './productsData';

// if typeid === same as the catergorieID
// then, get the Type.name

const getTypesData = categories => new Promise((resolve, reject) => {
  axios.get('../db/types.json')
    .then((resp) => {
      const allTypes = resp.data.types;
      const typesWithCatg = allTypes.map((type) => {
        const newTypes = type;
        for (let i = 0; i < categories.length; i += 1) {
          if (categories[i].id === newTypes.category) {
            newTypes.catName = categories[i].name;
          }
        }
        return newTypes;
      });
      resolve(typesWithCatg);
    })

    .catch(err => reject(err));
});

// const getTypeWithProd = products => new Promise((resolve, reject) => {
//   axios.get('../db/types.json')
//     .then((resp) => {
//       const allTypes = resp.data.types;
//       const prodTypes = allTypes.map((type) => {
//         const newProd = type;
//         for (let i = 0; i < products.length; i += 1) {
//           if (products[i].type === newProd.id) {
//             newProd.catName = products[i].name;
//             newProd.catDesc = products[i].description;
//           }
//         }
//         console.error(newProd);
//         return newProd;
//       });
//       resolve(prodTypes);
//     })
//     .catch(err => reject(err));
// });

export default { getTypesData };
