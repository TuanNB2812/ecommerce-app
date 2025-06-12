'use client';

import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Navigation} from "swiper/modules";
import '../../../style/components/swipe.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import Image from "next/image";
import {useEffect, useState} from "react";
import {CommonSkeleton} from "@/components/skeleton/common-skeleton";
import Link from "next/link";

const BREAKPOINTS = [
    { min: 0, max: 639, items: 3 },
    { min: 640, max: 767, items: 4 },
    { min: 768, max: 1023, items: 5 },
    { min: 1024, max: 1279, items: 6 },
    { min: 1280, max: 1535, items: 8 },
    { min: 1536, max: Infinity, items: 10 },
];

const DEFAULT_ROW_NUMBER = 2;
const DEFAULT_SPACE_BETWEEN = 10;

const swiperSlideImage = [
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-1.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-2.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-3.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-1.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-2.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-3.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-1.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-2.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-3.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-1.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-2.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-3.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-1.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-2.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-3.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-1.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-2.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-3.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-1.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-2.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-3.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-1.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-2.jpg"},
    {href: "/", alt: "Thời trang nam", src: "/images/swiper-image-3.jpg"},
];

export default function CategorySwiper() {
    const [itemNumber, setItemNumber] = useState(3);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const updateItems = () => {
            const width = window.innerWidth;
            const found = BREAKPOINTS.find(b => width >= b.min && width <= b.max);
            setItemNumber(found?.items || 3);
        };

        let resizeTimeout: number;
        const handleResize = () => {
            cancelAnimationFrame(resizeTimeout);
            resizeTimeout = requestAnimationFrame(updateItems);
        };

        updateItems();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (itemNumber) {
            setIsLoading(false);
        }
    }, [itemNumber]);

    if (isLoading) {
        return <CommonSkeleton rowNumber={DEFAULT_ROW_NUMBER} spaceBetween={DEFAULT_SPACE_BETWEEN} height="15vh" rounded="rounded-lg"/>;
    }

    return (
        <Swiper
            slidesPerView={itemNumber}
            grid={{ rows: DEFAULT_ROW_NUMBER, fill: "row" }}
            spaceBetween={DEFAULT_SPACE_BETWEEN}
            navigation={true}
            modules={[Grid, Navigation]}
            className="category-swiper"
        >
            {swiperSlideImage.map(({ href, alt, src }, index) => (
                <SwiperSlide key={index}>
                    <Link href={href}>
                        <div className="min-h-[15vh] border border-primary border-1 bg-primary-pastel rounded-lg flex flex-col items-center justify-center">
                            <div className="relative w-[80px] h-[80px]">
                                <Image
                                    className="object-cover rounded-full"
                                    src={src}
                                    alt={alt}
                                    fill
                                    sizes="(max-width: 1280) 50vw, 75vw"
                                />
                            </div>
                            <div className="mt-2 text-sm">
                                {alt}
                            </div>
                        </div>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}