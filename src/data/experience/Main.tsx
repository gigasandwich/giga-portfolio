import Hackathon from "./Hackathon";
import Okizeme from "./Okizeme";
import TeamLead from "./TeamLead";
import HIUStaff from "./HIUStaff";

export type ExperienceType = {
    title: string;
    start: Date;
    end?: Date | null;
    meta?: string | null; // Like location
    icon?: string;
    description: React.ReactNode;
    default?: boolean;
};

const experienceData: ExperienceType[] = [];
experienceData.push({
    title: "Available Now",
    meta: null,
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

experienceData.push(TeamLead);
experienceData.push(Hackathon);
experienceData.push(Okizeme);
experienceData.push(HIUStaff);

// Newest first
experienceData.sort((a, b) => b.start.getTime() - a.start.getTime());

const defaultIdx = experienceData.findIndex((e) => e.default);
export const defaultExperienceIndex = defaultIdx === -1 ? 1 : defaultIdx;

export default experienceData;