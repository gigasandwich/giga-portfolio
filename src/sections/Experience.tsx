import { useState } from "react";
import Title from "@/components/Title";
import experienceData, { ExperienceType } from "@/data/experience/Main";
import VerticalTimeline from "@/components/VerticalTimeline";

export default function Experience() {
    const [index, setIndex] = useState(0);
    const current: ExperienceType = experienceData[index];

    return (
        <>
            <Title>
                Experience & 
                <p className="text-primary">involvement</p>
            </Title>
            <div id="experience" className="relative overflow-visible py-10 lg:py-20 min-h-screen"
                style={{ backgroundImage: `url('/assets/svgs/bg-experience.svg')`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="relative z-10 px-4 lg:px-0">

                    <div className="grid grid-cols-1 lg:grid-cols-3 pt-6 gap-8 items-start">
                        <div className="col-span-1 flex justify-center">
                            <VerticalTimeline items={experienceData} selected={index} onSelect={setIndex} />
                        </div>

                        {/* Description */}
                        <div className="col-span-1 lg:col-span-2 p-8 lg:p-10 bg-[#161616] border border-white/5 rounded-3xl shadow-2xl">
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

                            <div className="text-white/60 text-lg leading-relaxed space-y-4 lg:max-h-[520px] lg:overflow-y-auto lg:pr-3 thin-scrollbar">
                                {current.description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}