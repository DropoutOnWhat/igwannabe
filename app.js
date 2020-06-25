const express = require('express');
const mongoose = require('mongoose');

const contentRouter = require('./routes/contentRouter');

const app = express();
app.use(express.json());

app.use('/api/content', contentRouter);

const mongoURI = 'mongodb+srv://reggie:burn1nH311@flames-8qxdn.gcp.mongodb.net/igwannabe?retryWrites=true&w=majority'
mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    app.listen(5000, () => {console.log('Connected to MongoDB & listening to port 5000');});
  }).catch((err) => {
    console.log('Startup failure: ', err);
  });

module.exports = app;
