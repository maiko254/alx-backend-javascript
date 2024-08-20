const readDatabase = require('./utils');
const VALID_MAJORS = ['CS', 'SWE'];

class StudentsController {
    static getAllStudents(request, response) {
        const db = process.argv[2];

        try {
            response.status(200);
            const fields = readDatabase(db);
            const dataList = [];
            for (const field in fields) {
                if (field) {
                    const list = fields[field];
                    dataList.push(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
                }
            }
            response.send(`This is the list of our students\n${dataList.join('\n')}`);
        } catch(error) {
            response.status(500);
            response.send('Cannot load the database');
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

            const data = readDatabase(db);
            const studentGroup = data[major];
            response.send(`List: ${studentGroup.join(',')}`);
        } catch(error) {
            response.status(500).send('Cannot load the database');
        }
    }
}