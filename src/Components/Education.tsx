import { Timeline } from "./UI/Timeline";

interface EducationProps {
    className?: string;
    children?: React.ReactNode;
}

export const Education = ({ className, children }: EducationProps) => {
    return (
        <div className={className}>
            {children ||
                <div className="min-h-screen flex flex-col items-center">
                    <h2 className="text-5xl font-semibold">Education</h2>
                    <TimelineDemo />
                </div>
            }
        </div>
    );
};

export function TimelineDemo() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const data = [
        {
            title: "2022",
            content: (
                <div>
                    <h3 className="text-3xl mb-3">SPŠ na Proseku</h3>
                    <span className="text-foreground/50 text-lg">From 2022 to now (4 years)</span>
                    <p className="mb-8 text-xl font-normal text-neutral-800 dark:text-neutral-200">
                        I am currently studying at
                        Střední průmyslová škola na Proseku,
                        specializing in App Development.
                    </p>
                </div>
            ),
        },
        {
            title: `${currentYear}`,
            content: (
                <div>
                    <p className="mb-8 text-xl font-normal text-neutral-800 dark:text-neutral-200">
                        I am currently preparing for my final high school
                        exams while getting ready for
                        my upcoming college years.
                        Additionally,
                        I am seeking an internship
                        where I can apply
                        my knowledge and learn
                        new skills in a professional environment.
                    </p>
                </div>
            ),
        },
        {
            title: "Other",
            content: (
                <div>
                    <p className="mb-8 text-xl font-normal text-neutral-800 dark:text-neutral-200">
                        Here is an overview of skills I have
                        acquired throughout my studies.
                    </p>
                    <h3 className="text-3xl mb-3">Languages</h3>
                    <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
                        <table className="w-full text-left border-collapse bg-white dark:bg-neutral-950">
                            <thead>
                                <tr className="bg-neutral-50 dark:bg-neutral-900/50">
                                    <th className="p-4 font-semibold text-sm text-neutral-700 dark:text-neutral-300">Language</th>
                                    <th className="p-4 font-semibold text-sm text-neutral-700 dark:text-neutral-300">Listening</th>
                                    <th className="p-4 font-semibold text-sm text-neutral-700 dark:text-neutral-300">Reading</th>
                                    <th className="p-4 font-semibold text-sm text-neutral-700 dark:text-neutral-300">Writing</th>
                                    <th className="p-4 font-semibold text-sm text-neutral-700 dark:text-neutral-300">Speaking</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                                <tr className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30 transition-colors">
                                    <td className="p-4 font-bold text-neutral-900 dark:text-white">Czech</td>
                                    <td colSpan={4} className="p-4 text-center">
                                        <span className="text-xs font-black uppercase tracking-[0.2em]">
                                            Native Speaker
                                        </span>
                                    </td>
                                </tr>
                                <tr className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30 transition-colors">
                                    <td className="p-4 font-bold text-neutral-900 dark:text-white">English</td>
                                    <td className="p-4 text-neutral-600 dark:text-neutral-400">C1</td>
                                    <td className="p-4 text-neutral-600 dark:text-neutral-400">C1</td>
                                    <td className="p-4 text-neutral-600 dark:text-neutral-400">B2</td>
                                    <td className="p-4 text-neutral-600 dark:text-neutral-400">B1</td>
                                </tr>
                                <tr className="hover:bg-neutral-50/50 dark:hover:bg-neutral-900/30 transition-colors">
                                    <td className="p-4 font-bold text-neutral-900 dark:text-white">German</td>
                                    <td className="p-4 text-neutral-600 dark:text-neutral-400">A1</td>
                                    <td className="p-4 text-neutral-600 dark:text-neutral-400">A2</td>
                                    <td className="p-4 text-neutral-600 dark:text-neutral-400">A1</td>
                                    <td className="p-4 text-neutral-600 dark:text-neutral-400">A1</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="text-foreground/70 ml-6 py-4">
                            <p>A1/A2: Beginner</p>
                            <p>B1/B2: Intermediate</p>
                            <p>C1/C2: Advanced</p>
                        </div>
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    );
}

