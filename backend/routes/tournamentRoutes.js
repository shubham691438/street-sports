var express = require('express');
const router = express.Router();
const { 
    getTournaments,
    getTournament,
    createTournament,
    deleteTournament,
    updateTournament,
    registerUserForTournament,
    checkRegistrationStatus,
    getCurrentTournaments
 } =require('../controllers/tournamentController.js') 

//post request to create new tournament
router.post('/',createTournament)

//to get all tournamnets
router.get('/',getTournaments)
 

//check registration status of a user for a tournament
router.post('/registration-status',checkRegistrationStatus)

//register user for a tournament
 // id is tournament id 
 router.patch('/register',registerUserForTournament)

 //send an array of tournaments in which user is taking part
 router.post('/current-tournaments',getCurrentTournaments)

 //to get one tournament by id
router.get('/:id',getTournament)

 //to delete a tournament by id
 router.delete('/:id',deleteTournament)


 // to update a tournamnet by id
 router.patch('/:id',updateTournament)


 





 module.exports = router;