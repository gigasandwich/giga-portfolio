import { ReactNode } from "react";
import CtaIconComponent from "./images/CTAIconComponent";

type WhatIDoProps = {
    title: string,
    children: ReactNode,
};

/**
 * This will serve as the default template of the "What I do" part of the "About me" section
 */
export default function WhatIDoComponent({ title, children }: WhatIDoProps) {

    // Used grid display here to make the two components (MyLatestProjects and MySpecialties) have the same layout emplacement
    return (
        <div className="relative px-16 grid grid-rows-6 grid-cols-1">
            <h1 className="text-4xl font-bold mb-4 row-span-1">{title}</h1>

            <div className="row-span-4">
                {children}
            </div>

            <div className="mt-8 row-span-1">
                <hr />

                <div className="mt-5 flex gap-6 items-center">
                    <h2 className="uppercase">View all of my projects</h2>
                    <a href=""><CtaIconComponent src={"/assets/icons/down.svg"} alt={""}></CtaIconComponent></a>
                </div>
            </div>
        </div>
    );
}