import BackgroundlessButton from "@/components/BackgroundlessButton";

export type WhatIDoType = {
    title: string;
    icon: string;
    description: React.ReactNode;
};

const goodPractices: string[]= [
    "SOLID principle",
    "1st Design pattern",
    "Another good design pattern",
    "And another one"
];

const whatIDoData: WhatIDoType = {
    title: "Object-Oriented Development with Database design",
    icon: "fa-cubes",
    description: (
        <div>
            <p>Following the below <b><i>patterns</i></b> and <b><i>good practices</i></b></p>
            
            <div className="flex justify-around mt-4">
                {
                    goodPractices.map((gp, i) => {
                        return <BackgroundlessButton key={i} content={gp} />
                    })
                }
            </div>
        </div>
    ),
};

export default whatIDoData;