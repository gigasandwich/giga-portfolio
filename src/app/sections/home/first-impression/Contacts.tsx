import ContactComponent, { Contact, GithubContact } from "@/app/components/images/ContactComponent";
import { Linkedin, Twitter, Mail } from "lucide-react";

export function Contacts() {
    const contacts: Contact[] = [
        new GithubContact("https://github.com/gigasandwich"),
        { name: "LinkedIn", url: "https://www.linkedin.com/in/yvan-noah-rabetokotany-3450543aa/", icon: <Linkedin size={48} /> },
        { name: "X", url: "https://x.com/gigasandwich", icon: <Twitter size={48} /> },
        { name: "Email", url: "mailto:yvannandy@gmail.com", icon: <Mail size={48} /> },
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