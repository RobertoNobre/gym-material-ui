const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ExerciseSchema = new Schema({
    title: { type: String, required: true, max: 100 },
    muscle: { type: String, required: true, max: 100},
    description: { type: String, required: true, max: 100 }
});

//Export the model
module.exports = mongoose.model('Exercise', ExerciseSchema);