import CardlikeButton from "@/components/CardlikeButton";
export type WhatIDoType = {
    title: string;
    icon: string;
    description: React.ReactNode;
};

const goodPractices: string[]= [
    "SOLID principle",
    "Design patterns",
    "Refactor",
    "Graphical E/R - MLD modeling"
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
                        return <CardlikeButton key={i} content={gp} />
                    })
                }
            </div>
        </div>
    ),
};

export default whatIDoData;