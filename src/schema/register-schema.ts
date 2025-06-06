import {z} from "zod";

export const RegisterSchema = z.object({
    username: z.string().min(4, {
        message: "Tên đăng nhập phải có ít nhất 4 ký tự.",
    }),
    password: z.string().min(8, {
        message: "Mật khẩu phải có ít nhất 8 ký tự.",
    }),
    rePassword: z.string().min(8, {
        message: "Mật khẩu xác nhận phải có ít nhất 8 ký tự.",
    }),
}).refine((data => data.password === data.rePassword), {
    message: "Mật khẩu và mật khẩu xác nhận không khớp.",
    path: ["rePassword"]
});