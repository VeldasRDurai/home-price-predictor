var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  const data = require('../artifacts/columns.json');
  res.render('index', data);
});

router.post('/', (req, res, next) => {
  const { location, sqFeet, room, bath } = req.body
  console.log(req.body);
  const spawn = require('child_process').spawn;
  const process = spawn('python', ['./routes/hello.py', location , sqFeet, room, bath  ]);
  process.stdout.on('data', d => {
    console.log(d.toString());
    res.json({ estimations: d.toString() });
    res.send();
  });
})

module.exports = router;