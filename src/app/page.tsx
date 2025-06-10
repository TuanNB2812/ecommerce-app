import Category from "@/components/home/category";
import Slider from "@/components/home/slider";
import FlashSale from "@/components/home/flash-sale";

export default function Home() {
    return (
        <div className="w-full min-h-screen md:px-10 lg:px-15 mb-10">
            <Slider></Slider>
            <Category></Category>
            <FlashSale></FlashSale>
        </div>
    );
}
