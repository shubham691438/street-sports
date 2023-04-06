var express = require('express');
const router = express.Router();
const { 
    getTournaments,
    getTournament,
    createTournament,
    deleteTournament,
    updateTournament } =require('../controllers/tournamentController.js') 

//post request to create new tournament
router.post('/',createTournament)

//to get all tournamnets
router.get('/',getTournaments)
 

 //to get one tournament by id
router.get('/:id',getTournament)

 //to delete a tournament by id
 router.delete('/:id',deleteTournament)


 // to update a tournamnet by id
 router.patch('/:id',updateTournament)


 module.exports = router;