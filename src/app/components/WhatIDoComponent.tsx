"use client";

import { ReactNode } from "react";
import CtaIconComponent from "./images/CTAIconComponent";
import Center from "./Center";
import ButtonOutline from "./buttons/ButtonOutline";

type WhatIDoProps = {
    title: string,
    children: ReactNode,
};

/**
 * This will serve as the default template of the "What I do" part of the "About me" section
 */
export default function WhatIDoComponent({ title, children }: WhatIDoProps) {

    // Used grid display here to make the two components (MyLatestProjects and MySpecialties) have the same layout emplacement
    const color = "gray";
    return (
        <div className="sm:flex sm:items-center sm:justify-center">
            <div className="relative px-16 grid grid-rows-12 grid-cols-1">
                <h1 className="text-4xl font-bold mb-4 row-span-2">{title}</h1>

                <div className="row-span-6">
                    {children}
                </div>

                <div className="row-span-1">
                    <div className="mt-4">
                        <Center>
                            <ButtonOutline color="blue">
                                <div className="flex gap-6 items-center">
                                    <h2 className="uppercase font-semibold">View all of my projects</h2>
                                    <a href=""><CtaIconComponent src={"/assets/icons/down.svg"} alt={""}></CtaIconComponent></a>
                                </div>
                            </ButtonOutline>
                        </Center>
                    </div>
                </div>
            </div>
        </div>
    );
}