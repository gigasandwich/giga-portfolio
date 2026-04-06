import CardlikeButton from "@/components/CardlikeButton";
export type WhatIDoType = {
    title: string;
    icon: string;
    description: React.ReactNode;
};

const goodPractices: string[]= [
    "Step by step conception",
    "SOLID principle",
    "Design patterns",
    "Refactoring",
];

const whatIDoData: WhatIDoType = {
    title: "Object-Oriented Development with Database design",
    icon: "fa-cubes",
    description: (
        <div className="space-y-8">
            <div className="flex flex-col gap-2">
                <p className="text-xl text-white/90">I build systems on top of solid foundations by following proven <span className="text-primary font-bold italic">patterns</span> and <span className="text-primary font-bold italic">good practices</span>.</p>
                <div className="h-1 w-20 bg-primary/30 rounded-full mt-2"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                {
                    goodPractices.map((gp, i) => {
                        return (
                            <div key={i} className="group relative flex items-center p-4 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300">
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
                                <div className="flex items-center gap-3 relative z-10 w-full">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                                    <span className="font-medium text-white/80 group-hover:text-white transition-colors">{gp}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="mt-6 p-4 border-l-2 border-primary/20 bg-primary/5 italic text-white/60 text-sm">
                Focusing on maintainable and easily upgradable architectures for your system.
            </div>
        </div>
    ),
};

export default whatIDoData;