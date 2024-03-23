import Response from "../config/response.js";
import { body, validationResult } from "express-validator";

const validateCreateUser = async (req, res, next) => {
    const validationRules = [
        body('name').notEmpty().withMessage('Tidak Boleh kosong'),
        body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
        body('phone').isLength({ min: 5 }).withMessage('Password must be at least 5 characters long'),
    ];
    await Promise.all(validationRules.map(validation => validation.run(req)));
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return Response.errorRes(res, 'error', errors.array(), 'Validation error');
    }
    next();
};

export default {
    validateCreateUser,
};
