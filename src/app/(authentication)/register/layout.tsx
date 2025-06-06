import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Đăng ký",
    description: "Trang đăng ký",
};

export default function RegisterLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
