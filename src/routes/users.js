const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});
router.get('/single', (req, res) => {
  console.log(req.baseUrl);
  res.send('single dude here');
});

module.exports = router;
