const express = require('express');
const router = express.Router();

const resourceArr = [
  'https://source.unsplash.com/1920x1080?bamboo',
  'https://source.unsplash.com/1920x1080?charcoal',
  'https://source.unsplash.com/1920x1080?maple',
]

/* GET users listing. */
router.get('/', function(req, res) {
  res.send(resourceArr);
});
// POST new image
router.post('/', function(req) {
  const newImg = req.body.img;
  resourceArr.splice(0, 0, newImg)
});

module.exports = router;
