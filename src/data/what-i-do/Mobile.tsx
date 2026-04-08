export type WhatIDoType = {
    title: string;
    icon: string;
    description: React.ReactNode;
};

const whatIDoData: WhatIDoType = {
    title: "Hybrid Mobile Application Development",
    icon: "fa-mobile-screen",
    description: (
        <div className="space-y-6">
            <div className="flex flex-col gap-2">
                <h2 className="text-white">Cross-platform mobile</h2>
                <p>I deliver cross-platform mobile solutions while trying to implement good UX <i>(as I am not a specialized designer)</i>, using stacks like <span className="text-primary font-bold">Ionic</span>, <span className="text-primary font-bold">Flutter</span> and similar.</p>
            </div>

            <div>
                <p>My best client in this domain (for now) is my mom, who needs to automate some of her cooking work.</p>
                <p>Here is a preview of the app I made for her:</p>
                {/* TODO: implement later xD */}
            </div>

            <div className="mt-4 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur opacity-30"></div>
                <div className="relative w-full h-[200px] bg-neutral-bg border border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-1">
                        <i className="fas fa-hammer text-xl animate-pulse"></i>
                    </div>
                    <p className="text-white/60 font-bold tracking-wider text-sm">PROJECT PREVIEW</p>
                </div>
            </div>
        </div>
    ),
};

export default whatIDoData;