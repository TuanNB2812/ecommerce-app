import ItemCard from "@/components/common/item-card";
import Image from "next/image";
import Link from "next/link";

const items = [
    {href: "/", imageSrc: "/images/swiper-image-1.jpg", name: "Áo thun nam", price: 100000, discountPrice: 80000},
    {href: "/", imageSrc: "/images/swiper-image-2.jpg", name: "Áo thun nam", price: 120000, discountPrice: 60000},
    {href: "/", imageSrc: "/images/swiper-image-3.jpg", name: "Áo thun nam", price: 140000, discountPrice: 100000},
    {href: "/", imageSrc: "/images/swiper-image-1.jpg", name: "Áo thun nam", price: 155000, discountPrice: 900000},
    {href: "/", imageSrc: "/images/swiper-image-2.jpg", name: "Áo thun nam", price: 180000, discountPrice: 120000},
    {href: "/", imageSrc: "/images/swiper-image-1.jpg", name: "Áo thun nam", price: 155000, discountPrice: 900000},
    {href: "/", imageSrc: "/images/swiper-image-2.jpg", name: "Áo thun nam", price: 180000, discountPrice: 120000},
    {href: "/", imageSrc: "/images/swiper-image-1.jpg", name: "Áo thun nam", price: 155000, discountPrice: 900000},
    {href: "/", imageSrc: "/images/swiper-image-2.jpg", name: "Áo thun nam", price: 180000, discountPrice: 120000},
]

export default function BrandItemList() {
    return (
        <div className="grid grid-cols-12 gap-2 w-full">
            <Link href={items[0].href} className="col-span-4 relative border border-primary rounded-lg">
                <Image
                    className="object-cover rounded-lg"
                    src={items[0].imageSrc}
                    alt={items[0].name}
                    fill
                    sizes="(max-width: 1280px) 50vw, 75vw"
                    quality={100}
                />
            </Link>
            <div className="col-span-8 grid grid-cols-12 gap-4 w-full">
                {
                    items.slice(1).map((item, index) => (
                        <div key={index} className="col-span-6 lg:col-span-4 xl:col-span-3">
                            <ItemCard item={item}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}