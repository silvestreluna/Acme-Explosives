import axios from 'axios';

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

export default { getTypesData };
