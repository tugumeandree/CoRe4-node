const Joi = require('joi');

const registerValidation = (data) => {
    const schema = Joi.object().keys({
        name: Joi.string().max(255).min(6).required(),
        email: Joi.string().max(255).min(6).required(),
        password: Joi.string().max(1024).required()
    });
};

module.exports.registerValidation = registerValidation
