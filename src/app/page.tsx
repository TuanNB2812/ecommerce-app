import Category from "@/components/home/category";
import Slider from "@/components/home/slider";
import FlashSale from "@/components/home/flash-sale";
import MostView from "@/components/home/most-view";
import Recommend from "@/components/home/recommend";
import Brand from "@/components/home/brand";

export default function Home() {
    return (
        <div className="w-full min-h-screen px-5 md:px-10 lg:px-15 mb-10">
            <Slider></Slider>
            <Category></Category>
            <FlashSale></FlashSale>
            <Brand></Brand>
            <MostView></MostView>
            <Recommend></Recommend>
        </div>
    );
}
