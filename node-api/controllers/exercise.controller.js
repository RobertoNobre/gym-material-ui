const Exercise = require('../models/exercise.model');

exports.test = function(req, res){
    res.send('Greetings from the Test Controller!');
};

exports.exercise_create = function(req, res){
    let exercise = new Exercise({
        title: req.body.title,
        muscle: req.body.muscle,
        description: req.body.description
    });

    exercise.save(function(err){
        if(err){
            return next(err);
        }
        res.send('Exercise Created Successfully');
    })
};

exports.exercise_details = function(req, res){
    Exercise.findById(req.params.id, function(err, exercise){
        if (err) return next(err);
        res.send(exercise);
    })
};

exports.exercise_update = function(req, res){
    Exercise.findOneAndUpdate(req.params.id, {$set: req.body},
        function(err, exercise){
            if(err) return next(err);
            res.send('Exercise updated');
        }
    );
};

exports.exercise_delete = function(req, res){
    Exercise.findOneAndRemove(req.params.id, function(err){
        if(err) return next(err);
        res.send('Deleted Successfully');
    })
}