import Entry from "@/components/home/common/entry";
import {CircleArrowRight} from "lucide-react";
import MostViewItemList from "@/components/home/mostview/most-view-item-list";

export default function MostView() {
    return (
        <div className="mt-20">
            <Entry leftHeaderTitle={"Tìm kiếm hàng đầu"}
                   rightHeaderTitle={"Xem tất cả"} iconRightHeader={<CircleArrowRight size={17}/>}
                   isRightHeaderLink={true} hrefRightHeader={"/"} body={<MostViewItemList></MostViewItemList>}/>
        </div>
    );
}