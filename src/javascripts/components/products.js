// import products from '../helpers/data/productsData';
import catgData from '../helpers/data/categoriesData';
import typesData from '../helpers/data/typesData';
import types from './types';
import util from '../helpers/util';


const cardDomPrinter = (array) => {
  let domString = '';
  array[0].forEach((catg) => {
    domString += '<div class="card col-sm-3 m-4">';
    domString += `<div id="${catg.id}" class="getId card-body">`;
    domString += `<h5>${catg.name}</h5>`;
    domString += `<p>${catg.description}</p>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('app', domString);
  types.addEvents();
};


// const initProducts = () => {
//   products.getProductsData()
//     .then(resp => typesData.getTypesData(Object.values(resp.data.products[0])))
//     .then((newTypesWithProd) => {
//       console.error('fromprod', newTypesWithProd);
//       cardDomPrinter(newTypesWithProd);
//     })
//     .catch(err => console.error(err));
// };


const initCatg = () => {
  catgData.getCatergoriesData()
    .then(resp => typesData.getTypesData(resp.data.categories))
    .then((catgWithTypes) => {
      console.error('fromprod', catgWithTypes);
      cardDomPrinter(catgWithTypes);
    })
    .catch(err => console.error(err));
};

export default { initCatg };
