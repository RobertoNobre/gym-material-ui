const express = require('express');
const router = express.Router();

const exercise_controller = 
require('../controllers/exercise.controller');

router.get('/test', exercise_controller.test);
router.post('/create', exercise_controller.exercise_create);
router.get('/:id', exercise_controller.exercise_details);
router.put('/:id/update', exercise_controller.exercise_update);
router.delete('/:id/delete', exercise_controller.exercise_delete);


module.exports = router;