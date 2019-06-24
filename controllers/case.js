'use strict';

const { Case } = require('../models');
const { User } = require('../models');
const db = require('../models/index');

async function stolenCaseReport(req,res){
  let result;
  let AssigneeList;
  
  try{
    AssigneeList = await db.sequelize.query('SELECT * FROM `users` AS u , userroles AS ur WHERE u.`id` NOT IN (SELECT `officer_id` FROM `cases`) AND ur.role_id = 4 AND ur.user_id = u.id LIMIT 1', { type: db.sequelize.QueryTypes.SELECT});
    //console.log(AssigneeList);
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



async function getAllCases(req,res){
  let limit = null; // number of records per page
  let offset = 0;

  try {
    
    const { page } = req.query; // page number
    if(parseInt(req.query.limit) > 0){
      limit = parseInt(req.query.limit);
    }
        
    const CaseCount = await Case.findAndCountAll({});

    const pages = Math.ceil(CaseCount.count / limit);
    offset = limit * (page - 1);

    const result = await Case.findAll({
      attributes: ['id', 'title', 'long_detail', 'location','time_of_theft', 'victim_id', 'officer_id', 'status', 'status_reason'],      
      limit,
      offset,
      $sort: { id: 1 },
      include: [
        { model: User, required: true}
      ],
    });

    res.status(200).json({ result, count: CaseCount.count, pages });
  } catch(error){
    res.status(400).send(error);
  }
}

module.exports = {
  stolenCaseReport,
  getAllCases
};