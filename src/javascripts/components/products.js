import products from '../helpers/data/productsData';
import catgData from '../helpers/data/categoriesData';
import typesData from '../helpers/data/typesData';
import util from '../helpers/util';


const cardDomPrinter = (array) => {
  let domString = '';
  array.forEach((catg) => {
    domString += '<div class="card col-sm-3 m-4">';
    domString += `<div id="${catg.id}" class="getId card-body">`;
    domString += `<h5>${catg.name}</h5>`;
    domString += `<p>${catg.description}</p>`;
    domString += `<p>category: ${catg.catName}</p>`;
    domString += `<p>prodName: ${catg.prodName}</p>`;
    domString += `<p>desc: ${catg.prodDesc}</p>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('app', domString);
};

const prodWithCatAndType = (array1, array2) => {
  const newAllItems = array1;
  for (let i = 0; i < array1.length; i += 1) {
    if (array1[i].type === array2.id) {
      newAllItems.catName = array1[i].name;
      newAllItems.catDesc = array1[i].description;
    }
  }
  console.error(newAllItems);
};

const initCatg = () => {
  catgData.getCatergoriesData()
    .then(resp => typesData.getTypesData(resp.data.categories))
    .then((typesWithCatg) => {
      products.getProductsData()
        .then((resp) => {
          prodWithCatAndType(resp, typesWithCatg);
        });

      cardDomPrinter(typesWithCatg);
    })
    .catch(err => console.error(err));
};


export default { initCatg };
