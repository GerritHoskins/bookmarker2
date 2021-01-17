require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.DATABASE_URL;
mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useUnifiedTopology: true 
});
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const bookmarkRouter = require('./routes/bookmarks');
const tagRouter = require('./routes/tags');

app.use('/bookmarks', bookmarkRouter);
app.use('/tags', tagRouter);

app.listen(port, () => {
    console.log('now listening for requests');
 });