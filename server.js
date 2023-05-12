const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const env = require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

//Body parser order is 100% important
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // Move this line above the routes
app.use(cors());
app.use('/', require('./routes/index.js'));

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT || 3000;
const host = process.env.HOST;
const mongdb = process.env.MONGO_URI;

app.get('/', (req, res) => {
  res.send('Hello from Homepage.');
});

/* ***********************
 * Log statement to confirm server operation
 *************************/

//  Connect to mongoDB
mongoose
  .connect(mongdb, { useNewUrlParser: true })
  .then(() => {
    console.log('MongoDB Connected successfully');
    app.listen(port, () => {
      console.log(`app listening on ${host}:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
