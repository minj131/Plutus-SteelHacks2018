/**
 * GET /analysis
 * List all analysis.
 */
const analysis = require('../models/Analysis.js');

exports.getAnalysis = (req, res) => {
    res.render('Analysis', {
      title: 'analysis'
    });
};
