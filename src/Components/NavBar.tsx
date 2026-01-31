interface NavBarProps {
    className?: string;
    children?: React.ReactNode;
}

export const NavBar = ({ className, children }: NavBarProps) => {
    return (
        <nav className={`${className} 
            sticky top-2 opacity-50 
            duration-500
            hover:duration-300
            w-fit
            z-50
            hover:opacity-100`}>
            {children ||
                <button
                    className="m-3 
                        p-2 pl-4 pr-4
                        cursor-pointer
                        rounded-full 
                        dark:text-foreground
                        text-background 
                        bg-main"
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                >Kynčl
                </button>
            }
        </nav>
    );
};
