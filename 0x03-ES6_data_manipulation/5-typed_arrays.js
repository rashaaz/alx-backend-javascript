/**
 * createInt8TypedArray - creates a new Int8 typed array
 * @param {Number} length - the length of the new array
 * @param {Number} position - the position to set the value
 * @param {Number} value - the value to set
 * @author rasha saeed <https://github.com/saeed>
 * @returns a new Int8 typed array
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new DataView(new ArrayBuffer(length), 0, length);
  buf.setInt8(position, value);
  return buf;
}
