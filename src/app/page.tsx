import Me from "./sections/home/first-impression/Me";
import AboutMe from "./sections/home/first-impression/AboutMe";
import { Contacts } from "./sections/home/first-impression/Contacts";

import ImageContainer from "./sections/home/image-container/ImageContainer";
import WhatIDo from "./sections/home/what-i-do/WhatIDo";
import Navbar from "./components/Navbar";
import Center from "./components/Center";
import Projects from "./sections/projects/Projects";
import Participations from "./sections/participations/Participations";

/**
 * The html in the JSX is written to help the dekstop view development
 * as the css classes already handle the responsiveness
 * (I want to use mobile first development)
 */

export default function Home() {
  return (
    <>
      {/*             
      <header className="flex justify-center">
        <Navbar />
      </header> 
      */}

      <main className="">
        {/* About me section */}
        <section id="about-me" className="grid md:grid-cols-6 xl:grid-cols-12 xl:grid-rows-1 h-screen">

          {/* TODO: Make this div centered on md */}
          <div className="flex flex-col xl:justify-between md:col-span-3 xl:col-span-3 py-4 px-8 xl:px-16 md:h-screen">
            <div className="order-1 xl:relative mt-10">
              <Me name={"Yvan Noah"} job={"Software developer"} />
            </div>
            <div className="order-2 mt-8 md:hidden"> {/* Always placed on second position, on md the other <ImageContainer /> is shown instead of this one */}
              <ImageContainer />
            </div>
            <div className="order-3 mt-8 xl:pb-4">
              <div>
                <AboutMe />
              </div>
              <hr className="mt-4" />
              <div className="mt-2">
                <Contacts />
              </div>
            </div>
          </div>

          <div className="hidden md:block md:col-span-3 xl:col-span-4">
            <ImageContainer />
          </div>

          <div className="md:col-span-6 xl:col-span-5 mt-10 xl:pt-4">
            <WhatIDo />
          </div>

        </section>

        {/* Project section */}
        <section id="projects">
          <Projects />
        </section>

        {/* ... */}
        <section id="participations">
          <Participations />
        </section>
      </main>
    </>
  );
}
