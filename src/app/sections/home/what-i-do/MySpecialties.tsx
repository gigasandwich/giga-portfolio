import SpecialtyComponent, { Specialty } from "@/app/components/SpecialtyComponent";
import ViewAllOfMyProjects from "../../../components/ViewAllOfMyProjects";
import WhatIDo from "./WhatIDo";
import { ReactNode } from "react";

/**
 * This component should be the one that shows up last
 */
export default function MySpecialties() {
    const specialties: Specialty[] = [
        { specialty: "Mobile development", details: "I particulary enjoy this kind of development more than others, so feel free to contact me about it", iconLink: "/assets/next/globe.svg", },
        { specialty: "Backend development", details: "With how AI is everywhere, I can help with cleaning the mess it has caused or you can ask me to carefully use it to develop your application", iconLink: "/assets/next/globe.svg", },
        { specialty: "Frontend development", details: "As you can see from this portfolio, I can manage myself quit a bit with applying my frontend knowledge from designs", iconLink: "/assets/next/globe.svg", },
    ];
    
    const children: ReactNode[] = specialties.map((specialty, index) => {
        return <SpecialtyComponent key={index} specialty={specialty.specialty} iconLink={specialty.iconLink} details={specialty.details}></SpecialtyComponent>
    });

    return <WhatIDo title={"What I do"} children={children} ></WhatIDo>
}