export type WhatIDoType = {
    title: string;
    icon: string;
    description: React.ReactNode;
};

const whatIDoData: WhatIDoType = {
    title: "Full-Stack Development Across the above domains",
    icon: "fa-layer-group",
    description: (
        <div>
            <p>Backend applies what I previously claimed with the other competences I have</p>
            <p className="mt-2">Frontend is not as good as what designers/developers like <a href="#">my acquintances</a> here can do, but you can see that I can still manage myself judjing by this portfolio.</p>
        </div>
    ),
};

export default whatIDoData;