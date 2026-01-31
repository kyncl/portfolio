import type { Dispatch, RefObject, SetStateAction } from "react";
import type { BentoItem } from "./BentoGrid";
import { AnimatePresence, motion } from "motion/react";
import { GrClose } from "react-icons/gr";

export const ProjectShowcase = ({
    active,
    setActive,
    id,
    ref
}: {
    active: boolean | BentoItem | null,
    setActive: Dispatch<SetStateAction<boolean | BentoItem | null>>,
    id: string,
    ref: RefObject<HTMLDivElement | null>
}) => {
    return (
        <AnimatePresence>
            {active && typeof active === "object" ?
                <div className="fixed inset-0 grid place-items-center z-100">
                    <motion.div
                        layoutId={`card-${active.title}-${id}`}
                        ref={ref}
                        className={`
                        w-full md:max-w-200 
                        border border-transparent dark:border-white/20
                        relative
                        h-full sm:h-2/3
                        flex flex-col bg-white dark:bg-black 
                        sm:rounded-3xl  overflow-hidden`}
                    >
                        <motion.button
                            onClick={() => {
                                setActive(null);
                            }}
                            className="cursor-pointer absolute top-5 right-5">
                            <GrClose className="text-2xl" />
                        </motion.button>
                        {
                            active.imageSrc !== "" && active.imageSrc ?
                                <motion.div
                                    layoutId={`image-${active.title}-${id}`}>
                                    <div className="pb-15 bg-background-dark/15 dark:bg-background-dark">
                                    </div>
                                    <img
                                        width={200}
                                        height={200}
                                        src={active.imageSrc}
                                        alt={active.title}
                                        className="w-full h-96 object-cover object-top"
                                    />
                                </motion.div>
                                : <></>
                        }

                        <div>
                            <div className="flex justify-between items-start p-4">
                                <div className="">
                                    <motion.h3
                                        layoutId={`title-${active.title}-${id}`}
                                        className="text-4xl font-bold text-neutral-700 dark:text-neutral-200"
                                    >
                                        {active.title}
                                    </motion.h3>
                                    <motion.p
                                        layoutId={`description-${active.description}-${id}`}
                                        className="text-neutral-600 dark:text-neutral-400"
                                    >
                                        {active.description}
                                    </motion.p>
                                </div>
                            </div>
                            <div className="pt-4 relative px-4">
                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                >
                                    {typeof active.content === "function"
                                        ? active.content
                                        : active.content}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                : null
            }
        </AnimatePresence >
    );
}
