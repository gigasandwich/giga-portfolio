import { useState } from "react";
import Title from "@/components/Title";
import experienceData, { ExperienceType } from "@/data/experience/Main";
import VerticalTimeline from "@/components/VerticalTimeline";
import CardContainer from "@/components/CardContainer";
import CloseButton from "@/components/CloseButton";
import BorderedIcon from "@/components/BorderedIcon";
import Parallax from "@/components/Parallax";

export default function Experience() {
    const [index, setIndex] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const current: ExperienceType = experienceData[index];

    const prev = () => {
        setIndex((s) => {
            let newIndex = (s - 1 + experienceData.length) % experienceData.length;
            return newIndex === 0 ? experienceData.length - 1 : newIndex;
        });
    };

    const next = () => {
        setIndex((s) => {
            let newIndex = (s + 1) % experienceData.length;
            return newIndex === 0 ? 1 : newIndex;
        });
    };

    const handleSelect = (i: number) => {
        setIndex(i);
        if (typeof window !== 'undefined' && window.innerWidth < 1024) {
            setIsModalOpen(true);
        }
    };

    return (
        <>
                <div className="relative z-10 px-4 py-3 lg:py-15 lg:px-0">

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        <div className="col-span-1 flex justify-center">
                            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-[350px] max-h-[520px] sm:max-h-[620px] lg:max-h-[720px] overflow-y-auto lg:overflow-visible thin-scrollbar mx-auto">
                                <VerticalTimeline items={experienceData} selected={index} onSelect={handleSelect} />
                            </div>
                        </div>

                        {/* Description - Desktop only */}
                        <div className="hidden lg:block col-span-1 lg:col-span-2 relative h-full">
                            <CardContainer
                                id={index + ""} // It asked for string, not number so don't blame me
                                onPrev={prev}
                                onNext={next}
                                className="min-h-[500px] max-h-[500px] lg:min-h-[700px] lg:max-h-[700px] !bg-[#161616]/80"
                            >
                                <div className="flex justify-between items-start mb-8">
                                    {/* <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold tracking-widest text-primary uppercase mb-4">
                                        {current.end != null ? 'Past Achievement' : 'Current Focus'}
                                    </div> */}
                                    <div className="px-2 md:px-8">
                                        <h1 className="text-white mb-2 tracking-tight">{current.title}</h1>
                                        {current.meta && <h2 className="text-primary font-medium">{current.meta}</h2>}
                                    </div>
                                    {current.icon && (
                                        <BorderedIcon icon={current.icon} />
                                    )}
                                </div>

                                <div className="text-white/80 leading-relaxed space-y-4 lg:max-h-[500px] lg:overflow-y-auto lg:pr-3 px-2 md:px-8 thin-scrollbar">
                                    {current.description}
                                </div>
                            </CardContainer>
                        </div>
                    </div>
                </div>

            {/* Mobile Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-black/90 backdrop-blur-md lg:hidden"
                    onClick={() => setIsModalOpen(false)}>
                    {/* TODO: Maybe add max-w-lg later in case of a problem  */}
                    <div className="relative w-full max-h-[60vh] h-[60vh] mx-auto overflow-visible"
                        onClick={(e) => e.stopPropagation()}>

                        <CardContainer
                            id={index + ""}
                            onPrev={prev}
                            onNext={next}
                            className="h-full min-h-[60vh] max-h-[60vh] !bg-[#161616]"
                            allowOverflow
                        >

                            <div className="mt-4 h-full overflow-y-auto pr-6">
                                <div className="mb-6 pr-8">
                                    {/* <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold tracking-widest text-primary uppercase mb-3">
                                        {current.end != null ? 'Past Achievement' : 'Current Focus'}
                                    </div> */}
                                    <h1 className="font-bold text-white mb-1 uppercase leading-tight">{current.title}</h1>
                                    {current.meta && <h2 className="text-primary font-medium uppercase">{current.meta}</h2>}
                                </div>

                                <div className="text-white/80 text-base leading-relaxed space-y-4 normal-case pr-2">
                                    {current.description}
                                </div>
                            </div>
                        </CardContainer>
                        <CloseButton onClick={() => setIsModalOpen(false)} />
                    </div>
                </div>
            )}
        </>
    );
}