import CategorySwiper from "@/components/home/category/category-swiper";
import Entry from "@/components/home/common/entry";

export default function Category() {
    return (
        <div className="mt-20">
            <Entry leftHeaderTitle={"Danh mục"} body={<CategorySwiper></CategorySwiper>} />
        </div>
    );
}