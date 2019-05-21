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
    domString += `<p>category: ${catg.typeName}</p>`;
    domString += `<p>prodName: ${catg.typeCat}</p>`;
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
  console.error(newCardToPrint);
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
      // cardDomPrinter(typesWithCatg);
    })
    .catch(err => console.error(err));
};


export default { initCatg };
