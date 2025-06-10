import CategorySwiper from "@/components/home/category-swiper";
import HomeCard from "@/components/layout/home-card";

export default function Category() {
    return (
        <div className="mt-20">
            <HomeCard leftHeaderTitle={"Danh mục"} body={<CategorySwiper></CategorySwiper>} />
        </div>
    );
}