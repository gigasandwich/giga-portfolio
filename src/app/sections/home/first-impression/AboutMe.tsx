export default function AboutMe() {
    const location: string = "Antananarivo - Madagascar";
    const age: string = "twenties";
    return (
        // TODO: add prose here
        <div className="">
            <h1 className="text-4xl font-bold">About me</h1>

            <div className="text-sm mt-4">
                <p>Based in <span className="text-red-200">{location}.</span></p>
                <p>On my <span>{age}</span>.</p>
            </div>

            <div className="text-sm mt-4">
                I enjoy working on small utility softwares during my free time. I also visit leetcode daily to improve my problem solving knowledge.
            </div>

            <div className="text-sm mt-4">
                Communicating with me should be easy, well you should try it out as I am open to projects at the moment.
                <a className="text-red-200" href="#"> Contact me.</a>
            </div>
        </div>
    );
}