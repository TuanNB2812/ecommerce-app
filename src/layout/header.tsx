import Link from "next/link";
import HeaderInput from "@/components/layout/header-input";
import HeaderNavigationMenu from "@/components/layout/header-navigation-menu";
import "../style/layout/header-layout.css";

export default function Header() {
    return (
        <div className="w-full text-white">
            <div className="bg-third">
                <div className="flex justify-center items-center py-3">
                <span className="text-sm sm:text-base">
                    Đại hạ giá 50% tất cả sản phẩm trong tháng hè này!
                    <Link href="/" className="font-bold ml-2">Mua sắm ngay</Link>
                </span>
                </div>
            </div>

            <div className="bg-primary">
                <div className="border-t w-full border-gray-400 opacity-50"></div>
                <div className="grid grid-cols-12 px-[5%] xl:px-[15%] py-4">
                    <div className="order-1 col-span-4">
                        <Link href="/" className="font-bold text-4xl">JerryFox</Link>
                    </div>
                    <div
                        className="order-3 lg:order-2 col-span-1 lg:col-span-4">
                        <HeaderNavigationMenu></HeaderNavigationMenu>
                    </div>
                    <div className="order-2 lg:order-3 col-span-7 lg:col-span-4 flex justify-end">
                        <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/3 mr-2 lg:mr-0">
                            <HeaderInput></HeaderInput>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}