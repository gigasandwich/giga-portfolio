import ContactComponent, { Contact, GithubContact } from "@/app/components/images/ContactComponent";
import { ReactNode } from "react";
import WhatIDoComponent from "../../../components/WhatIDoComponent";
import RoundedImageComponent from "@/app/components/images/RoundedImageComponent";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Project = {
    title: string,
    description: string,
    contacts: Contact[],
};

/**
 * This component should be the one that shows up first
 */
export default function MyLatestProjects() {
    const latestProjectDescription = `
        This application is used to preserve the health of one person (you, somebody close) or a group of person (maybe your family, your group of friends, ...). 
        So you can prevent the diseases later.
    `;

    const latestProject: Project = {
        title: "Salama e",
        description: latestProjectDescription,
        contacts: [
            new GithubContact("https://gigasandwich/salama-e")
        ],
    }

    const children: ReactNode = (
        <div>
            <div className="relative lg:right-32"><RoundedImageComponent src="/assets/images/dummy-project.png" alt=""></RoundedImageComponent></div>

            <div className="mt-6">
                <h1 className="text-2xl uppercase font-semibold">{latestProject.title}</h1>
                <p className="mt-2">{latestProject.description}</p>
            </div>

            <div className="mt-4 flex gap-[100px]">
                {/* TODO: find a way to make the project structure clean while using compontents here */}
                {/* 
                <IconComponent src={"/assets/icons/left.svg"} alt={""}></IconComponent>
                <IconComponent src={"/assets/icons/right.svg"} alt={""}></IconComponent> 
                */}

                <a href="#"><ChevronLeft size={32} /></a>
                <a href="#"><ChevronRight size={32} /></a>
            </div>
        </div>
    );

    return <WhatIDoComponent title={"My latest projects"} children={children}></WhatIDoComponent>
}