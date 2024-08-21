const fs = require('node:fs');

function countStudents(path) {
  try {
        const data = fs.readFileSync(path, { encoding: 'utf8' });
        const lines = data.split('\n').filter((line) => line.length > 0);
        console.log(`Number of students: ${lines.length === 0 ? 0 : lines.length - 1}`);
        const fields = {};
        lines.forEach((line) => {
            const student = line.split(',');
            if (fields[student[3]]) {
                fields[student[3]].push(student[0]);
            } else {
                fields[student[3]] = [student[0]];
            }
        });
        delete fields.field;
        for (const field in fields) {
            if (field) {
                const list = fields[field];
                console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
            }
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;