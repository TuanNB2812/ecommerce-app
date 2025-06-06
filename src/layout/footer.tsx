import {Copyright} from "lucide-react";

export default function Footer() {
    return (
        <div className="w-full">
            <div className="bg-primary">
                <div className="grid grid-cols-12 w-full text-white lg:px-[5%] xl:px-[15%]">
                    <div className="col-span-12 lg:col-span-4 py-6 flex justify-center">
                        <div className="w-3/5 sm:w-2/5 md:w-1/3 lg:w-full">
                            <div className="text-xl font-bold mb-3">Thông tin hỗ trợ</div>
                            <div className="mb-3">Lê đại hành, Hai Bà Trưng, Hà Nội</div>
                            <div className="mb-3">tuannbcontact@gmail.com</div>
                            <div className="mb-3">+8402201870</div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 py-6 flex justify-center">
                        <div className="w-3/5 sm:w-2/5 md:w-1/3 lg:w-full">
                            <div className="text-xl font-bold mb-3">Tài khoản</div>
                            <div className="mb-3">Tài khoản của tôi</div>
                            <div className="mb-3">Đăng nhập / Đăng ký</div>
                            <div className="mb-3">Giỏ hàng</div>
                            <div className="mb-3">Đặt trước</div>
                            <div className="mb-3">Mua sắm</div>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-4 py-6 flex justify-center">
                        <div className="w-3/5 sm:w-2/5 md:w-1/3 lg:w-full">
                            <div className="text-xl font-bold mb-3">Điều khoản và dịch vụ</div>
                            <div className="mb-3">Điều khoản</div>
                            <div className="mb-3">Bảo mật thông tin</div>
                            <div className="mb-3">Các câu hỏi thường gặp</div>
                            <div className="mb-3">Liên hệ</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t w-full border-gray-400 opacity-50"></div>
            <div className="bg-third">
                <div className="flex justify-center py-3">
                <span className="flex items-center gap-2 text-gray-200 text-sm">
                    <Copyright/>
                    Copyright JerryFox 2025. All rights reserved.
                </span>
                </div>
            </div>
        </div>
    )
}