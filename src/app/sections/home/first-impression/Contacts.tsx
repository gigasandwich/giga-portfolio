import ContactComponent, { Contact, GithubContact } from "@/app/components/images/ContactComponent";
import { Linkedin, Twitter } from "lucide-react";

export function Contacts() {
    const contacts: Contact[] = [
        new GithubContact("https://github.com/gigasandwich"),
        { name: "LinkedIn", url: "https://github.com/gigasandwich", icon: <Linkedin size={48} /> },
        { name: "X", url: "https://github.com/gigasandwich", icon: <Twitter size={48} /> },
        // { name: "Facebook", url: "https://github.com/gigasandwich", iconLink: "/assets/brands/github-icon.svg" },
    ];

    return (
        <div className="flex flex-wrap justify-evenly">
            {
                contacts.map((contact: Contact, index: number) => {
                    return (
                        <ContactComponent key={index} name={contact.name} url={contact.url} icon={contact.icon}></ContactComponent>
                    );
                })
            }
        </div>
    );
}