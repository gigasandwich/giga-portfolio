import { ExperienceType } from "./Main";
import BackgroundlessButton from "@/components/BackgroundlessButton";
import PersonCard from "@/components/PersonCard";

const techStack = ["Spring Boot", "Next.js", "PostGIS", "OpenStreetMap"];

/*
    I wrote these hand by hand (checking on phone) 
    because I had no connection while writing this code
    This shows how much I love you guys :P
*/
const teammates = [
    { name: "Ny Aina Mickael", linkedin: "https://www.linkedin.com/in/ny-aina-mickael-andrianarivelo-152514355", github: "https://github.com/NyAinaMickael" },
    { name: "Nathan Lovaniaina", linkedin: "https://www.linkedin.com/in/lovaniaina-nathan-andriamarozaka-092653365", github: "https://github.com/Nathanlovaniaina" },
    { name: "Mamisoa Laurent", linkedin: "https://www.linkedin.com/in/laurent-mamisoa-341584290", github: "https://github.com/Laurent-create" },
];

const Hackathon: ExperienceType = {
    title: "Hackathon: Ethical & Sustainable Fashion Program",
    meta: "IFM / Passion for Humanity",
    start: new Date(2025, 7, 1),
    end: new Date(2025, 10, 1),
    icon: "fa-flag",
    description: (
        <div className="space-y-3">
            <div className="">
                <h4 className="text-xl font-bold text-white/90 mb-1">Placement</h4>
                <div className="flex gap-3">
                    <span className="font-light">finalist among 15+ teams</span>
                </div>
            </div>

            <div className="mt-3">
                <h4 className="text-xl font-bold text-white/90 mt-4 mb-1">Team</h4>
                <div className="flex gap-3">
                    {teammates.map((t) => (
                        <PersonCard key={t.name} person={t} />
                    ))}
                </div>
            </div>

            <div className="mt-3">
                <h4 className="text-xl font-bold text-white/90 mt-4 mb-1">Stack</h4>
                <div className="flex gap-3">
                    {techStack.map((tech) => (
                    <BackgroundlessButton key={tech} content={tech} />
                ))}
                </div>
            </div>
            
            <p>
                Built a <strong>concrete solution</strong> focused on ethical and eco-responsible fashion. 
            </p>
        </div>
    ),
};

export default Hackathon;
