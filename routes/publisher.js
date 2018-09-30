var express = require('express');
var router = express.Router();

/* GET publisher profile page. */
router.get('/:publisherID', function(req, res, next) {
  res.render('publisher', { title: 'Publisher Profile', id: req.params.publisherID });
});

module.exports = router;
