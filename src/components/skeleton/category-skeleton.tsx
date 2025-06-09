import {Skeleton} from "@/components/ui/skeleton";

type CategorySkeletonProps = {
    rowNumber: number;
    spaceBetween: number;
};

export function CategorySkeleton({ rowNumber, spaceBetween }: CategorySkeletonProps) {
    return (
        <div
            className="grid min-h-[30vh] grid-cols-12"
            style={{
                gap: `${spaceBetween}px`,
            }}
        >
            {Array.from({ length: rowNumber }).map((_, index) => (
                <div className="relative min-h-[15vh] col-span-12" key={index}>
                    <Skeleton className="w-full h-full rounded-2xl bg-gray-300" />
                </div>
            ))}
        </div>
    );
}