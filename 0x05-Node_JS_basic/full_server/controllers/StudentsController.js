const readDatabase = require('../utils');

const VALID_MAJORS = ['CS', 'SWE'];

class StudentsController {
  static getAllStudents(request, response) {
    const db = process.argv[2];

    try {
      response.status(200);
      readDatabase(db).then((data) => {
        const dataList = [];
        for (const field in data) {
          if (field) {
            const list = data[field];
            dataList.push(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
          }
        }
        response.send(`This is the list of our students\n${dataList.join('\n')}`);
      }).catch((error) => {
        response.status(500).send('Cannot load the database');
      });
    } catch (error) {
      console.log(error);
    }
  }

  static getAllStudentsByMajor(request, response) {
    const db = process.argv[2];
    const { major } = request.params;

    try {
      response.status(200);
      if (!VALID_MAJORS.includes(major)) {
        response.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      readDatabase(db).then((data) => {
        const studentGroup = data[major];
        response.send(`List: ${studentGroup.join(',')}`);
      }).catch((error) => {
        response.status(500).send('Cannot load the database');
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = StudentsController;
