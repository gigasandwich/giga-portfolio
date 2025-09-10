import ContactComponent, { Contact, GithubContact } from "@/app/components/images/ContactComponent";

export function Contacts() {
    const contacts: Contact[] = [
        new GithubContact("https://github.com/gigasandwich"),
        { name: "Instagram", url: "https://github.com/gigasandwich", iconLink: "/assets/brands/github-icon.svg" },
        { name: "Facebook", url: "https://github.com/gigasandwich", iconLink: "/assets/brands/github-icon.svg" },
    ];

    return (
        <div className="flex justify-evenly">
            {
                contacts.map((contact: Contact, index: number) => {
                    return (
                        <ContactComponent key={index} name={contact.name} url={contact.url} iconLink={contact.iconLink}></ContactComponent>
                    );
                })
            }
        </div>
    );
}