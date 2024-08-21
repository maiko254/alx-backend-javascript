const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

async function countStudents(path) {
  try {
    const dataList = [];
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.length > 0);
    dataList.push(`Number of students: ${lines.length === 0 ? 0 : lines.length - 1}`);
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
        dataList.push(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }
    }
    return dataList;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const db = process.argv[2];
  try {
    const data = await countStudents(db);
    res.send(`This is the list of our students\n${data.join('\n')}`);
    res.end();
  } catch (error) {
    console.log(error);
    res.send(`This is the list of our students\n${error.message}`);
    res.end();
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
