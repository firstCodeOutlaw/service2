const express = require('express');
const router = express.Router();
const subscription = require('../request/controllers/subscriptionController');

// Create a subscription
router.post('/:topic', (request, response) => {
    subscription.post(request, response)
});

module.exports = router;
