'use client';

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import '../../../style/components/swipe.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from "next/image";

const swiperSlideImage = [
    {src: "/images/swiper-image-1.jpg", alt: "Ảnh 1"},
    {src: "/images/swiper-image-2.jpg", alt: "Ảnh 2"},
    {src: "/images/swiper-image-3.jpg", alt: "Ảnh 3"}
];

export default function SliderSwiper() {
    return (
        <Swiper slidesPerView={1}
                loop={true}
                pagination={{clickable: true}}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
        >
            {swiperSlideImage.map(({src, alt}, index) => (
                <SwiperSlide>
                    <div className="relative min-h-[40vh] md:min-h-[50vh] xl:min-h-[60vh]">
                        <Image
                            className="object-cover"
                            src={src}
                            alt={alt}
                            fill
                            priority={index === 0}
                            sizes="(max-width: 1280) 50vw, 75vw"
                            quality={100}
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}