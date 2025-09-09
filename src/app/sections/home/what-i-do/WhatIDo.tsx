import ViewAllOfMyProjects from "@/app/components/ViewAllOfMyProjects";
import { ReactNode } from "react";

type WhatIDoProps = {
    title: string,
    children: ReactNode,
};

/**
 * This will serve as the default template of the "What I do" part of the "About me" section
 */
export default function WhatIDo({ title, children }: WhatIDoProps) {

    return (
        <div>
            <h1>{title}</h1>

            <div>
                {children}
            </div>

            <ViewAllOfMyProjects />
        </div>
    );
}