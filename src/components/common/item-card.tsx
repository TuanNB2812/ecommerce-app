'use client';

import Image from "next/image";
import Link from "next/link";
import {formatCurrencyVND} from "@/lib/utils";
import CountDownTime from "@/components/common/count-down-time";
import {useEffect, useState} from "react";
import {CommonSkeleton} from "@/components/skeleton/common-skeleton";

type ItemCardProps = {
    item: Item;
    onExpire?: () => void;
}

export default function ItemCard({item, onExpire}: ItemCardProps) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, [item])

    if (isLoading) return <CommonSkeleton rowNumber={1} height="30vh" rounded="rounded-lg"/>;

    return (
        <div className="border border-primary rounded-lg min-h-[30vh]">
            <Link href={item.href}>
                <div className="relative min-h-[20vh] w-full">
                    {item?.countDownEndTime && (
                        <div className="absolute z-1 top-0 left-0 bg-primary/40 w-[90%] h-[18%] text-xs rounded-br-lg rounded-tl-lg overflow-hidden">
                            <CountDownTime endTime={item?.countDownEndTime} pattern = "dd/MM/yyyy HH:mm:ss" onExpire={onExpire} />
                        </div>
                    )}
                    <Image
                        className="object-cover rounded-t-lg"
                        src={item.imageSrc}
                        alt={item.imageSrc}
                        sizes="(max-width: 1280) 50vw, 75vw"
                        fill
                        quality={100}
                    />
                </div>
                <div className="ml-4 pb-4">
                    <h3 className="text-xl font-semibold mt-3">{item.name}</h3>
                    <div className="flex items-center gap-2 mt-6">
                        {item.discountPrice ? (
                            <>
                                <span className="text-sm text-muted-foreground line-through">{formatCurrencyVND(item.price)}</span>
                                <span className="text-lg font-bold text-primary">{formatCurrencyVND(item.discountPrice)}</span>
                            </>
                        ) : (
                            <span className="text-lg font-bold text-primary">{formatCurrencyVND(item.price)}</span>
                        )}
                    </div>
                </div>
            </Link>
        </div>
    );
}