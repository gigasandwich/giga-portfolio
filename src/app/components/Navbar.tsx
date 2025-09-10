import Center from "./Center";

const links = [
    {
        label: "Home",
        url: "#",
        iconLink: "",
    },
    {
        label: "Projects",
        url: "#",
        iconLink: "",
    },
    {
        label: "Skills",
        url: "#",
        iconLink: "",
    },
    {
        label: "Parkour",
        url: "#",
        iconLink: "",
    },
    {
        label: "Contact",
        url: "#",
        iconLink: "",
    },];
export default function Navbar() {
    return (
        <nav className="fixed py-4 bg-gray-200 text-gray-950 border rounded-2xl">
            <Center>
                <ul className="flex">
                    {
                        links.map((link, index) => {
                            return (
                                <li key={index} className="flex-1 mr-2">
                                    <a href={link.url} className="text-center py-2 px-4">{link.label}</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </Center>
        </nav>
    );
}