"use client";

import SpecialtyComponent, { Specialty } from "@/app/components/SpecialtyComponent";
import WhatIDoComponent from "../../../components/WhatIDoComponent";
import { ReactNode, useState } from "react";
import CtaIconComponent from "@/app/components/images/CTAIconComponent";

/**
 * This component should be the one that shows up last
 */
export default function MySpecialties() {
    const specialties: Specialty[] = [
        { specialty: "Mobile development", details: "I particulary enjoy this kind of development more than others, so feel free to contact me about it.", iconLink: "/assets/next/globe.svg", },
        { specialty: "Backend development", details: "With how AI is everywhere, I can help with cleaning the mess it has caused or you can ask me to carefully use it to develop your application.", iconLink: "/assets/next/globe.svg", },
        { specialty: "Frontend development", details: "As you can see from this portfolio, I can manage myself quite a bit with applying my frontend knowledge from designs.", iconLink: "/assets/next/globe.svg", },
        { specialty: "Bug solver", details: "Solving bug might be troublesome for most person, but not for me I guess.", iconLink: "/assets/next/globe.svg", },
    ];

    // ...
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1, 1
    const chosenSpecialty = specialties[index];
    function next() {
        setDirection(1);
        setIndex((prev) => (prev + 1) % specialties.length);
    }
    function previous() {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + specialties.length) % specialties.length);
    }
    function select(i: number) {
        setDirection(i > index ? 1 : -1);
        setIndex(i);
    }

    // const backgroundColor = "bg-blue-500";
    const backgroundColor = "bg-main-blue-50";
    const children: ReactNode = (
        <div>
            <div className={`relative md:left-16 lg:right-32 w-81 h-48 md:w-96 md:h-48 grid grid-rows-2 grid-cols-2 py-6 px-2 rounded-2xl ${backgroundColor}`}>
                {specialties.map((specialty, i) => {
                    return (
                        <div key={i} onClick={() => select(i)}>
                            <SpecialtyComponent key={i} specialty={specialty.specialty} iconLink={specialty.iconLink} details={specialty.details}></SpecialtyComponent>
                        </div>
                    )
                })}
            </div>

            {/* This should transition unless the user hovers over */}
            <div className={`w-81 h-48 md:w-96 md:h-48 rounded-2xl mt-4 px-8 py-4 grid grid-cols-4 grid-rows-1 ${backgroundColor}`}>
                <div className="col-span-1">
                    <CtaIconComponent src={chosenSpecialty.iconLink} alt="" />
                </div>
                <div className="col-span-3 grid grid-rows-6">
                    <div className="row-span-4">
                        <h3 className="text-base font-bold">{chosenSpecialty.specialty}</h3>
                        <p className="text-sm">{chosenSpecialty.details}</p>
                    </div>

                    <div className="flex gap-[100px] row-span-2">
                        <a href="#" onClick={previous}><CtaIconComponent src={"/assets/icons/left.svg"} alt={""}></CtaIconComponent></a>
                        <a href="#" onClick={next}><CtaIconComponent src={"/assets/icons/right.svg"} alt={""}></CtaIconComponent></a>
                    </div>
                </div>
            </div>
        </div>
    );

    return <WhatIDoComponent title={"What I do"} children={children} ></WhatIDoComponent>
}