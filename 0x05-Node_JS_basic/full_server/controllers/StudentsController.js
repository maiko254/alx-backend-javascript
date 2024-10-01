const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    const db = process.argv[2];

    readDatabase(db).then((data) => {
      const dataList = [];
      for (const field of Object.keys(data).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))) {
        const list = data[field];
        dataList.push(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }
      response.status(200).send(`This is the list of our students\n${dataList.join('\n')}`);
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const db = process.argv[2];
    const { major } = request.params;

    if (!['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(db).then((data) => {
        const studentGroup = data[major] || [];
        response.status(200).send(`List: ${studentGroup.join(', ')}`);
      }).catch(() => {
        response.status(500).send('Cannot load the database');
      });
    }
  }
}

module.exports = StudentsController;
