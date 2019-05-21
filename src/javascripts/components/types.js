import typesData from '../helpers/data/typesData';


// Here I'm getting the cardId. I will be passing this
// as an argument in the TypesDate where i have typeId.
// Minor issue with my target.Id when clicking on certain area. Id = blank.
const getIdOfCatg = (e) => {
  const typesId = e.target.id;
  console.error(typesId);
  typesData.getTypesData(typesId);
};

// Adds event listeners for all cards. Using class name.
const addEvents = () => {
  const getClassName = document.getElementsByClassName('content');
  for (let i = 0; i < getClassName.length; i += 1) {
    getClassName[i].addEventListener('click', getIdOfCatg);
  }
};
export default { addEvents };
