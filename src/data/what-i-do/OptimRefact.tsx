export type WhatIDoType = {
    title: string;
    icon: string;
    description: React.ReactNode;
};

const whatIDoData: WhatIDoType = {
    title: "Application Optimization & Refactor",
    icon: "fa-screwdriver-wrench",
    description: (
        <div className="space-y-8">
            <div className="flex flex-col gap-2">
                <p className="text-xl text-white/95">
                    Again, applying the same patterns from the <span className="text-secondary font-bold underline decoration-secondary/30 underline-offset-4 decoration-2 italic">Object-Oriented Development with Database design</span> section.
                </p>
                <p className="">
                    Implementing patterns at the first try, but always leaving room for measurable improvements.
                </p>
            </div>
            
            <div className="flex items-center gap-4 py-3 border-t border-b border-white/5 text-sm text-white/50 italic">
                <i className="fas fa-quote-left text-primary/30 text-xs"></i>
                <span>"A module should be open for extension but closed for modification"</span> - <span className="font-bold">Bertrand Meyer</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-primary/40 transition-all">
                    <div className="text-primary mb-4">
                        <i className="fas fa-code-branch text-2xl"></i>
                    </div>
                    <h3 className="font-bold text-white mb-2 uppercase tracking-wide">Refactoring</h3>
                    <p className="text-white/60 text-sm leading-relaxed">Ameliorating existing codebases using cleaner code structure (legacy or not).</p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-secondary/40 transition-all">
                    <div className="text-secondary mb-4">
                        <i className="fas fa-microchip text-2xl"></i>
                    </div>
                    <h3 className="font-bold text-white mb-2 uppercase tracking-wide">Optimization</h3>
                    <p className="text-white/60 text-sm leading-relaxed">Again using SOLID, while the goal is to improve scalability. </p>
                </div>
            </div>
        </div>
    ),
};

export default whatIDoData;