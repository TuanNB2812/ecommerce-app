import {z} from "zod";

export const LoginSchema = z.object({
    username: z.string().min(4, {
        message: "Tên đăng nhập phải có ít nhất 4 ký tự.",
    }),
    password: z.string().min(8, {
        message: "Mật khẩu phải có ít nhất 8 ký tự.",
    }),
});