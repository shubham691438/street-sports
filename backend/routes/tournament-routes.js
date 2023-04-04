var express = require('express');
var router = express.Router();
const Tournament =require('../models/TournamentModel.js');
const { createTournament } =require('../controllers/tournamentController.js') 

//post request to create new tournament
router.post('/',createTournament)

router.get('/',(req,res)=>{

})
 module.exports = router;