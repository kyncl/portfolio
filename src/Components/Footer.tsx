import { FaGithub } from "react-icons/fa";

export const Footer = () => {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <h2 className="text-5xl font-semibold">Contacts</h2>
            <a
                className="mt-3 ml-2 flex gap-2 
                text-xl bg-foreground
                w-fit text-background
                hover:text-foreground
                hover:bg-background
                hover:border-foreground
                border border-transparent
                duration-400
                hover:duration-200
                p-2 rounded-xl
                items-center"
                target="_blank"
                href="https://github.com/kyncl">
                <FaGithub />
                Github
            </a>
        </div>
    );
};
