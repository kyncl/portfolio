/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
    AnimatePresence,
    MotionValue,
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "motion/react";

import { useRef, useState, type JSX } from "react";
import { cn } from "../../lib/utils";

export interface Section {
    title: string,
    icon: JSX.Element,
    section: JSX.Element
}

const scrollTo = (id: number, sectionsRef: React.RefObject<HTMLDivElement[]>) => {
    if (sectionsRef && sectionsRef.current) {
        const element = sectionsRef.current[id]
        const navbar = document.getElementsByTagName("nav");
        let offset = 0;
        if (navbar.length > 0) {
            offset = navbar[0].clientHeight;
        }
        window.scrollTo(0,
            element.offsetTop
            - offset
        );
    }
};

export const FloatingDock = ({
    items,
    desktopClassName,
    mobileClassName,
    sectionsRef
}: {
    items: Section[];
    desktopClassName?: string;
    mobileClassName?: string;
    sectionsRef: React.RefObject<HTMLDivElement[]>
}) => {
    return (
        <>
            <FloatingDockDesktop sectionsRef={sectionsRef} items={items} className={desktopClassName} />
            <FloatingDockMobile sectionsRef={sectionsRef} items={items} className={mobileClassName} />
        </>
    );
};

const FloatingDockMobile = ({
    items,
    className,
    sectionsRef
}: {
    items: Section[];
    className?: string;
    sectionsRef: React.RefObject<HTMLDivElement[]>
}) => {
    const [open, setOpen] = useState(false);
    return (
        <div className={cn("relative block md:hidden z-50", className)}>
            <AnimatePresence>
                {open && (
                    <motion.div
                        layoutId="nav"
                        className="absolute inset-x-0 bottom-full mb-2 flex flex-col 
                        gap-2 justify-center items-center"
                    >
                        {items.map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: 10,
                                    transition: {
                                        delay: idx * 0.05,
                                    },
                                }}
                                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                            >
                                <button
                                    onClick={() => {
                                        scrollTo(idx, sectionsRef);
                                        setOpen(false);
                                    }}
                                    key={idx}
                                    className="flex p-3 items-center 
                                    cursor-pointer
                                    justify-center rounded-full bg-background-dark/50
                                    text-background/90
                                    dark:text-foreground
                                    dark:bg-neutral-900"
                                >
                                    <div className="h-full w-full flex text-3xl justify-center items-center">{item.icon}</div>
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
            <button
                onClick={() => setOpen(!open)}
                className="flex h-full w-full items-center 
                p-5 cursor-pointer 
                justify-center rounded-full bg-background-dark/20 dark:bg-background-light/40"
            >
                <IconLayoutNavbarCollapse className="text-2xl text-foreground/50" />
            </button>
        </div>
    );
};

const FloatingDockDesktop = ({
    items,
    className,
    sectionsRef

}: {
    items: Section[];
    className?: string;
    sectionsRef: React.RefObject<HTMLDivElement[]>;
}) => {
    const mouseX = useMotionValue(Infinity);
    return (
        <motion.div
            onMouseMove={(e) => mouseX.set(e.pageX)}
            onMouseLeave={() => mouseX.set(Infinity)}
            className={cn(
                `mx-auto hidden h-16 items-end 
                gap-4 rounded-2xl 
                bg-background-dark/20 
                px-4 pb-3 md:flex 
                border border-foreground/20
                dark:bg-background-light/20 z-50`,
                className,
            )}
        >
            {items.map((item, idx) => (
                <IconContainer
                    id={idx}
                    sectionsRef={sectionsRef}
                    item={item}
                    mouseX={mouseX}
                    key={idx} />
            ))}
        </motion.div>
    );
};

function IconContainer({
    id,
    mouseX,
    item,
    sectionsRef
}: {
    id: number;
    mouseX: MotionValue;
    item: Section;
    sectionsRef: React.RefObject<HTMLDivElement[]>;

}) {
    const ref = useRef<HTMLDivElement>(null);

    const distance = useTransform(mouseX, (val) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

        return val - bounds.x - bounds.width / 2;
    });

    const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
    const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

    const widthTransformIcon = useTransform(distance, [-150, 0, 150], [60, 80, 60]);
    const heightTransformIcon = useTransform(
        distance,
        [-150, 0, 150],
        [60, 80, 60],
    );

    const width = useSpring(widthTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    const height = useSpring(heightTransform, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const widthIcon = useSpring(widthTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });
    const heightIcon = useSpring(heightTransformIcon, {
        mass: 0.1,
        stiffness: 150,
        damping: 12,
    });

    const [hovered, setHovered] = useState(false);

    return (
        <button
            onClick={() => { scrollTo(id, sectionsRef) }}
            className="cursor-pointer bg-transparent!">
            <motion.div
                ref={ref}
                style={{ width, height }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="relative flex aspect-square items-center justify-center rounded-full 
                bg-gray-50
                dark:bg-neutral-900"
            >
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, x: "-50%" }}
                            animate={{ opacity: 1, y: 0, x: "-50%" }}
                            exit={{ opacity: 0, y: 2, x: "-50%" }}
                            className="absolute -top-8 left-1/2 w-fit rounded-md 
                            border bg-background-light px-2 py-0.5 text-xs 
                            dark:bg-background-dark
                            whitespace-pre 
                            border-foreground/20"
                        >
                            {item.title}
                        </motion.div>
                    )}
                </AnimatePresence>
                <motion.div
                    style={{ width: widthIcon, height: heightIcon }}
                    className="flex items-center justify-center text-center text-2xl"
                >
                    {item.icon}
                </motion.div>
            </motion.div>
        </button>
    );
}

