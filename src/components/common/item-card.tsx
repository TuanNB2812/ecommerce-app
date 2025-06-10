import Image from "next/image";
import Link from "next/link";
import {formatCurrencyVND} from "@/lib/utils";

type ItemCardProps = {
    item: Item;
}

export default function ItemCard({item} : ItemCardProps) {
    if (!item) return <></>;

    return (
        <div className="border border-primary rounded-lg">
            <Link href={item.href}>
                <div className="relative min-h-[20vh] w-full">
                    <Image
                        className="object-cover rounded-t-lg"
                        src={item.imageSrc}
                        alt={item.imageSrc}
                        fill
                        quality={100}
                    />
                </div>
                <div className="ml-4 pb-4">
                    <h3 className="text-xl font-semibold mt-3">{item.name}</h3>
                    <div className="flex items-center gap-2 mt-6">
                        <span className="text-sm text-muted-foreground line-through">{formatCurrencyVND(item.price)}</span>
                        <span className="text-lg font-bold text-primary">{formatCurrencyVND(item.discountPrice)}</span>
                    </div>
                </div>
            </Link>
        </div>
    );
}