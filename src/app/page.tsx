import FirstImpression from "./sections/home/first-impression/FirstImpression";
import ImageContainer from "./sections/home/image-container/ImageContainer";
import WhatIDo from "./sections/home/what-i-do/MySpecialties";

export default function Home() {
  return (
    <>
      <div className="about-me">
        <FirstImpression />
        <ImageContainer />
        <WhatIDo />
      </div>
    </>
  );
}
