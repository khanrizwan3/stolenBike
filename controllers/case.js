'use strict';

const { Case } = require('../models');

async function stolenCaseReport(req,res){
  let result;
  try {
    result = await Case.create({
      title: req.body.title,
      long_detail: req.body.long_detail,
      location: req.body.location,
      time_of_theft: req.body.time_of_theft,
      victim_id: req.body.victim_id,
      officer_id: req.body.officer_id,
      status: 1 || req.body.status,
    });

    return res.status(200).send(result);
  } catch (error) {
    return res.status(400).send(error);
  }

  
}

module.exports = {
  stolenCaseReport,
};