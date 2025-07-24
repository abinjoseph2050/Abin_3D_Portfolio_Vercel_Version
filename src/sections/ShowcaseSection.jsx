import {useRef} from "react";
import {gsap} from 'gsap'
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";

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
            {opacity: 0},
            {opacity: 1, duration: 1.5},
        )
    }, [])

    return (
        <section id={"work"} className={"app-showcase"} ref={sectionRef}>
            <div className={"w-full"}>
                <div className={"showcaselayout"}>
                    {/*Left*/}
                    <div className={"first-project-wrapper"} ref={project1Ref}>
                        <div className={"image-wrapper"}>
                            <img src="/images/project1.png" alt="Ryde"/>
                        </div>
                        <div className="text-content">
                            <h2>On demand rides and some good initial description about the project</h2>
                            <p className="text-white-50 md:text-xl">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ut, vitae. Ad
                                corporis ea iste obcaecati odio quaerat quos ullam!
                            </p>
                        </div>
                    </div>

                    {/*Right*/}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="Library"/>
                            </div>
                            <h2>Title for Second project</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/project3.png" alt="YC"/>
                            </div>
                            <h2>Title for Third project</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection
