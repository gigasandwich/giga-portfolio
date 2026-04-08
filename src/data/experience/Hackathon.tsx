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
    { name: "Ny Aina Mickael", linkedin: "https://www.linkedin.com/in/ny-aina-mickael-andrianarivelo-152514355", github: "https://github.com/NyAinaMickael", image: "https://avatars.githubusercontent.com/u/192534594?v=4" },
    { name: "Nathan Lovaniaina", linkedin: "https://www.linkedin.com/in/lovaniaina-nathan-andriamarozaka-092653365", github: "https://github.com/Nathanlovaniaina", image: "https://avatars.githubusercontent.com/u/142962456?v=4" },
    { name: "Mamisoa Laurent", linkedin: "https://www.linkedin.com/in/laurent-mamisoa-341584290", github: "https://github.com/Laurent-create", image: "https://avatars.githubusercontent.com/u/188788184?v=4" },
];

const Hackathon: ExperienceType = {
    title: "Hackathon: Ethical & Sustainable Fashion Program",
    meta: "IFM / Passion for Humanity",
    start: new Date(2025, 7, 1),
    end: new Date(2025, 10, 1),
    icon: "fa-flag",
    description: (
        <div className="space-y-3">
            <div>
                <h2 className="text-white/90 mb-1">Placement</h2>
                <div className="flex gap-3">
                    <p className="font-light text-white/80">finalist among 15+ teams</p>
                </div>
            </div>

            <div className="mt-3">
                <h2 className="text-white/90 mt-4 mb-2">Team</h2>
                <div className="flex gap-3 overflow-x-auto pb-1 thin-scrollbar">
                    {teammates.map((t) => (
                        <div key={t.name} className="min-w-[200px] sm:min-w-[220px]">
                            <PersonCard person={t} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-3">
                <h2 className="text-white/90 mt-4 mb-2">Stack</h2>
                <div className="flex gap-2 flex-wrap sm:flex-nowrap overflow-x-auto pb-1 thin-scrollbar">
                    {techStack.map((tech) => (
                        <div key={tech} className="shrink-0">
                            <BackgroundlessButton content={tech} />
                        </div>
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
