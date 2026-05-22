import { ExperienceType } from "./Main";
import PersonCard from "../../components/PersonCard";

const HIUStaff: ExperienceType = {
    title: "HIU staff",
    meta: "Techzara",
    start: new Date(2026, 4, 9),
    end: new Date(2026, 4, 10),
    icon: "fa-users",
    description: (
        <div className="space-y-4">
            <p className="text-white/80">Over those two days, us staff contributed to make this edition <b>incredible</b> - both in terms of <b>challenges and organization</b>.</p>

            <div className="mt-6">
                <h3 className="text-white/90 mt-4 mb-2">Meet the main organizers</h3>
                <div className="flex justify-between items-center w-full gap-3 overflow-x-auto pb-2 px-4 thin-scrollbar">
                    <div className="min-w-[260px] flex-1 max-w-[48%]">
                        <PersonCard 
                            person={{
                                name: "Techzara Madagascar",
                                role: "Association of Tech Passionates",
                                image: "https://media.licdn.com/dms/image/v2/C4E0BAQEsAPE8KZifig/company-logo_200_200/company-logo_200_200/0/1678978500303?e=1781136000&v=beta&t=P4vS6UKjeNHO_VySh0dfdN6etOfBwfOryEOq2yvZqbA",
                                linkedin: "https://www.linkedin.com/company/techzara-madagascar/",
                                facebook: "https://web.facebook.com/Techzara",
                                website: "https://techzara.org/"
                            }}
                        />
                    </div>
                    <div className="min-w-[260px] flex-1 max-w-[48%] flex justify-end">
                        <PersonCard 
                            person={{
                                name: "Orange Madagascar",
                                role: "Telecommunications & Digital",
                                image: "https://media.licdn.com/dms/image/v2/C4D0BAQFdTvHTRCadAQ/company-logo_200_200/company-logo_200_200/0/1630483575206/orange_madagascar_logo?e=1781136000&v=beta&t=HNC9M9R5P7RZH0IAdoKYBbdYvMUHC-ex8X-J0-qLev0",
                                linkedin: "https://www.linkedin.com/company/orange-madagascar/"
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-6">
                <img 
                    src="https://media.licdn.com/dms/image/v2/D4D22AQFV0xn1V8N_dw/feedshare-shrink_1280/B4DZ4cLgA6KwAM-/0/1778589237734?e=1781136000&v=beta&t=NPxqu7z3enseotR9Lqr5jb0GLB1QH2HhRDtpiKBlGZ8" 
                    alt="HIU staff" 
                    className="w-full sm:w-3/4 rounded" 
                />
            </div>
        </div>
    ),
};

export default HIUStaff;
