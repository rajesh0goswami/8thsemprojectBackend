const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config()

const app = express()
const port = process.env.port || 8080;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("\n \nMongoDB database connection established successfully\n\n");
})

const moviesRouter = require('./routes/movies');
const usersRouter = require('./routes/users');

app.use('/movies', moviesRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});