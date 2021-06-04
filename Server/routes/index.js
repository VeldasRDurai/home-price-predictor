var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // const data = require('../artifacts/columns.json');

  const spawn = require('child_process').spawn;
  const process = spawn('python', ['./routes/hello.py','1st Phase JP Nagar', 1000, 2, 2  ]);
  process.stdout.on('data', d => {
    console.log(d.toString());
    res.render('index', { estimations: Number(d) });
  });
});

module.exports = router;
// '1st Phase JP Nagar',1000, 2, 2