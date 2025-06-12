import {Skeleton} from "@/components/ui/skeleton";
import {clsx} from "clsx";

type CategorySkeletonProps = {
    rowNumber?: number;
    spaceBetween?: number;
    height?: string;
    rounded?: string;
};

export function CommonSkeleton({ rowNumber, spaceBetween, height, rounded }: CategorySkeletonProps) {
    return (
        <div
            className="grid grid-cols-12"
            style={{ gap: spaceBetween ? `${spaceBetween}px` : '' }}
        >
            {Array.from({ length: rowNumber ? rowNumber : 1 }).map((_, index) => (
                <div className="col-span-12" style={{ minHeight: height || '100%' }} key={index}>
                    <Skeleton className={clsx("w-full h-full bg-gray-300", rounded && rounded)} />
                </div>
            ))}
        </div>
    );
}