const mongoose = require('mongoose')
const Tournament = require('../models/TournamentModel')

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
        var tournament = await new Tournament({
            name: req.body.name,
            poster: req.body.poster,
            place: req.body.place,
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
                waiting_list: req.body.participants.waiting_list
            },
            rules: {
                participation_fee: req.body.rules.participation_fee,
                eligibility_criteria: req.body.rules.eligibility_criteria,
                prize_pool: {
                    first_place: req.body.rules.prize_pool["first_place"],
                    second_place: req.body.rules.prize_pool["second_place"],
                    third_place: req.body.rules.prize_pool["third_place"]
                }
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
        res.status(500).json({error:err.message})
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


module.exports={
    getTournaments,
    getTournament,
    createTournament,
    deleteTournament,
    updateTournament
}