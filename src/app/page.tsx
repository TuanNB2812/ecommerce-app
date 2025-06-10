import Category from "@/components/home/category";
import HomeComp from "@/components/home/home";
import FlashSale from "@/components/home/flash-sale";

export default function Home() {
    return (
        <div className="w-full min-h-screen md:px-10 lg:px-15 mb-10">
            <HomeComp></HomeComp>
            <Category></Category>
            <FlashSale></FlashSale>
        </div>
    );
}
