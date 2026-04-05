export type WhatIDoType = {
    title: string;
    icon: string;
    description: React.ReactNode;
};

const whatIDoData: WhatIDoType = {
    title: "Hybrid Mobile Application Developement",
    icon: "fa-mobile-screen",
    description: (
        <div>
            <p>Using stacks like <code>Ionic</code>, <code>Flutter</code> and similar.</p>

            <p className="mt-2">Most of my most used app are from this category, and my best client (for now) is <b>my mom</b> who needs to automatize her <b>cook job</b>.</p>
            
            <p className="mt-2">This one application might be simple at first look but the implementation follows a <b>heavy BUSINESS LOGIC</b>:</p>

            <div className="w-[250px] h-[250px] bg-gray-500 rounded-2xl mt-4 p-4">
                Future link and preview of the app
            </div>
        </div>
    ),
};

export default whatIDoData;