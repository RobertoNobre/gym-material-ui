const express = require('express');
const bodyParser = require('body-parser');// Set up mongoose connection

const exercise = require('./routes/exercise.route');
//initializing our express app
const app = express();

const mongoose = require('mongoose');
let dev_db_url = 'mongodb://administrator:123456a!!@ds211625.mlab.com:11625/gym-materiaul-ui';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/exercises', exercise);

let port = 1234;

app.listen(port, () => {
    console.log("The server is running in the port:"+port);
})