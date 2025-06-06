'use client';
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {Button} from "@/components/ui/button";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {useState} from "react";
import {CircleArrowRight, Eye, EyeOff} from "lucide-react";
import Image from "next/image";
import {LoginSchema} from "@/schema/login-schema";
import Link from "next/link";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const form = useForm<LoginFormData>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    function onSubmit(data: LoginFormData) {
        console.log("Form submitted with data:", data);
    }

    return (
        <>
            <div className="grid grid-cols-12">
                <h1 className="col-span-6 text-3xl font-bold">Đăng nhập</h1>
                <div className="col-span-6 text-sm font-bold flex justify-end">
                    <Link href="/register" prefetch={false} className="flex items-center gap-2 text-primary cursor-pointer">
                        Đăng ký
                        <CircleArrowRight size={17}/>
                    </Link>
                </div>
            </div>
            <p className="text-sm mt-2 mb-8 text-primary">Trải nghiệm mua sắm tuyệt vời với JerryFox!</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className="mb-1">Tên đăng nhập</FormLabel>
                                <FormControl>
                                    <Input placeholder="Nhập tên đăng nhập" {...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel className="mb-1">Mật khẩu</FormLabel>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Nhập mật khẩu"
                                            {...field}
                                            className="pr-10"
                                        />
                                        <div
                                            className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                            onClick={() => setShowPassword(prev => !prev)}
                                        >
                                            {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                                        </div>
                                    </div>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <div className="flex justify-between">
                        <Button type="submit" className="w-1/3 py-5">
                            Đăng nhập
                        </Button>
                        <a href="https://example.com" className="w-1/3 hover:underline content-center text-right">
                            Quên mật khẩu?
                        </a>
                    </div>
                </form>
            </Form>
            <div className="relative my-7">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t"></span></div>
                <div className="relative flex justify-center text-xs uppercase"><span
                    className="bg-card text-muted-foreground px-2">Hoặc đăng nhập với</span></div>
            </div>
            <div>
                <Button variant="outline" className="w-full py-6">
                    <Image
                        src="/svg/google-icon.svg"
                        alt="Google Logo"
                        width={20}
                        height={20}
                        quality={100}
                    />
                    Đăng nhập với Google
                </Button>
            </div>
        </>
    );
}