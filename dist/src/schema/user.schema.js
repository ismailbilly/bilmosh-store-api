"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserSchema = void 0;
const zod_1 = require("zod");
exports.createUserSchema = (0, zod_1.object)({
    body: (0, zod_1.object)({
        name: (0, zod_1.string)({
            required_error: "Name is required",
        }),
        password: (0, zod_1.string)({
            required_error: "Password is required",
        }).min(6, "Password is too short - should be 6 characters minimum"),
        phone: (0, zod_1.string)({
            required_error: "Phone is required",
        })
            .min(11, "Phone number should be 11 digit")
            .max(11, "Phone number should be 11 digit"),
        // passwordConfirmation: string({
        //   required_error: "passwordConfirmation is required",
        // }),
        email: (0, zod_1.string)({
            required_error: "Email is required",
        }).email("Not a valid email"),
    }),
    // .refine((data) => data.password === data.passwordConfirmation, {
    //   message: "Passwords do not match",
    //   path: ['passwordConnfirmation'],
    //})
});
