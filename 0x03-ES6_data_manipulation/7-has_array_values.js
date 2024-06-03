/**
 * hasValuesFromArray - checks if all elements
 * @param {Set} set - the Set to check against
 * @param {*} array - the array of values to check
 * @author rasha saeed <https://github.com/saeed>
 * @returns true if all elements in the array exi
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
