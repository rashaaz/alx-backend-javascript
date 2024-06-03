/**
 * cleanSet - returns a string of set values
 * Check if set and startString are valid inputs
 * @param {Set<String>} set - the Set containing values to clean
 * @param {String} startString - the string to filter set values
 * @author rasha saeed <https://github.com/saeed>
 * @returns a string of set values
 */
export default function cleanSet(set, startString) {
  const parts = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }
  return parts.join('-');
}
