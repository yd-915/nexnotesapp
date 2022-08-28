const mongoose = require('mongoose');



mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://dy707:Draze999@cluster0.ruqu4pf.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  );
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error:'));
db.once('open', console.log.bind(console, 'DB connected!'));

module.exports = db;