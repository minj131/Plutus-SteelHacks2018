/**
 * GET /subscriptions
 * List all subscriptions.
 */
const subscriptions = require('../models/Subscriptions.js');

exports.getSubscriptions = (req, res) => {
    res.render('Subscriptions', {
      title: 'subscriptions'
    });
};
