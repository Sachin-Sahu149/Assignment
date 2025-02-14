import Joi from "joi";

const userValidationSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),

    email: Joi.string().email().required(),

    password: Joi.string()
        .min(8)
        .max(50)
        .required()
        .pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$"))
        .messages({
            "string.pattern.base":
                "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
        }),

    // picture: Joi.string().uri().optional(),

    tenthPercentage: Joi.number().min(0).max(100).required(),

    twelfthPercentage: Joi.number().min(0).max(100).required(),

    program: Joi.string().required(),

    branch: Joi.string().required(),

    age: Joi.number().min(5).max(100).required(),

    contact: Joi.string()
        .pattern(/^[6-9]\d{9}$/)
        .required()
        .messages({
            "string.pattern.base": "Contact number must be a valid 10-digit number starting with 6-9.",
        }),

    gender: Joi.string().valid("Male", "Female").required(),
});

export { userValidationSchema };
