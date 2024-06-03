/**
 * weakMap - a WeakMap to store endpoint call
 */
export const weakMap = new WeakMap();

/**
 * MAX_ENDPOINT_CALLS - maximum allowed
 */
const MAX_ENDPOINT_CALLS = 5;

/**
 * queryAPI - increments
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - The endpoint to make a request to.
 * @author rasha saeed <https://github.com/saeed>
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
