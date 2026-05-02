import PersonCard from "@/components/PersonCard";
import { ExperienceType } from "./Main";

const founders = [
    { name: "Eskimo", role: "Co-Founder", twitter: "EskimoSSB", image: "https://okizeme.gg/_next/image?url=%2Fassets%2Fimages%2FprofilePicture%2Freina%2Freina-profile12.png&w=128&q=75" },
    { name: "Sehkiro", role: "Co-Founder", twitter: "Sehkiro7", image: "https://okizeme.gg/_next/image?url=%2Fassets%2Fimages%2FprofilePicture%2Fhwoarang%2Fhwoarang-profile8.png&w=128&q=75" },
    { name: "Mocha Unicorn", role: "UX/UI Researcher", twitter: "@Mocha__Unicorn", image: "https://okizeme.gg/_next/image?url=%2Fassets%2Fimages%2FprofilePicture%2Fkazuya%2Fkazuya-profile11.png&w=128&q=75" },
];

const Okizeme: ExperienceType = {
    title: "Contributor",
    meta: "okizeme.gg",
    start: new Date(2026, 4, 1),
    end: null,
    icon: "fa-users",
    description: (
        <div>
            <div>
                <h3 className="text-white/90 mb-1">Responsibility</h3>
                <p className="text-white">Contributing to <a href="https://okizeme.gg">okizeme.gg</a> through assigned data tasks.</p>
            </div>

            <div className="mt-6">
                <h3 className="text-white/90 mb-1">Impact</h3>
                <p>
                    <ul>
                        <li>Improvement of the site content accuracy and relevance</li>
                    </ul>
                </p>
            </div>

            <div className="mt-6">
                <h3 className="text-white/90 mt-4 mb-2">Meet the Founders</h3>
                <div className="flex gap-3 overflow-x-auto pb-1 thin-scrollbar">
                    {founders.map((f, i) => (
                        <div key={i} className="min-w-[200px] sm:min-w-[220px]">
                            <PersonCard person={f} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ),
};

export default Okizeme;
