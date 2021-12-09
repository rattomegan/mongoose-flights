const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
    //these are to avoid deprecation warnings. This is a options object and is an optional second argument.
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// shortcut to mongoose.connection object
const db = mongoose.connection;

// This allows us to test our db connection
db.on('connected', function() {
    console.log(`Mongoose connected to: ${db.host}:${db.port}`);
});