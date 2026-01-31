import { useEffect, useState } from "react";

const titles = [
    "Backend developer",
    "IT enthusiast",
    "Web developer",
    "Pop culture geek",
    "Game developer",
    "Chill guy 😎",
];

export const Welcome = () => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isPausing, setIsPausing] = useState(false);

    useEffect(() => {
        // 1. Handle Pause Animation
        if (isPausing) {
            const timeout = setTimeout(() => {
                setIsPausing(false);
                setIsDeleting(true);
            }, 2000);
            return () => clearTimeout(timeout);
        }

        // 2. Handle word transition (LINTER FIX)
        if (isDeleting && subIndex === 0) {
            // Wrapping in a timeout moves the update out of the immediate Effect execution
            const timeout = setTimeout(() => {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % titles.length);
            }, 0);
            return () => clearTimeout(timeout);
        }

        // 3. Handle reaching end of word
        if (!isDeleting && subIndex === titles[index].length) {
            const timeout = setTimeout(() => setIsPausing(true), 0);
            return () => clearTimeout(timeout);
        }

        // 4. Typing/Deleting logic
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, isDeleting ? 50 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, isDeleting, isPausing, index]);

    return (
        <div className="min-h-screen 
        flex flex-col
        items-center 
        justify-center">
            <h1 className="
            text-5xl 
            uppercase
            font-semibold
            sm:text-8xl">Kynčl</h1>
            <div className="text-2xl">
                <span>{titles[index].substring(0, subIndex)}</span>
                <span className="cursor">{isPausing ? "." : "|"}</span>
            </div>
        </div>
    );
};
