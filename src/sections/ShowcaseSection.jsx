import { useRef } from "react";
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 },
        )
    }, [])

    return (
        <section id={"work"} className={"app-showcase"} ref={sectionRef}>
            <div className={"w-full"}>
                <div className={"showcaselayout"}>
                    {/*Left*/}
                    <a
                        href="https://abinjoseph2050.github.io/movie-finder/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={"first-project-wrapper"}
                    >
                        <div ref={project1Ref}>
                            <div className={"image-wrapper"}>
                                <img src="/images/project1.png" alt="Ryde" />
                            </div>
                            <div className="text-content">
                                <h2>Movie Finder – Instantly Discover Movies Worldwide</h2>
                                <p className="text-white-50 md:text-xl">
                                    Movie Finder is a quick and easy app to search and explore details about any movie from around the world.
                                </p>
                            </div>
                        </div>
                    </a>

                    {/*Right*/}
                    <div className="project-list-wrapper overflow-hidden">

                        <div className="project" ref={project2Ref}>
                            <a
                                href="https://abin-scrum-sprint-planner.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="image-wrapper bg-[#ffefdb]">
                                    <img src="/images/project2.png" alt="Library" />
                                </div>
                            </a>
                            <h2>Scrum Sprint Planner</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <a
                                href="https://github.com/abinjoseph2050/Components-Library"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className="image-wrapper bg-[#ffe7eb]">
                                    <img src="/images/project3.png" alt="YC" />
                                </div>
                            </a>
                            <h2>Reusable Components Library</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
