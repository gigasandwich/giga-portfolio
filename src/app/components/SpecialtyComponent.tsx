import { ReactNode } from "react";

export type Specialty = {
    specialty: string,
    iconLink: string,
    details: ReactNode,
};

export default function SpecialtyComponent({ specialty, iconLink, details }: Specialty) {
    return (
        <div>
            <img src={iconLink} alt={specialty} className="w-12 h-12"/>
            <div>
                <h3>{specialty}</h3>
                <div>{details}</div>
            </div>
        </div>
    );
}