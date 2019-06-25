/* eslint-disable no-unused-vars */
var express = require('express');
var router = express.Router();
const CaseController = require('../controllers/case');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Stolen Bike Case api
router.post('/api/v1/stolenCase', CaseController.stolenCaseReport);
router.get('/api/v1/getAllCases', CaseController.getAllCases);
router.put('/api/v1/resolveStolenReport/:id', CaseController.resolveStolenReport);

module.exports = router;