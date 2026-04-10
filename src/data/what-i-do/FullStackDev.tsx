export type WhatIDoType = {
    title: string;
    icon: string;
    description: React.ReactNode;
};

const whatIDoData: WhatIDoType = {
    title: "Full-Stack Development Across the above domains",
    icon: "fa-layer-group",
    description: (
        <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/3 bg-opacity-3 border border-white/6 hover:bg-white/5 transition ease-in-out duration-200">
                <h3 className="font-semibold text-white mb-2">Backend</h3>
                <p className="text-white/80 leading-relaxed">Backend applies what I previously claimed with the other competences I have. I do not have a lot to say here.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-white/3 bg-opacity-3 border border-white/6 hover:bg-white/5 transition ease-in-out duration-200">
                <h3 className="font-semibold text-white mb-2">Frontend</h3>
                <p className="text-white/80 leading-relaxed">Frontend is not my best point, but you can judge me based on the portfolio you're viewing now.</p>
                <div className="mt-4 flex items-center gap-2 text-sm text-white/40 relative group">
                    <i className="fas fa-info-circle text-primary/60"></i>
                    <span>
                        <a href="#" className="text-primary/60 hover:text-primary underline">This got inspired by the work of talented designers and developers in my network.</a>
                    </span>

                    {/* Hover tooltip */}
                    <div className="pointer-events-none absolute left-0 top-full mt-2 w-64 bg-neutral-bg/95 border border-white/10 rounded-lg p-3 text-white/80 text-sm opacity-0 scale-95 transform transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
                        <p>In a sense that they do a great job at making their work look good, and I try to do the same too :)</p>
                    </div>
                </div>
            </div>
        </div>
    ),
};

export default whatIDoData;