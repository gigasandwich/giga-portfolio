"use client";

import SpecialtyComponent, { Specialty } from "@/app/components/SpecialtyComponent";
import WhatIDoSuperComponent from "@/app/components/WhatIDoSuperComponent";
import { ReactNode, useState } from "react";
import { Smartphone, Server, Monitor, Bug, ChevronLeft, ChevronRight } from "lucide-react";
import { cardBorderColor } from "@/data/constants";

/**
 * This component should be the one that shows up last
 */
export default function MySpecialties() {
    const specialties: Specialty[] = [
        { specialty: "Mobile development", details: "I particulary enjoy this kind of development more than others, so feel free to contact me about it.", icon: <Smartphone size={48} />, },
        { specialty: "Backend development", details: "With how AI is everywhere, I can help with cleaning the mess it has caused or you can ask me to carefully use it to develop your application.", icon: <Server size={48} />, },
        { specialty: "Frontend development", details: "As you can see from this portfolio, I can manage myself quite a bit with applying my frontend knowledge from designs.", icon: <Monitor size={48} />, },
        { specialty: "Bug solving", details: "Solving bug might be troublesome for most person, but not for me I guess.", icon: <Bug size={48} />, },
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

    // const additionalCardClasses = "bg-blue-500";

    const additionalStyleMain = {
        borderWidth: "medium",
        borderColor: cardBorderColor,
    };

    const additionalStyleSelected = {
        borderLeftWidth: "6px",
        borderLeftColor: cardBorderColor,
    };

    const children: ReactNode = (
        <div>
            <div style={additionalStyleMain} className={`relative md:left-16 lg:right-32 
                                                        w-full max-w-full h-full md:w-96 md:h-48
                                                         grid grid-rows-2 grid-cols-2 
                                                         py-6 px-2 
                                                         rounded-2xl gap-5`}>
                {specialties.map((specialty, i) => {
                    return (
                        <div key={i} onClick={() => select(i)}>
                            <SpecialtyComponent key={i} specialty={specialty.specialty} icon={specialty.icon} details={specialty.details}></SpecialtyComponent>
                        </div>
                    )
                })}
            </div>

            {/* This should transition unless the user hovers over */}
            <div style={additionalStyleSelected} className={`w-full max-w-81 h-48 md:w-96 md:h-48 
                                                            mt-8 px-8 py-4 
                                                            grid grid-cols-4 grid-rows-1`}>
                <div className="col-span-1">
                    {chosenSpecialty.icon}
                </div>
                <div className="col-span-3 grid grid-rows-6">
                    <div className="row-span-4">
                        <h3 className="text-base font-bold">{chosenSpecialty.specialty}</h3>
                        <p className="text-sm">{chosenSpecialty.details}</p>
                    </div>

                    <div className="mt-6 flex justify-between row-span-2">
                        <a href="#" onClick={previous}><ChevronLeft size={32} /></a>
                        <a href="#" onClick={next}><ChevronRight size={32} /></a>
                    </div>
                </div>
            </div>
        </div>
    );

    return <WhatIDoSuperComponent title={"What I do"} children={children} ></WhatIDoSuperComponent>
}