import Me from "./Me";
import AboutMe from "./AboutMe";
import { Contacts } from "./Contacts";

export default function FirstImpression() {
    return (
        <div>
            <Me name={"Yvan Noah"} job={"Software developper"}></Me>
            <AboutMe />
            <Contacts />
        </div>
    );
}