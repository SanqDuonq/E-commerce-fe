import { object, string, z } from 'zod'

const patternPassword = '^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*?-]).{8,32}$'

export const signUpSchema = object({
    data: object({
        email: string().min(1,'Email is required').email().endsWith('@gmail.com','Email must be end at @gmail.com'),
        password: string().min(1,'Password is required').regex(new RegExp(patternPassword),'Password must be contains 1 uppercase, 1 lowercase, 1 number, 1 special number'),
        confirmPassword: string().min(1,'Confirm password is required')
    })
})

export type signUpInput = z.infer<typeof signUpSchema>['data'];