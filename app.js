const express = require('express')
const app = express()
const port = 3000

const server = app.listen(7000, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });

//app.get('/', (req, res) => res.send('Hello World!'))
//app.get('/', (req, res) => res.render('index', {title: 'Home'}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));

const people = require('./people.json');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Homepage',
    people: people.profiles
  });
});

app.get('/profile', (req, res) => {
  const person = people.profiles.find(p => p.id === req.query.id);
  res.render('profile', {
    title: `About ${person.firstname} ${person.lastname}`,
    person,
  });
});

