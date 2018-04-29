// не заморачивайтесь, эти 2 строки скопированы из документации
var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());
const randomDogs = [
  'https://image.freepik.com/free-photo/cute-cat-picture_1122-449.jpg',
  'https://random.dog/a7c60c7b-4ace-47f7-8743-272707e97784.jpg',
  'https://i.imgur.com/nqTGipe.jpg'
];
// >>> НАЧАЛО КОДА СЕРВЕРА
app.get('/randomnum', function (req, res) {
  const randomNum = Math.floor(Math.random() * randomDogs.length);
  res.send({ message: randomDogs[randomNum] });
});
// >>> КОНЕЦ КОДА СЕРВЕРА

// не заморачивайтесь, эти 3 строки скопированы из документации
app.listen(3000, function () {
  console.log('Example app listening on http://localhost:3000/randomnum');
});
