import {CircleArrowRight} from "lucide-react";
import HomeCard from "@/components/layout/home-card";

export default function FlashSale() {
    return (
        <div className="mt-20">
            <HomeCard srcImageLeftHeader={"/svg/fire.svg"} leftHeaderTitle={"Flash Sale"}
                      rightHeaderTitle={"Xem tất cả"} iconRightHeader={<CircleArrowRight size={17}/>}
                      isRightHeaderLink={true} hrefRightHeader={"/"} body={<div></div>}/>
        </div>
    );
}