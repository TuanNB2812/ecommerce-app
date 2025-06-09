import CategorySwiper from "@/components/home/category-swiper";

export default function Category() {
    return (
        <div className="mt-20">
            <div className="text-3xl text-muted-foreground border-b pb-4 mb-4">Danh mục</div>
            <CategorySwiper></CategorySwiper>
        </div>
    );
}