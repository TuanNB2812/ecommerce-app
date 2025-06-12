import Entry from "@/components/home/common/entry";
import {CircleArrowRight} from "lucide-react";
import BrandItemList from "@/components/home/brand/brand-item-list";

export default function Brand() {
    return (
        <div className="mt-20">
            <Entry leftHeaderTitle={"Thương hiệu"}
                   rightHeaderTitle={"Xem tất cả"} iconRightHeader={<CircleArrowRight size={17}/>}
                   isRightHeaderLink={true} hrefRightHeader={"/"} body={<BrandItemList></BrandItemList>}/>
        </div>
    );
}