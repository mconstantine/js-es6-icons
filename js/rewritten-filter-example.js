/**
 * The filter method of Array, rewritten.
 * @param {Array<any>} list The array to be filtered
 * @param {(item: any): boolean} predicate The predicate function. It should return true if the item
 * should be kept, false otherwise.
 * @returns {Array<any>} The filtered array. The type of the elements in the resulting array is the same
 * as the one of the list argument. Also the type of the item argument received by the predicate is the
 * same.
 */
function customFilter(list, predicate) {
  const result = [];

  for (let i = 0; i < list.length; i++) {
    const shouldPush = predicate(list[i]);

    if (shouldPush) {
      result.push(list[i]);
    }
  }

  return result;
}

/*
const filteredIcons = icons.filter((iconArgument) => {
  if (iconArgument.type == iconsTypeSelected) {
    return true;
  }
});

const filteredIcons = customFilter(icons, function(iconArgument) {
  if (iconArgument.type == iconsTypeSelected) {
    return true;
  }
});
*/
