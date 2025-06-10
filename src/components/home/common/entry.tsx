import Image from "next/image";
import Link from "next/link";
import {clsx} from "clsx";

type HomeCardProps = {
    srcImageLeftHeader?: string;
    leftHeaderTitle: string;
    rightHeaderTitle?: string;
    isRightHeaderLink?: boolean;
    hrefRightHeader?: string;
    iconRightHeader?: React.ReactNode;
    body: React.ReactNode;
};

export default function Entry({
                                     srcImageLeftHeader,
                                     leftHeaderTitle,
                                     rightHeaderTitle,
                                     iconRightHeader,
                                     isRightHeaderLink = false,
                                     hrefRightHeader = "/",
                                     body
                                 }: HomeCardProps) {

    const RightHeaderContent = (
        <>
            {rightHeaderTitle && <span>{rightHeaderTitle}</span>}
            {iconRightHeader}
        </>
    );

    return (
        <>
            <div className="border-b pb-4 mb-4 flex items-center justify-between">
                <div className={clsx(srcImageLeftHeader && "flex items-center gap-2")}>
                    {srcImageLeftHeader && (
                        <Image
                            src={srcImageLeftHeader}
                            alt={srcImageLeftHeader}
                            width={40}
                            height={40}
                            quality={100}
                        />
                    )}
                    <span className="text-3xl text-muted-foreground mt-1">{leftHeaderTitle}</span>
                </div>
                <div>
                    {(rightHeaderTitle || iconRightHeader) && (
                        isRightHeaderLink ? (
                            <Link
                                href={hrefRightHeader}
                                className="flex items-center gap-2 text-primary cursor-pointer text-lg"
                            >
                                {RightHeaderContent}
                            </Link>
                        ) : (
                            <div className="flex items-center gap-2 text-primary text-lg">
                                {RightHeaderContent}
                            </div>
                        )
                    )}
                </div>
            </div>
            <div>
                {body}
            </div>
        </>
    );
}