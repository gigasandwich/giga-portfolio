import ContactComponent, { Contact, GithubContact } from "@/app/components/ContactComponent";
import { ReactNode } from "react";
import WhatIDo from "./WhatIDo";

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
    This application is used to **preserve the health** of:
- one person (you, somebody close) 

or 

- a group of person (maybe your family, your group of friends, ...)

by:

- letting you record an event where a disease occurred
- letting you access to a view of *statistics* from the diseases you already input 

**So you can prevent the diseases later**
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
            <div><img src="/assets/images/dummy-project.png" alt="" className="w-2xs h-32" /></div>
            <div>
                <h1>{latestProject.title}</h1>
                <p>{latestProject.description}</p>
            </div>
            <div>
                {
                    latestProject.contacts.map((contact, index) => {
                        return <ContactComponent key={index} name={contact.name} url={contact.url} iconLink={contact.iconLink}></ContactComponent>
                    })
                }
            </div>
        </div>
    );

    return <WhatIDo title={"My latest projects"} children={children}></WhatIDo>
}