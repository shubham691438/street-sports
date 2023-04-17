const mongoose = require('mongoose')
const {Tournament,Participant} = require('../models/TournamentModel')
const User=require('../models/UserModel')

//to get all the tournaments
const getTournaments = async(req,res)=>{
    try{
        const tournaments = await Tournament.find({})
        res.status(200).json(tournaments)
    }
    catch (err){
        res.status(501).json({error:err.message})
    }

}

//to get a single tournament
const getTournament =async(req,res)=>{

    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(501).json({error:err.message})
    }

    const tournament=await Tournament.findById(id)
    
    if(!tournament)
    {
        return res.status(404).json({error:'No such tournament exist'})
    }

    res.status(200).json(tournament)
   
}


//to post a new tournament
const createTournament=async(req,res)=>{
    try{
        var tournament = new Tournament({
            name: req.body.name,
            description:req.body.description,
            sport:req.body.sport,
            poster: req.body.poster,
            district: req.body.district,
            state: req.body.state,
            schedule: {
                start_date: req.body.schedule.start_date,
                end_date: req.body.schedule.end_date,
                duration: req.body.schedule.duration
            },
            organizer: {
                name: req.body.organizer.name,
                email: req.body.organizer.email,
                phone: req.body.organizer.phone,
                contact_person: req.body.organizer.contact_person,
                social_media: {
                    facebook: req.body.organizer.social_media.facebook,
                    twitter: req.body.organizer.social_media.twitter,
                    instagram: req.body.organizer.social_media.instagram
                }
            },
            participants: {
                total: req.body.participants.total,
                registered: req.body.participants.registered,
            },
            rules:req.body.rules,
            eligibility_criteria:req.body.eligibility_criteria,
            participation_fee:req.body.participation_fee,
            prize_pool:{
                first_place: req.body.prize_pool["first_place"],
                second_place: req.body.prize_pool["second_place"],
                third_place: req.body.prize_pool["third_place"]
            },
            audience: {
                no_of_audience: req.body.audience.no_of_audience,
                fee: req.body.audience.fee
            }
        });
        
        await tournament.save()
        res.status(200).json({msg:"tournmanents details added successfully"})
    }
    catch(err){
       
            res.status(500).json({error:"all star maked  field must with filled correctly"})
        
    }
   
}



//to delete a tournament
const deleteTournament= async(req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(501).json({error:err.message})
    }

    const tournament=await Tournament.findOneAndDelete({_id:id})
    
    if(!tournament)
    {
        return res.status(404).json({error:'No such tournament exist'})
    }

    res.status(200).json({msg:"tounament deleted successfully"})

}


//to update a tournament
const updateTournament= async(req,res)=>{
    const {id}=req.params
    
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(501).json({error:err.message})
    }

    const tournament=await Tournament.findOneAndUpdate({_id:id},{
        ...req.body
    })
    
    if(!tournament)
    {
        return res.status(404).json({error:'No such tournament exist'})
    }

    res.status(200).json({msg:"tounament Updated successfully"})
}

//register user for a tournament
const registerUserForTournament=async(req,res)=>{
    try {

        const tournament_id=req.body.tournament_id
        const user_id=req.body.user_id
        
        //checking if user is already registerered for tournamnent
        const tournament=await Tournament.findById(tournament_id)
        const registeredUsers=tournament.participants.registered
        
        if(registeredUsers.includes(user_id))
        {
            throw Error("User already registered for the tournament")
        }

        // add the user's id to the tournament's participants array
         await Tournament.findByIdAndUpdate(
          tournament_id,
          { $push: { "participants.registered": user_id} },
          { new: true }
        );

        //add the tournament 's id into user data
        await User.findByIdAndUpdate(
            user_id,
            {
                $push:{"current_tournament_id":tournament_id}
            },
            {new:true}
        )
    
        // send a success response with the updated tournament document
        res.status(200).json({ message: 'User registered for tournament successfully',tournament});
      } catch (err) {
        console.error('Error:', err);
    
        // send an error response
        res.status(500).json({ error: err.message });
      }
}

//check registration status of a user for a tournament
const checkRegistrationStatus=async(req,res)=>{
    try {

        const tournament_id=req.body.tournament_id
        const user_id=req.body.user_id
        
        //checking if user is already registerered for tournamnent
        const tournament=await Tournament.findById(tournament_id)
        const registeredUsers=tournament.participants.registered
        
        if(registeredUsers.includes(user_id))
        {
            res.status(200).json({msg:"isRegistered"})
        }
        else
        {
            res.status(200).json({msg:"isNotRegistered"})
        }
    }
    catch(e){
        res.status(500).json({error:err.message})
    }
    
}


//send an array of tournaments in which user is taking part
const getCurrentTournaments=async(req,res)=>{

    const user_id=req.body.user_id
    try{
         const user=await User.findById(user_id).populate('current_tournament_id')
         const currentTournaments=user.current_tournament_id
         
         res.status(200).json(currentTournaments)
    }
    catch(err)
    {
        res.status(500).json({error:err.message})
    }
}


module.exports={
    getTournaments,
    getTournament,
    createTournament,
    deleteTournament,
    updateTournament,
    registerUserForTournament,
    checkRegistrationStatus,
    getCurrentTournaments
}