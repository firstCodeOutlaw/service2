const Joi = require('joi');

module.exports = {
    // validates data sent as body to subscription/{topic} endpoint
    subscriptionSchema: Joi.object({ url: Joi.string().uri().required() })
}
