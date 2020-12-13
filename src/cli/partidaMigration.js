require('dotenv').config();

// environment variables
const { mongodb } = require('./keys');


// cli arguments
const mongoose = require('mongoose');
const Partida = require('../models/partida');

mongoose.set('useFindAndModify', false);
mongoose.connection.on('error', err => {
    console.error('Error connecting to MongoDB!!!', err);
});
mongoose.connect(mongodb.URI, { useNewUrlParser: true })
    .then(() => {
        Partida.getPartida(partida).then((status) => {
            console.log('Partida', status.data);
            process.exit();
        }).catch(error => {
            const data = error.response && error.response.data ? error.response.data : error;
            console.log('Notifications Recovery error registering', data);
            process.exit();
        });
    });
