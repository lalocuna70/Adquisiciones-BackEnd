const mongoose = require('mongoose');
const { mongodb } = require('./keys');

mongoose.set('useFindAndModify', false);

mongoose.connect(mongodb.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB is connected to adquisiciones'))
    .catch(err => console.log(err));


/*    mongoose.connect(mongodb.ExternalUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('DB conectada a adquisiciones'))
    .catch(err => console.log(err));
*/