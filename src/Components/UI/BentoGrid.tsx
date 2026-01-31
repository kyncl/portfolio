import type { Dispatch, JSX } from "react";
import { cn } from "../../lib/utils";
import { motion } from "motion/react";

export interface BentoItem {
    title: string;
    description: string;
    header: JSX.Element;
    className: string;
    imageSrc?: string;
    icon?: JSX.Element,
    content: JSX.Element;
};

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "mx-auto grid grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    item,
    id,
    setActive,
}: {
    item: BentoItem,
    id: string,
    setActive: Dispatch<React.SetStateAction<boolean | BentoItem | null>>,
    className?: string
}) => {
    return (
        <motion.div
            layoutId={`card-${item.title}-${id}`}
            key={`card-${item.title}-${id}`}
            onClick={() => setActive(item)}
            className={cn(
                "cursor-pointer",
                "group/bento shadow-input row-span-1 flex flex-col",
                "justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 hover:shadow-xl",
                "dark:border-white/20 dark:bg-black dark:shadow-none",
                item.className,
            )}
        >
            {item.header}
            <div className="transition duration-200 group-hover/bento:translate-x-2">
                {item?.icon ?? ""}
                <div className="mt-2 mb-2 font-sans font-bold text-main">
                    {item.title}
                </div>
                <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
                    {item.description}
                </div>
            </div>
        </motion.div>
    );
};

