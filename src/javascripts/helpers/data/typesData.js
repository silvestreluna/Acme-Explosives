import axios from 'axios';

// if typeid === same as the catergorieID
// then, get the Type.name

const getTypesData = categories => new Promise((resolve, reject) => {
  axios.get('../db/types.json')
    .then((resp) => {
      console.error(resp);
      console.error(categories);
    })
    .catch(err => reject(err));
});

export default { getTypesData };
