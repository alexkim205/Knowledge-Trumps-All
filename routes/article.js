var express = require('express');
var router = express.Router();

/* GET article profile page. */
router.get('/:articleID', function(req, res, next) {
  res.render('article', {
     title: 'Article Profile', 
     a_title: "California HS students spell racial slur on lettered T-shirts" ,
     keywords: ['week', 'tshirts', 'senior', 'racial', 'school', 'escondido', 'california', 'spell', 'cnn', 'district', 'students', 'high', 'hs', 'slur', 'union', 'lettered'],
     summary: '"(CNN) A group of Southern California high school students face disciplinary action after spelling out the n-word with lettered T-shirts at a senior picnic. The Escondido Union High School District this week confirmed that about 10 students at a senior event "made a poor decision" by participating in the stunt involving the racial slur, CNN affiliate KGTV reported. "We are a campus that prides itself on inclusion and embraces diversity," Principal Adriana Lepe-Ramirez said in a statement. "We will not tolerate actions that send messages of racism and promote divisiveness." The statement said Escondido High School, district officials and local police were investigating the incident, the station reported.."'
    });
});

module.exports = router;
