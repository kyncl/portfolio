import { NavBar } from "./Components/NavBar";
import { Projects } from "./Components/Projects";
import { Skills } from "./Components/Skills";
import { FloatingDock, type Section } from "./Components/UI/FloatingDock";
import { Welcome } from "./Components/Welcome";
import { useEffect, useRef } from "react";
import { IconApps } from "@tabler/icons-react";
import { BiFolder } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { Footer } from "./Components/Footer";
import { AboutMe } from "./Components/AboutMe";
import { MdOutlineSchool } from "react-icons/md";
import { Education } from "./Components/Education";
import { RiContactsBook2Line } from "react-icons/ri";
import "./style/subtle.css";

export default function App() {
    const sections: Section[] = [
        {
            title: "About me",
            icon: <FiUser />,
            section: <AboutMe />
        },
        {
            title: "Skills",
            icon: <IconApps />,
            section: <Skills />
        },
        {
            title: "Projects",
            icon: <BiFolder />,
            section: <Projects />
        },
        {
            title: "Education",
            icon: <MdOutlineSchool />,
            section: <Education />
        },
        {
            title: "Contantcts",
            icon: <RiContactsBook2Line />,
            section: <Footer />
        }
    ];
    const sectionsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting)
                    entry.target.classList.remove("hide");
                else if (entry.target.classList.contains("subtle-always"))
                    entry.target.classList.add("hide");
            });
        });
        const subtleElems = document.querySelectorAll(".subtle");
        subtleElems.forEach((el) => observer.observe(el));
    }, []);

    return (
        <main>
            <NavBar />
            <Welcome />
            {
                sections.map((section) =>
                    <div
                        ref={(el) => { if (el) sectionsRef.current.push(el) }}
                        key={section.title}
                    >
                        {section.section}
                    </div>
                )
            }
            <FloatingDock
                mobileClassName="fixed right-5 bottom-5"
                desktopClassName="fixed left-1/2 -translate-x-1/2 bottom-5"
                sectionsRef={sectionsRef} items={sections} />
        </main>
    )
}

