import { ExperienceType } from "./Main";

const TeamLead: ExperienceType = {
    title: "Team Lead - School Project: Beekeeping Management App",
    meta: "ITU",
    start: new Date(2025, 5, 1),
    end: new Date(2025, 6, 1),
    icon: "fa-users",
    description: (
        <div>
            <h2 className="text-white">Led a team of 10 developers</h2>
            <ul className="list-disc pl-5 text-white/80">
                <li>Established best practices for <strong>domain documentation</strong></li>
                <li>Built skills in <strong>collaboration and communication</strong></li>
            </ul>
        </div>
    ),
};

export default TeamLead;
