import Image from "next/image";

export default function MainFormLeftSide() {
    return (
        <div className="relative min-h-full">
            <Image
                className="object-cover rounded-r-xl"
                src="/images/login-register.jpg"
                alt="Ảnh mặc định trang đăng nhập và đăng ký"
                fill
                sizes="(max-width: 600px) 100vw, 50vw"
                priority
                quality={100}
            />
        </div>
    )
}