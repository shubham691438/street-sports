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
  phone: { type: String, required: false },
  rating: { type: Number, required: false },
  reviews: [reviewSchema],
  photo: { type: String, required: false }
});

const scheduleSchema = new Schema({
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: false },
  duration: { type: String, required: false }
});

const socialMediaSchema = new Schema({
  facebook: { type: String, required: false },
  twitter: { type: String, required: false },
  instagram: { type: String, required: false }
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
  description:{type:String,required: true},
  sport:{type: String, required: true},
  poster: { type: String, required: false },
  district: { type: String, required: false },
  state: { type: String, required: true },
  schedule: scheduleSchema,
  organizer: organizerSchema,
  participants: participantsSchema,
  rules: [String],
  eligibility_criteria:{ type: String, required: false },
  participation_fee:{ type: Number, required: true },
  prize_pool: {
    first_place: Number,
    second_place: Number,
    third_place: Number
  },
  audience: {
    no_of_audience: { type: Number, required: false },
    fee: { type: Number, required: false }
  }
  
},{timestamps:true});

const Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;
