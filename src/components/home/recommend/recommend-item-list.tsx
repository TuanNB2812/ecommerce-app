import ItemCard from "@/components/common/item-card";

const items = [
    {href: "/", imageSrc: "/images/swiper-image-1.jpg", name: "Áo thun nam", price: 100000},
    {href: "/", imageSrc: "/images/swiper-image-2.jpg", name: "Áo thun nam", price: 120000, discountPrice: 60000},
    {href: "/", imageSrc: "/images/swiper-image-3.jpg", name: "Áo thun nam", price: 140000, discountPrice: 100000},
    {href: "/", imageSrc: "/images/swiper-image-1.jpg", name: "Áo thun nam", price: 155000, discountPrice: 900000},
    {href: "/", imageSrc: "/images/swiper-image-2.jpg", name: "Áo thun nam", price: 180000},
    {href: "/", imageSrc: "/images/swiper-image-3.jpg", name: "Áo thun nam", price: 210000, discountPrice: 180000},
    {href: "/", imageSrc: "/images/swiper-image-1.jpg", name: "Áo thun nam", price: 100000, discountPrice: 80000},
    {href: "/", imageSrc: "/images/swiper-image-2.jpg", name: "Áo thun nam", price: 120000, discountPrice: 60000},
    {href: "/", imageSrc: "/images/swiper-image-3.jpg", name: "Áo thun nam", price: 140000, discountPrice: 100000},
    {href: "/", imageSrc: "/images/swiper-image-1.jpg", name: "Áo thun nam", price: 155000},
    {href: "/", imageSrc: "/images/swiper-image-2.jpg", name: "Áo thun nam", price: 180000},
    {href: "/", imageSrc: "/images/swiper-image-3.jpg", name: "Áo thun nam", price: 210000, discountPrice: 180000}
]

export default function RecommendItemList() {
    return (
        <div className="grid grid-cols-12 gap-4 w-full">
            {
                items.map((item, index) => (
                    <div key={index} className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-2">
                        <ItemCard item={item} />
                    </div>
                ))
            }
        </div>
    );
}