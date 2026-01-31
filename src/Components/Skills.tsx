import { IconBrandAdobe, IconBrandFigma, IconBrandOffice } from "@tabler/icons-react";
import type { JSX } from "react";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaGithub, FaWordpress } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { SiAutodeskmaya, SiBlender, SiBun, SiCinema4D, SiDocker, SiDotnet, SiGit, SiLaravel, SiLinux, SiNeovim, SiPhp, SiPython, SiReact, SiRust, SiSymfony, SiTailwindcss, SiTauri, SiTypescript, SiUnity } from "react-icons/si";
import { Tabs, type Tab } from "./UI/Tabs";

interface Skill {
    name: string | JSX.Element,
    icon: JSX.Element
}

interface SkillTab {
    title: string,
    desc?: string,
    skills: Skill[]
}

const skillTabs: SkillTab[] = [
    {
        title: "Programming",
        desc: `
            Languages I had some kind of experience with.
            Not all of them I mastered (practice makes perfect)
        `,
        skills: [
            {
                name: "Rust",
                icon: <SiRust size={30} />
            },
            {
                name: "PHP",
                icon: <SiPhp size={30} />
            },
            {
                name: "TypeScript/JavaScript",
                icon: <SiTypescript size={30} />
            },
            {
                name: <span className="gap-1 flex items-center">
                    <span>C#</span>
                    <span
                        className="text-foreground/50 text-lg">
                        (.net)
                    </span>
                </span>,
                icon: <SiDotnet size={30} />
            },
            {
                name: "Python",
                icon: <SiPython size={30} />
            },
            {
                name: <span className="gap-1 flex items-center">
                    SQL
                    <span
                        className="text-foreground/50 text-lg">
                        (mainly Postgres, but also Mysql and Oracle DB)
                    </span>
                </span>,
                icon: <BiLogoPostgresql size={30} />
            },
            /*             {
                            name: <span className="gap-1 flex">
                                Lua
                                <span
                                    className="text-foreground/50 text-lg">
                                    (just for silly things)
                                </span>
                            </span>,
                            icon: <SiLua size={30} />
                        }, */
        ]
    },
    {
        title: "Frameworks",
        skills: [
            {
                name: "React",
                icon: <SiReact size={30} />
            },
            {
                name: "Next.js",
                icon: <RiNextjsLine size={30} />
            },
            {
                name: "Laravel",
                icon: <SiLaravel size={30} />
            },
            {
                name: "Symfony",
                icon: <SiSymfony size={30} />
            },
            {
                name: "Tailwind",
                icon: <SiTailwindcss size={30} />
            },
            {
                name: "Unity",
                icon: <SiUnity size={30} />
            },
            {
                name: "Wordpress",
                icon: <FaWordpress size={30} />
            },
            {
                name: "Tauri",
                icon: <SiTauri size={30} />
            },
        ]
    },
    {
        title: "Tools",
        desc: "Tools I like to use",
        skills: [
            {
                name: <span className="gap-1 flex group">
                    Linux
                    <span
                        className="opacity-0 
                        duration-300
                        text-foreground/50 text-lg
                        group-hover:opacity-100">
                        (I use Arch btw)
                    </span>
                </span>,
                icon: <SiLinux size={30} />
            },
            {
                name: "Neovim",
                icon: <SiNeovim size={30} />
            },
            {
                name: "Git",
                icon: <SiGit size={30} />
            },
            {
                name: "Docker",
                icon: <SiDocker size={30} />
            },
            {
                name: "Bun",
                icon: <SiBun size={30} />
            },
            {
                name: "Github",
                icon: <FaGithub size={30} />
            },
        ]
    },
    {
        title: "Creative/Office",
        desc: `I (had to) learn some other 
        software things that aren't typically 
        connected with SW development`,
        skills: [
            {
                name: "Microsoft Office",
                icon: <IconBrandOffice size={30} />
            },
            {
                name: <span className="gap-1 flex" >
                    Adobe products
                    < span
                        className="text-foreground/50 text-lg" >
                        (Photoshop, Illustrator, Premiere)
                    </span >
                </span >,
                icon: <IconBrandAdobe size={30} />
            },
            {
                name: "Figma",
                icon: <IconBrandFigma size={30} />
            },
            {
                name: "Blender",
                icon: <SiBlender size={30} />
            },
            {
                name: "Autodesk Maya",
                icon: <SiAutodeskmaya size={30} />
            },
            {
                name: "Cinema 4D",
                icon: <SiCinema4D size={30} />
            },
        ]
    }
];

export const Skills = () => {
    const transformedTabs: Tab[] = skillTabs.map((tab) => ({
        title: tab.title,
        value: tab.title.toLowerCase().replace(/\s+/g, '-'),
        content: (
            <div className="flex flex-col gap-4 p-4">
                {tab.desc && <p className="text-foreground/50 mt-2">{tab.desc}</p>}
                <div className="flex flex-col gap-3 mt-3">
                    {tab.skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex 
                            gap-2 
                            items-center text-xl">
                            {skill.icon}
                            {skill.name}
                        </div>
                    ))}
                </div>
            </div>
        ),
    }));

    return (
        <div className="flex 
        flex-col items-center
        min-h-250">
            <h2 className="text-5xl font-semibold">Skills</h2>
            <div className="flex flex-col gap-16 max-w-4xl w-full">
                <Tabs tabs={transformedTabs} />
            </div>
        </div>
    );
};
