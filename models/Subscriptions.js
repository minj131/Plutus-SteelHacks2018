const mongoose = require('mongoose');

const subscriptionsSchema = new mongoose.Schema({
  name: String
});

const Subscriptions = mongoose.model('Subscriptions', subscriptionsSchema);
module.exports = Subscriptions;
