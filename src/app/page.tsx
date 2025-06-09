import Category from "@/components/home/category";
import HomeComp from "@/components/home/home";

export default function Home() {
    return (
        <div className="w-full min-h-screen md:px-10 lg:px-15 mb-10">
            <HomeComp></HomeComp>
            <Category></Category>
        </div>
    );
}
