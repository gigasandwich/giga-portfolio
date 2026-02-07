"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Code, Eye, FileText } from "lucide-react";

type ProjectType = {
    imgUrl: string,
    title: string,
    description: string,
    gitUrl: string,
    previewUrl: string,
};

export default function ProjectComponent({ imgUrl, title, description, gitUrl, previewUrl } : ProjectType) {
    const [showOverlay, setShowOverlay] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showFullText, setShowFullText] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleInteraction = () => {
        if (isMobile) {
            setShowOverlay(!showOverlay);
            setShowFullText(false); // reset when toggling overlay
        }
    };

    return (
        <div
            className=" w-[200px] h-[250px] md:w-[400px] md:h-[350px]  rounded-xl relative group overflow-hidden"
            style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
            onMouseEnter={() => !isMobile && setShowOverlay(true)}
            onMouseLeave={() => !isMobile && setShowOverlay(false)}
            onClick={handleInteraction}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50"></div>
            <div className={`overlay items-center justify-center absolute top-0 left-0 w-full h-full ${showOverlay ? 'flex backdrop-blur' : 'hidden'} transition-all duration-500 z-10`}>
                {showFullText ? (
                    <div className="text-white p-4 text-center">
                        <h5 className="text-xl font-semibold mb-2">{title}</h5>
                        <p className="text-sm">{description}</p>
                    </div>
                ) : (
                    <div className="flex">
                        {isMobile && (
                            <div
                                onClick={(e) => { e.stopPropagation(); setShowFullText(true); }}
                                className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white flex items-center justify-center cursor-pointer"
                            >
                                <FileText className="h-10 w-10 text-[#ADB7BE] hover:text-white" />
                            </div>
                        )}
                        <Link
                            href={gitUrl}
                            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link flex items-center justify-center"
                        >
                            <Code className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white" />
                        </Link>
                        <Link
                            href={previewUrl}
                            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link flex items-center justify-center"
                        >
                            <Eye className="h-10 w-10 text-[#ADB7BE] group-hover/link:text-white" />
                        </Link>
                    </div>
                )}
            </div>
            <div className="absolute top-0 left-0 right-0 p-4">
                <h5 className="text-white font-semibold mb-2">{title}</h5>
                <p className="text-gray-300 cursor-pointer">
                    {description.length > (isMobile ? 80 : 150) ? description.slice(0, isMobile ? 80 : 150) + "..." : description}
                </p>
            </div>
        </div>
    );
}