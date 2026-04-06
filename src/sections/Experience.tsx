import { useState } from "react";
import Title from "@/components/Title";
import experienceData, { ExperienceType } from "@/data/experience/Main";
import VerticalTimeline from "@/components/VerticalTimeline";

export default function Experience() {
    const [index, setIndex] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const current: ExperienceType = experienceData[index];

    const handleSelect = (i: number) => {
        setIndex(i);
        if (typeof window !== 'undefined' && window.innerWidth < 1024) {
            setIsModalOpen(true);
        }
    };

    return (
        <>
            <Title>
                Experience & 
                <p className="text-primary">involvement</p>
            </Title>
            <div id="experience" className="relative overflow-visible py-3 lg:py-15 rounded-3xl border border-white/5"
                style={{ backgroundImage: `url('/assets/svgs/bg-experience.svg')`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="relative z-10 px-4 lg:px-0">

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="col-span-1 flex justify-center">
                            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-[350px] max-h-[520px] sm:max-h-[620px] lg:max-h-[720px] overflow-y-auto lg:overflow-visible thin-scrollbar mx-auto">
                                <VerticalTimeline items={experienceData} selected={index} onSelect={handleSelect} />
                            </div>
                        </div>

                        {/* Description - Desktop only */}
                        <div className="hidden min-h-[700px] lg:block col-span-1 lg:col-span-2 p-8 lg:p-10 bg-[#161616] border border-white/5 rounded-3xl shadow-2xl">
                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold tracking-widest text-primary uppercase mb-4">
                                        {current.end != null ? 'Past Achievement' : 'Current Focus'}
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-2">{current.title}</h3>
                                    {current.meta && <p className="text-xl text-primary font-medium">{current.meta}</p>}
                                </div>
                                {current.icon && (
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-white/20">
                                        <i className={`fas ${current.icon} text-2xl`}></i>
                                    </div>
                                )}
                            </div>

                            <div className="text-white/80 text-lg leading-relaxed space-y-4 lg:max-h-[520px] lg:overflow-y-auto lg:pr-3 thin-scrollbar">
                                {current.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm lg:hidden uppercase"
                     onClick={() => setIsModalOpen(false)}>
                    <div className="relative w-full max-w-lg bg-[#161616] border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
                         onClick={(e) => e.stopPropagation()}>
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white transition-colors z-20"
                        >
                            <i className="fas fa-times text-xl"></i>
                        </button>

                        <div className="overflow-y-auto thin-scrollbar pr-2 mt-4">
                            <div className="mb-6 pr-8">
                                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold tracking-widest text-primary uppercase mb-3">
                                    {current.end != null ? 'Past Achievement' : 'Current Focus'}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1 uppercase leading-tight">{current.title}</h3>
                                {current.meta && <p className="text-lg text-primary font-medium uppercase">{current.meta}</p>}
                            </div>

                            <div className="text-white/80 text-base leading-relaxed space-y-4 normal-case">
                                {current.description}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}