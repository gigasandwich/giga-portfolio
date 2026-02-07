"use client";

import { ReactNode } from "react";
import Center from "./Center";
import { cardBorderColor } from "@/data/constants";
import { ChevronDown, Download } from "lucide-react";

type WhatIDoProps = {
    title: string;
    children: ReactNode;
    showCVButton?: boolean;
    cvFileName?: string;
    buttonText?: string;
};

/**
 * A generalized template component for "What I do" sections with optional CV viewing functionality
 */
export default function WhatIDoSuperComponent({
    title,
    children,
    showCVButton = true,
    cvFileName = "/CV-Stagiaire-IT-RABETOKOTANY-Yvan-Noah.pdf",
    buttonText = "View my CV"
}: WhatIDoProps) {
    const handleViewCV = () => {
        window.open(cvFileName, '_blank');
    };

    return (
        <div className="sm:flex sm:items-center sm:justify-center">
            <div className="relative px-16 grid grid-rows-9 md:grid-rows-12 grid-cols-1">
                <h1 className="text-4xl font-bold sm:row-span-1 mb:row-span-2">{title}</h1>

                <div className="row-span-6">
                    {children}
                </div>

                {showCVButton && (
                    <div className="row-span-1">
                        <div className="mt-6">
                            <Center>
                                <button
                                    onClick={handleViewCV}
                                    className="flex items-center gap-4 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                                    style={{ backgroundColor: cardBorderColor }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#00dd00';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = cardBorderColor;
                                    }}
                                >
                                    <span className="uppercase text-sm">{buttonText}</span>
                                    <Download size={20} />
                                </button>
                            </Center>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}