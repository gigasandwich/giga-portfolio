export type WhatIDoType = {
    title: string;
    icon: string;
    description: React.ReactNode;
};

const whatIDoData: WhatIDoType = {
    title: "Application Optimization & Refactor",
    icon: "fa-screwdriver-wrench",
    description: (
        <div>
            <p>Again, applying the same patterns from the <code>Object-Oriented Development with Database design</code> section.</p>
            
            <p className="mt-2">Meaning I always try to implement those at first try and still <i>refactor/optimize</i> later.</p>

            <p className="mt-2">In case it is not my project, I still apply these (if asked) to ameliorate the existing codebase.</p>
        </div>
    ),
};

export default whatIDoData;