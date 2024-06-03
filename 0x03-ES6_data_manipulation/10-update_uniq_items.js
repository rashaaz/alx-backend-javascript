/**
 * groceriesList - returns a map of groceries
 * @param {Map<String, number>} map - a map containing
 * @author rasha saeed <https://github.com/saeed>
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
