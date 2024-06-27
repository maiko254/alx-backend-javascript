export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    }
    if (typeof length === 'number') {
      this._length = length;
    }
    if (Array.isArray(students) && students.every((item) => typeof item === 'string')) {
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(newname) {
    this._name = newname;
  }

  get length() {
    return this._length;
  }

  set length(newlength) {
    this._length = newlength;
  }

  get students() {
    return this._students;
  }

  set students(newstudents) {
    this._students = newstudents;
  }
}
