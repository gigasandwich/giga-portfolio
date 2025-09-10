import { ReactNode } from "react";

export type Specialty = {
    specialty: string,
    iconLink: string,
    details: ReactNode,
};

export default function SpecialtyComponent({ specialty, iconLink, details }: Specialty) {
    return (
        <div className="flex flex-col items-center text-center cursor-pointer">
            <img src={iconLink} alt={specialty} className="w-12 h-12"/>
            <div className="">
                <h3 className="text-sm">{specialty}</h3>
                <div className="hidden text-sm">{details}</div>
            </div>
        </div>
    );
}