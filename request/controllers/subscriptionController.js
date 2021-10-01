const { subscriptionSchema } = require('../validators');

/**
 * Create a subscription
 *
 * @param request
 * @param response
 * @returns {Promise<*>}
 */
const createSubscription = async (request, response) => {
    try {
        // Validate request
        const validated = await subscriptionSchema.validateAsync(request.body);
        const data = { url: validated.url, topic: request.params.topic };
        console.log('Response:', data);

        return response.status(200).send(data);
    }
    catch (error) {
        if (error.isJoi) {
            return response.status(400).send(error.message);
        }

        return response.status(500).send(error.message);
    }
};

module.exports = {
    post: createSubscription
};
