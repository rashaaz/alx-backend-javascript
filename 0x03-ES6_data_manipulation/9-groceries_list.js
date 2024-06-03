/**
 * groceriesList - returns a map of groceries
 * @author rasha saeed <https://github.com/saeed>
 * @returns a map containing groceries with quant
 */
export default function groceriesList() {
  const values = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  return new Map(values);
}
