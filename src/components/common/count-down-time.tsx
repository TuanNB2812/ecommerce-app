'use client';

import { useEffect, useState } from "react";
import { parse } from "date-fns";
import Image from "next/image";
import {formatTime} from "@/lib/utils";

type CountDownTimeProps = {
    endTime: string;
    pattern: string;
    onExpire?: () => void;
};

export default function CountDownTime({ endTime, pattern, onExpire }: CountDownTimeProps) {
    const [timeLeft, setTimeLeft] = useState<number | null>(null);

    useEffect(() => {
        const parsedEndTime = parse(endTime, pattern, new Date());
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = parsedEndTime.getTime() - now;
            setTimeLeft(distance > 0 ? distance : 0);

            if (distance <= 0 && onExpire) {
                onExpire();
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, [endTime, pattern, onExpire]);

    if (timeLeft === null) return null;

    if (timeLeft <= 0) {
        return (
            <div className="h-full w-full flex items-center">
                <div className="ml-3 font-bold">Đã hết thời gian!</div>
            </div>
        );
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return (
        <div className="h-full w-full flex items-center">
            <div className="flex w-full items-center justify-center space-x-1 font-bold">
                <Image
                    src="/svg/clock.svg"
                    alt="/svg/clock.svg"
                    height={20}
                    width={20}
                    quality={100}
                />
                <span>{days} ngày</span>
                <span>-</span>
                <span>{formatTime(hours)}</span>
                <span>:</span>
                <span>{formatTime(minutes)}</span>
                <span>:</span>
                <span>{formatTime(seconds)}</span>
            </div>
        </div>
    );
}