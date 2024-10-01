const fs = require('fs').promises;

async function readDatabase(path) {
    const dataPromise = new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8')
            .then((data) => {
                const lines = data.split('\n').filter((line) => line.length > 0);
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
                resolve(fields);
            })
            .catch((error) => {
                reject(error);
            });
    });
    return dataPromise;
}

module.exports = readDatabase;