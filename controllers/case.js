'use strict';

const { Case } = require('../models');
const db = require('../models/index');

async function stolenCaseReport(req,res){
  let result;
  let AssigneeList;
  
  try{
    AssigneeList = await db.sequelize.query('SELECT * FROM `users` AS u , userroles AS ur WHERE u.`id` NOT IN (SELECT `officer_id` FROM `cases`) AND ur.role_id = 4 AND ur.user_id = u.id LIMIT 1', { type: db.sequelize.QueryTypes.SELECT});
    console.log(AssigneeList);
    if(AssigneeList.length == 0){
      return res.status(400).send({message: 'No Officer Available'});
    }
  } catch(error) {
    return res.status(400).send(error);
  }

  try {

    result = await Case.create({
      title: req.body.title,
      long_detail: req.body.long_detail,
      location: req.body.location,
      time_of_theft: req.body.time_of_theft,
      victim_id: req.body.victim_id,
      officer_id: AssigneeList[0].id,
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