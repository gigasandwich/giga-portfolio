import SpecialtyComponent, { Specialty } from "@/app/components/SpecialtyComponent";
import WhatIDoComponent from "../../../components/WhatIDoComponent";
import { ReactNode } from "react";
import CtaIconComponent from "@/app/components/images/CTAIconComponent";

/**
 * This component should be the one that shows up last
 */
export default function MySpecialties() {
    const specialties: Specialty[] = [
        { specialty: "Mobile development", details: "I particulary enjoy this kind of development more than others, so feel free to contact me about it.", iconLink: "/assets/next/globe.svg", },
        { specialty: "Backend development", details: "With how AI is everywhere, I can help with cleaning the mess it has caused or you can ask me to carefully use it to develop your application.", iconLink: "/assets/next/globe.svg", },
        { specialty: "Frontend development", details: "As you can see from this portfolio, I can manage myself quit a bit with applying my frontend knowledge from designs.", iconLink: "/assets/next/globe.svg", },
    ];

    const chosenSpecialty = specialties[0];

    const children: ReactNode = (
        <div>
            <div className="relative right-32 flex justify-between flex-wrap gap-3 py-6 px-3 w-96 h-48 rounded-2xl bg-cyan-950">
                {specialties.map((specialty, index) => {
                    return (
                        <SpecialtyComponent key={index} specialty={specialty.specialty} iconLink={specialty.iconLink} details={specialty.details}></SpecialtyComponent>
                    )
                })}
            </div>

            {/* This should transition unless the user hovers over */}
            <div className="w-96 h-48 rounded-2xl mt-4 px-8 py-4 grid grid-cols-4 grid-rows-1 bg-cyan-950">
                <div className="col-span-1">
                    <CtaIconComponent src={chosenSpecialty.iconLink} alt="" />
                </div>
                <div className="col-span-3">
                    <h3 className="text-base font-bold">{chosenSpecialty.specialty}</h3>
                    <p className="text-sm">{chosenSpecialty.details}</p>
                </div>
            </div>
        </div>
    );

    return <WhatIDoComponent title={"What I do"} children={children} ></WhatIDoComponent>
}