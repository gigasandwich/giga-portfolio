import hackathon from "./Hackathon";
import teamLead from "./TeamLead";

export type ExperienceType = {
    title: string;
    start: Date;
    end?: Date | null;
    meta?: string; // Like location
    icon?: string;
    description: React.ReactNode;
};

const experienceData: ExperienceType[] = [];
experienceData.push({
    title: "Available Now",
    meta: "Giga corp",
    start: new Date(),
    end: null,
    icon: "fa-briefcase",
    description: (
        <span>
            Your project could be the next step here,
            <a href="mailto:contact@yvannandy@gmail.com" className="underline ml-0.5">contact me</a>
        </span>
    )
});

for (let i = 0; i < 3; i++) {
experienceData.push(hackathon);
experienceData.push(teamLead);
}
// Newest first
experienceData.sort((a, b) => b.start.getTime() - a.start.getTime());

export default experienceData;