//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
router.post('/autosave', function (req, res) {
    req.session.data[req.body.field] = req.body.value;
    req.session.data.lastSaved = new Date().toLocaleString('en-GB', { hour: 'numeric', minute: 'numeric', hour12: true });
    res.status(200).json({});
});