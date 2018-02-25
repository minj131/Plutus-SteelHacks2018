const mongoose = require('mongoose');

const analysisSchema = new mongoose.Schema({
  name: String
});

const Analysis = mongoose.model('Analysis', analysisSchema);
module.exports = Analysis;
