"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import {Contact, House, Info, Menu, UserPen} from "lucide-react";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";
import {clsx} from "clsx";

const navItems = [
    { href: "/", label: "Trang chủ", icon: House },
    { href: "/information", label: "Thông tin", icon: Info },
    { href: "/contact", label: "Liên hệ", icon: Contact },
    { href: "/register", label: "Đăng ký", icon: UserPen },
];

export default function HeaderNavigationMenu() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 1024) {
                setOpen(false);
            }
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <nav className="w-full h-full">
            <div className="hidden lg:flex lg:flex-row lg:justify-between h-full items-center">
                {navItems.map(({href, label}) => (
                    <Link
                        key={href}
                        href={href}
                        className="hover:underline transition-colors"
                    >
                        <span>{label}</span>
                    </Link>
                ))}
            </div>
            <div className="lg:hidden">
                <Sheet open={open} onOpenChange={setOpen}>
                    <SheetTrigger asChild>
                        <Button asChild variant="ghost" size="icon" aria-label="Toggle menu">
                            <Menu/>
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="w-[50vw] sm:w-[40vw] header-sheet-content">
                        <SheetHeader>
                            <SheetTitle><VisuallyHidden>Menu</VisuallyHidden></SheetTitle>
                        </SheetHeader>
                        <nav className="flex flex-col">
                            {navItems.map(({href, label, icon: Icon}, index) => (
                                <Link
                                    key={href}
                                    href={href}
                                    onClick={() => setOpen(false)}
                                    className={clsx("text-base hover:text-primary ml-4 flex items-center", index != 0 && "mt-4")}
                                >
                                    <span className="flex flex-row items-center"><Icon
                                        className="h-4 w-4 mr-2"/> {label}</span>
                                </Link>
                            ))}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}