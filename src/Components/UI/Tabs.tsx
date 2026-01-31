import { useState, type JSX } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

export type Tab = {
    title: string | JSX.Element;
    value: string;
    content?: string | React.ReactNode;
};

export const Tabs = ({
    tabs: propTabs,
    containerClassName,
    activeTabClassName,
    tabClassName,
    contentClassName,
}: {
    tabs: Tab[];
    containerClassName?: string;
    activeTabClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
}) => {
    const [active, setActive] = useState<Tab>(propTabs[0]);
    const [tabs, setTabs] = useState<Tab[]>(propTabs);

    const moveSelectedTabToTop = (idx: number) => {
        const newTabs = [...propTabs];
        const selectedTab = newTabs.splice(idx, 1);
        newTabs.unshift(selectedTab[0]);
        setTabs(newTabs);
        setActive(newTabs[0]);
    };

    const [hovering, setHovering] = useState(false);

    return (
        <div className="w-full h-full flex items-center flex-col">
            <div
                className={cn(`
                    flex sm:flex-row items-center justify-center overflow-hidden 
                    flex-col
                    sm:overflow-visible no-visible-scrollbar w-full h-fit 
                    bg-background-dark/30
                    mt-5 sm:w-fit dark:bg-zinc-900
                    rounded-lg
                    sm:rounded-full pl-0 pr-0 sm:p-1`,
                    containerClassName
                )}
            >
                {propTabs.map((tab, idx) => (
                    <button
                        key={tab.value}
                        onClick={() => {
                            moveSelectedTabToTop(idx);
                        }}
                        onMouseEnter={() => setHovering(true)}
                        onMouseLeave={() => setHovering(false)}
                        className={cn(`relative px-4 py-2 
                          w-full sm:w-fit
                          duration-300 hover:bg-white
                          cursor-pointer dark:hover:bg-zinc-800
                          rounded-full`, tabClassName)}
                        style={{
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {active.value === tab.value && (
                            <motion.div
                                layoutId="clickedbutton"
                                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                className={cn(
                                    `absolute inset-0 
                                    bg-linear-to-r 
                                    from-main 
                                    to-main-alt 
                                    p-0.5
                                    rounded-full`,
                                    activeTabClassName
                                )}
                            />
                        )}
                        <span className={`relative block ${active.value === tab.value ?
                            "text-background dark:text-foreground" : ""}`}>
                            {tab.title}
                        </span>
                    </button>
                ))}
            </div>
            <FadeInDiv
                tabs={tabs}
                active={active}
                key={active.value}
                hovering={hovering}
                className={cn("mt-15", contentClassName)}
            />
        </div >
    );
};

export const FadeInDiv = ({
    className,
    tabs,
    hovering,
}: {
    className?: string;
    key?: string;
    tabs: Tab[];
    active: Tab;
    hovering?: boolean;
}) => {
    const isActive = (tab: Tab) => {
        return tab.value === tabs[0].value;
    };
    return (
        <div className="relative w-full h-full z-5">
            {
                tabs.map((tab, idx) => (
                    <motion.div
                        key={tab.value}
                        layoutId={tab.value}
                        style={{
                            scale: 1 - idx * 0.1,
                            top: hovering ? idx * -50 : 0,
                            zIndex: -idx,
                            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
                        }}
                        animate={{
                            y: isActive(tab) ? [0, 40, 0] : 0,
                        }}
                        className={cn(
                            "w-full bg-background-light dark:bg-background-dark min-h-160 h-full absolute flex will-change-transform transform-gpu left-1/2 -translate-x-1/2 rounded-2xl",
                            className
                        )}
                    >
                        <div className={cn(
                            "w-full bg-background-dark/50 dark:bg-background-dark min-h-160 h-full absolute flex",
                            "will-change-transform transform-gpu left-1/2 -translate-x-1/2 rounded-2xl",
                            idx === 0 && [
                                "bg-background-dark",
                                "bg-dither-strong",
                                "bg-linear-to-br",
                                "from-primary/20 from-0%",
                                "via-primary-alt/15 via-45%",
                                "to-background-dark/30 to-100%",
                                "border",
                                "border-solid",
                                "border-background-dark/20",
                                "dark:border-foreground/20",
                                "p-0.5",
                                "rounded-[inherit]",
                                "overflow-hidden"
                            ]
                        )}>
                            {tab.content}
                        </div>
                    </motion.div>
                ))
            }
        </div >
    );
};

