const Tournament = require('../models/TournamentModel')

//to get all the tournaments


//to get a single tournament


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
    catch(error){
        res.status(500).json({error:error.message})
    }
   
}



//to delete a tournament


//to update a tournament


module.exports={
    createTournament
}