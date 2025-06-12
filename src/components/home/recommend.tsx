import Entry from "@/components/home/common/entry";
import {CircleArrowRight} from "lucide-react";
import RecommendItemList from "@/components/home/recommend/recommend-item-list";

export default function Recommend() {
    return (
        <div className="mt-20">
            <Entry leftHeaderTitle={"Gợi ý hôm nay"}
                   rightHeaderTitle={"Xem tất cả"} iconRightHeader={<CircleArrowRight size={17}/>}
                   isRightHeaderLink={true} hrefRightHeader={"/"} body={<RecommendItemList></RecommendItemList>}/>
        </div>
    );
}