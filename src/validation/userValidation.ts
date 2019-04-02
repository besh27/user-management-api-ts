import { Joi } from 'joi';

const validationUser = (user) => {
    const schema = {
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(3).required(),
        email: Joi.string().email().max(256).required(),
        status: Joi.number().required(),
    };
    return Joi.validate(user, schema);
}

export default validationUser;