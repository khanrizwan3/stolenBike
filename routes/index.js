/* eslint-disable no-unused-vars */
var express = require('express');
var router = express.Router();
const CaseController = require('../controllers/case');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/v1/stolenCase', CaseController.stolenCaseReport);

module.exports = router;
