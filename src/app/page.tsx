import Me from "./sections/home/first-impression/Me";
import AboutMe from "./sections/home/first-impression/AboutMe";
import { Contacts } from "./sections/home/first-impression/Contacts";

import ImageContainer from "./sections/home/image-container/ImageContainer";
import WhatIDo from "./sections/home/what-i-do/WhatIDo";

/**
 * The html in the JSX is written to help the dekstop view development
 * as the css classes already handle the responsiveness
 * (I want to use mobile first development)
 */

export default function Home() {
  return (
    <main className="">
      {/* About me section */}
      <div className="md:grid md:grid-cols-12 md:grid-rows-1 h-screen">
        {/* 3 spans */}
        <div className="flex flex-col md:justify-between md:col-span-3 py-4 p-2 md:px-16"> {/* TODO: understand why using grid display here gives space */}
          <div className="order-1 md:relative mt-10">
            <Me name={"Yvan Noah"} job={"Software developer"}></Me>
          </div>
          <div className="order-2 md:hidden"> {/* Always placed on second position */}
            <ImageContainer />
          </div>
          <div className="order-3 md:pb-4">
            <AboutMe />
            <Contacts />
          </div>
        </div>

        {/* 5 spans */}
        <div className="hidden md:block md:col-span-4">
          <ImageContainer />
        </div>

        {/* 4 spans */}
        <div className="md:col-span-5 mt-10 md:pt-4">
          <WhatIDo />
        </div>
      </div>

      {/* Project section */}
      <div>

      </div>

      {/* ... */}
      <div>

      </div>
    </main>
  );
}
