import {TypeOf, object, string} from 'zod'


export const createUserSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    password: string({
      required_error: "Password is required",
    }).min(6, "Password is too short - should be 6 characters minimum"),
    phone: string({
      required_error: "Phone is required",
    })
      .min(11, "Phone number should be 11 digit")
      .max(11, "Phone number should be 11 digit"),
    // passwordConfirmation: string({
    //   required_error: "passwordConfirmation is required",
    // }),
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
  }),
  // .refine((data) => data.password === data.passwordConfirmation, {
  //   message: "Passwords do not match",
  //   path: ['passwordConnfirmation'],
  //})
});

export type CreateUserInput = TypeOf<typeof createUserSchema>