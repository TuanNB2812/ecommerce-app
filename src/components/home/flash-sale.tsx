import {CircleArrowRight} from "lucide-react";
import Entry from "@/components/home/common/entry";
import FlashSaleItemList from "@/components/home/flashsale/flash-sale-item-list";

export default function FlashSale() {
    return (
        <div className="mt-20">
            <Entry srcImageLeftHeader={"/svg/fire.svg"} leftHeaderTitle={"Flash sale"}
                   rightHeaderTitle={"Xem tất cả"} iconRightHeader={<CircleArrowRight size={17}/>}
                   isRightHeaderLink={true} hrefRightHeader={"/"} body={<FlashSaleItemList></FlashSaleItemList>}/>
        </div>
    );
}