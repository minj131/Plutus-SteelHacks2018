/**
 * GET /subscriptions
 * List all subscriptions.
 */
exports.getSubscriptions = (req, res) => {
    res.render('Subscriptions', {
      title: 'subscriptions'
    });
};

/**
 * GET /api/GCS
 *
 */
 // Imports the Google Cloud client library
 const vision = require('@google-cloud/vision');

 // Creates a client
 const client = new vision.ImageAnnotatorClient();

 // Performs label detection on the image file
 client
   .documentTextDetection('C:/Users/jamin/Documents/steelhacks2018/uploads/statements/statement.png')
   .then(results => {
     const labels = results[0].fullTextAnnotation;

     console.log(labels.text);
     const datapull = labels.text;
   })
   .catch(err => {
     console.error('ERROR:', err);
   });
 /**
  * GET /data
  * List all data.
  */
 exports.getGCSData = (req, res) => {
     res.render('labels', {
       locals: datapull
     });
 };
