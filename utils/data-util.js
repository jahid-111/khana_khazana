{
  /*
   * Replace "id" from mongoDb to "_id"
   */
}
export const replaceMongoInArray = (array) => {
  const mappedArray = array
    .map((recipeData) => {
      return {
        id: recipeData._id.toString(),
        ...recipeData,
      };
    })
    .map(({ _id, ...rest }) => rest);
  return mappedArray;
};

export const replaceMongoInObj = (obj) => {
  const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };

  return updatedObj;
};
