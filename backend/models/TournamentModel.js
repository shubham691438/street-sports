const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  date: { type: Date, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true }
});

const participantSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: [reviewSchema],
  photo: { type: String, required: true }
});

const rulesSchema = new Schema({
  participation_fee: { type: Number, required: true },
  eligibility_criteria: { type: String, required: true },
  prize_pool: {
    first_place: { type: String, required: true },
    second_place: { type: String, required: true },
    third_place: { type: String, required: true }
  }
});

const scheduleSchema = new Schema({
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  duration: { type: String, required: true }
});

const socialMediaSchema = new Schema({
  facebook: { type: String, required: true },
  twitter: { type: String, required: true },
  instagram: { type: String, required: true }
});

const organizerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  contact_person: { type: String, required: true },
  social_media: socialMediaSchema
});

const participantsSchema = new Schema({
  total: { type: Number, required: true },
  registered: [participantSchema],
  waiting_list: [participantSchema]
});

const tournamentSchema = new Schema({
  name: { type: String, required: true },
  poster: { type: String, required: true },
  place: { type: String, required: true },
  schedule: scheduleSchema,
  organizer: organizerSchema,
  participants: participantsSchema,
  rules: rulesSchema,
  audience: {
    no_of_audience: { type: Number, required: true },
    fee: { type: Number, required: true }
  }
  
},{timestamps:true});

const Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;
