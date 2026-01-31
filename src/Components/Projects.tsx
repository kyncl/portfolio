import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BentoGrid, BentoGridItem, type BentoItem } from "./UI/BentoGrid";
import { useOutsideClick } from "./UI/ExpandableClick";
import "../style/languages.css";
import { DitherShader } from "./UI/DitherShader";
import { ProjectShowcase } from "./UI/ProjectsShowcase";
import { FaGithub } from "react-icons/fa";

const Skeleton = ({ imgSrc }: { imgSrc?: string }) => (
    <div className="flex flex-1 w-full h-full min-h-56 rounded-xl  
    dark:bg-dot-white/[0.2] bg-dot-black/[0.2] 
    mask-[radial-gradient(ellipse_at_center,white,transparent)]
    border border-transparent dark:border-white/20 bg-neutral-100 dark:bg-black">
        {imgSrc ?
            <DitherShader
                src={imgSrc}
                threshold={0.45}
                ditherMode="bayer"
            />
            : ""}
    </div>
);

const GithuLink = ({ href }: { href?: string }) => {
    return (
        <a
            href={href}
            target="_blank"
            className="flex cursor-pointer bg-foreground text-background p-2 
            rounded-full text-2xl 
            duration-400
            hover:duration-200
            hover:text-foreground
            hover:bg-background
            border border-transparent
            hover:border-foreground
            flex-row
            mt-6
            sm:mt-0
            w-full
            sm:w-fit
            pl-3 pr-3
            gap-5 items-center justify-center">
            <FaGithub />
            <span>Repo</span>
        </a>

    )
}

export const Projects = () => {
    const [active, setActive] = useState<(
        BentoItem[])[number] | boolean | null
    >(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();
    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);
    useOutsideClick(ref, () => setActive(null));

    const bentoProjects = [
        {
            title: "Rata-sorter",
            description: "CLI app for visualisation of sorting algorithms",
            header: <Skeleton imgSrc="rata-sorter.webp" />,
            className: "md:col-span-2",
            imageSrc: "rata-sorter.gif",
            content:
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full">
                    <div className="flex flex-row items-center">
                        <div className={`text-xl w-7 h-7 rounded-full m-2 rust`}></div>
                        <p className="text-xl m-2">Rust</p>
                    </div>
                    <GithuLink href="https://github.com/kyncl/rata-sorter" />
                </div>,
        },
        {
            title: "Hash bruteforces",
            description: "GUI app for hashing/unhashing sha256 hashes. Made in Tauri using React.",
            header: <Skeleton imgSrc="bruteforcer.png" />,
            className: "md:col-span-1",
            imageSrc: "bruteforcer.png",
            content:
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full">
                    <div>
                        <ul className="flex flex-row sm:flex-col">
                            <li className="flex flex-row items-center">
                                <div className={`text-xl w-7 h-7 rounded-full m-2 rust`}></div>
                                <p className="text-xl m-2">Rust</p>
                            </li>
                            <li className="flex flex-row items-center">
                                <div className={`text-xl w-7 h-7 rounded-full m-2 typescript`}></div>
                                <p className="text-xl m-2">TypeScript</p>
                            </li>
                        </ul>
                    </div>
                    <GithuLink href="https://github.com/kyncl/epesni-bruteforce" />
                </div>,
        },
        {
            title: "Ewritter",
            description: `
                Web app for writing articles / post 
                that you can share with other users.
                Using laravel and nextjs
                Resources
            `,
            header: <Skeleton imgSrc="ewritter.png" />,
            className: "md:col-span-1",
            imageSrc: "ewritter.png",
            content:
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full">
                    <div>
                        <ul className="flex flex-row sm:flex-col">
                            <li className="flex flex-row items-center">
                                <div className={`text-xl w-7 h-7 rounded-full m-2 php`}></div>
                                <p className="text-xl m-2">PHP</p>
                            </li>
                            <li className="flex flex-row items-center">
                                <div className={`text-xl w-7 h-7 rounded-full m-2 typescript`}></div>
                                <p className="text-xl m-2">TypeScript</p>
                            </li>
                        </ul>
                    </div>
                    <GithuLink href="https://github.com/kyncl/epesni-bruteforce" />
                </div>,
        },
    ];

    return (
        <div className="min-h-screen flex flex-col items-center">
            <h2 className="text-5xl font-semibold">Projects</h2>
            <div className="w-full pt-10">
                <div className="w-full">
                    <AnimatePresence>
                        {active && typeof active === "object" && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-background-dark/20 
                                h-full w-full z-10"
                            />
                        )}
                    </AnimatePresence>
                    <ProjectShowcase
                        id={id}
                        ref={ref}
                        active={active}
                        setActive={setActive}
                    />

                    <BentoGrid
                        className="subtle subtle-always 
                        multiple
                        max-w-7xl pl-4 pr-4 md:pl-10 
                        md:pr-10 mx-auto md:auto-rows-[23rem] mb-40">
                        {bentoProjects.map((item, i) => (
                            item.title !== ""
                                ? <BentoGridItem
                                    key={i}
                                    item={item}
                                    setActive={setActive}
                                    id={id}
                                /> : ""
                        ))}
                    </BentoGrid>
                </div>
            </div>
        </div>
    );
};
