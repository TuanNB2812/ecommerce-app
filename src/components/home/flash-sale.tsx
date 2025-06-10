import {CircleArrowRight} from "lucide-react";
import Entry from "@/components/home/common/entry";
import ItemList from "@/components/home/flashsale/item-list";

export default function FlashSale() {
    return (
        <div className="mt-20">
            <Entry srcImageLeftHeader={"/svg/fire.svg"} leftHeaderTitle={"Flash Sale"}
                   rightHeaderTitle={"Xem tất cả"} iconRightHeader={<CircleArrowRight size={17}/>}
                   isRightHeaderLink={true} hrefRightHeader={"/"} body={<ItemList></ItemList>}/>
        </div>
    );
}