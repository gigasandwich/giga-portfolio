import { ExperienceType } from "./Main";

const HIUStaff: ExperienceType = {
    title: "HIU staff",
    meta: "Inter-Universitary Hackathon staff",
    start: new Date(2026, 4, 9),
    end: new Date(2026, 4, 10),
    icon: "fa-users",
    description: (
        <div className="space-y-3">
            <p className="text-white/80">Over those two days, us staff contributed to make this edition <b>incredible</b> - both in terms of <b>challenges and organization</b>.</p>

            <div>
                <img src="https://media.licdn.com/dms/image/v2/D4D22AQFV0xn1V8N_dw/feedshare-shrink_1280/B4DZ4cLgA6KwAM-/0/1778589237734?e=1781136000&v=beta&t=NPxqu7z3enseotR9Lqr5jb0GLB1QH2HhRDtpiKBlGZ8" alt="HIU staff" className="mx-auto rounded" />
            </div>
        </div>
    ),
};

export default HIUStaff;
