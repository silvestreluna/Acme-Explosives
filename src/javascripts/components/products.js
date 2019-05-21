import products from '../helpers/data/productsData';
import catgData from '../helpers/data/categoriesData';
import typesData from '../helpers/data/typesData';
import util from '../helpers/util';


const cardDomPrinter = (array) => {
  let domString = '';
  array.forEach((catg) => {
    domString += `<div id="${catg.id}" class="card m-2">`;
    domString += '<div class="card-header">';
    domString += `<h5>${catg.name}</h5>`;
    domString += '</div>';
    domString += `<p>${catg.description}</p>`;
    domString += `<p>Type Name: ${catg.typeName}</p>`;
    domString += '<div id="footerItem" class="card-footer">';
    domString += `<p>category: ${catg.typeCat}</p>`;
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('app', domString);
};

const prodWithCatAndType = (array1, array2) => {
  const newCardToPrint = array1.map((prodItem) => {
    const newObject = prodItem;
    array2.forEach((typeCatg) => {
      if (prodItem.type === typeCatg.id) {
        newObject.typeName = typeCatg.name;
        newObject.typeCat = typeCatg.catName;
      }
    });
    return newObject;
  });
  cardDomPrinter(newCardToPrint);
};

const initCatg = () => {
  catgData.getCatergoriesData()
    .then(resp => typesData.getTypesData(resp.data.categories))
    .then((typesWithCatg) => {
      products.getProductsData()
        .then((resp) => {
          prodWithCatAndType(resp, typesWithCatg);
        });
    })
    .catch(err => console.error(err));
};


export default { initCatg };
