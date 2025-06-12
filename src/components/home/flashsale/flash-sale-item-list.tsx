'use client';

import { useState } from "react";
import ItemCard from "@/components/common/item-card";

const initialItems = [
    {id: 1, href: "/", imageSrc: "/images/swiper-image-1.jpg", name: "Áo thun nam", price: 100000, discountPrice: 80000, countDownEndTime: '12/06/2025 17:00:00'},
    {id: 2, href: "/", imageSrc: "/images/swiper-image-2.jpg", name: "Áo thun nam", price: 120000, discountPrice: 60000, countDownEndTime: '12/06/2025 18:00:00'},
    {id: 3, href: "/", imageSrc: "/images/swiper-image-3.jpg", name: "Áo thun nam", price: 140000, discountPrice: 100000, countDownEndTime: '12/06/2029 19:28:00'},
    {id: 4, href: "/", imageSrc: "/images/swiper-image-1.jpg", name: "Áo thun nam", price: 155000, discountPrice: 900000, countDownEndTime: '12/06/2025 19:28:00'},
    {id: 5, href: "/", imageSrc: "/images/swiper-image-2.jpg", name: "Áo thun nam", price: 180000, discountPrice: 120000, countDownEndTime: '14/06/2025 15:28:00'},
    {id: 6, href: "/", imageSrc: "/images/swiper-image-3.jpg", name: "Áo thun nam", price: 210000, discountPrice: 180000, countDownEndTime: '13/06/2025 12:28:00'}
];

export default function FlashSaleItemList() {
    const [items, setItems] = useState(initialItems);

    const removeItem = (id: number): void => {
        setItems(prev => {
            const index = prev.findIndex(item => item.id === id);
            if (index === -1) return prev;

            const newItems = [...prev];
            newItems.splice(index, 1);
            return newItems;
        });
    };

    return (
        <div className="grid grid-cols-12 xl:grid-cols-10 2xl:grid-cols-12 gap-4 w-full">
            {items.map((item, index) => (
                <div key={item.id} className="col-span-6 sm:col-span-4 lg:col-span-3 xl:col-span-2">
                    <ItemCard
                        item={item}
                        onExpire={() => removeItem(item.id)}
                    />
                </div>
            ))}
        </div>
    );
}
