"use client";

import { useEffect, useState } from "react";
import MySpecialties from "./MySpecialties";
import MyLatestProjects from "./MyLatestProjects";

/**
 * The main view of "what I do" shows MyLatestProjects first, then MySpecialties
 */
export default function WhatIDo() {
    const [showMyLatestProjects, setShowMyLastProjects] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShowMyLastProjects(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    // TODO: Add smooth transition, now a raw one
    return (
        // <MyLatestProjects />
        // <MySpecialties />
        showMyLatestProjects ? <MyLatestProjects /> : <MySpecialties />
    );
}