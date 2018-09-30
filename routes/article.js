var express = require('express');
var router = express.Router();

/* GET article profile page. */
router.get('/:articleID', function(req, res, next) {
  res.render('article', { title: 'Article Profile', id: req.params.articleID });
});

module.exports = router;
