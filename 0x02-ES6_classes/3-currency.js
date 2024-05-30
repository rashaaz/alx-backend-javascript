export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
   * Class representing a Holberton course.
   * @returns {String} The name of the cou
   */
  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
