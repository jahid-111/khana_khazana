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
