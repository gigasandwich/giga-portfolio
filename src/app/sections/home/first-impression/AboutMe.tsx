export default function AboutMe() {
    const location: string = "Antananarivo - Madagascar";
    const age: string = "twenties";
    return (
        <div>
            <h1>About me</h1>

            <div>
                <p>Based in <span>{location}</span></p>
                <p>On my <span>{age}</span></p>
            </div>

            <div>
                Communicating with me should be easy, well you should try it out as I am open to projects at the moment.
                <span>Contact me</span>
            </div>
        </div>
    );
}