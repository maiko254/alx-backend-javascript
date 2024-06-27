export default class Currency {
  constructor(code, name) {
    if (typeof code === 'string') {
      this._code = code;
    }
    if (typeof name === 'string') {
      this._name = name;
    }
  }

  get code() {
    return this._code;
  }

  set code(newcode) {
    this._code = newcode;
  }

  get name() {
    return this._name;
  }

  set name(newname) {
    this._name = newname;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
