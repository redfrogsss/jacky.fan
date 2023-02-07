import {
    NavBar,
    PortfolioPhotos,
    SkillItem,
    EmailButton,
    LinkedInButton,
    GithubButton,
    ProjectItems,
} from "../components";

export default function HomePage() {
    return (
        <div className="w-[99vw] bg-base-100">
            <div className="grid h-[100vh] bg-base-100 w-80%">
                {/* About me */}
                <header className="fixed w-full top-0 z-50">
                    <NavBar />
                </header>
                <div
                    id="intro"
                    className="flex items-center justify-center h-screen"
                >
                    <article className="prose lg:prose-xl w-[80%] md:w-full">
                        <h1>Jacky FAN</h1>
                        <h4>A Computing Student at PolyU</h4>
                        <p>
                            Hello, my name is{" "}
                            <i>
                                <b>Jacky FAN</b>
                            </i>
                            . I am a year 4 student studying Computing at The
                            Hong Kong Polytechnic University. I am passionate
                            about `Programming`, `Web Technology` and `Problem
                            Solving`.
                        </p>
                        <div className="grid md:inline-block gap-2">
                            <EmailButton />
                            <LinkedInButton />
                            <GithubButton />
                        </div>
                    </article>
                </div>
            </div>

            {/* Desktop only content */}
            <div className="hidden lg:flex justify-center h-auto bg-base-200 w-full">
                <div className="w-full">
                    <center>

                    {/*  My Projects */}
                    <div
                        id="projects"
                        className="block card w-[80%] h-auto bg-base-100 shadow-xl mt-16"
                    >
                        <div className="card-body">
                            <center>
                                <article className="prose lg:prose-xl">
                                    <h3>My Projects</h3>
                                    <p>
                                        In the past, I have done various
                                        projects for school and hobbies. Most of
                                        them are related to Web.
                                    </p>
                                </article>
                            </center>
                            <div className="mt-4">
                                <PortfolioPhotos />
                            </div>
                        </div>
                    </div>

                    {/* My Skills */}
                    <div
                        id="skills"
                        className="card w-[80%] h-auto bg-base-100 shadow-xl my-16"
                    >
                        <div className="card-body">
                            <center>
                                <article className="prose lg:prose-xl">
                                    <h3>My Skills</h3>
                                    <p>
                                        I learnt various skills in the past and
                                        I applied them in my projects.
                                    </p>
                                </article>
                            </center>
                            <div className="mt-4 grid grid-cols-2 gap-4">
                                <div className="grid grid-rows-4 gap-2">
                                    <SkillItem
                                        name="Typescript"
                                        percentage={80}
                                    />
                                    <SkillItem name="HTML" percentage={80} />
                                    <SkillItem name="CSS" percentage={70} />
                                    <SkillItem name="Cloud" percentage={40} />
                                </div>
                                <div className="grid grid-rows-4 gap-2">
                                    <SkillItem
                                        name="ReactJS"
                                        percentage={80}
                                    />
                                    <SkillItem name="MySQL" percentage={60} />
                                    <SkillItem name="Git" percentage={50} />
                                    <SkillItem name="Docker" percentage={40} />
                                </div>
                            </div>
                        </div>
                    </div>
                    </center>
                </div>
            </div>
            {/* End of Desktop only content */}

            {/* Mobile only */}
            <div className="lg:hidden h-auto bg-base-200 p-4">
                <center>
                    <article className="prose lg:prose-xl w-[80%] md:w-full">
                        <h3>My Projects</h3>
                        <p>
                            In the past, I have done various projects for school
                            and hobbies. <br />
                            Most of them are related to Web.
                        </p>
                    </article>
                </center>

                <ProjectItems />
            </div>

            <div className="lg:hidden h-auto bg-base-100 p-4">
                <center>
                    <article className="prose lg:prose-xl w-[80%] md:w-full">
                        <h3>My Skills</h3>
                        <p>
                            I learnt various skills in the past and I applied
                            them in my projects.
                        </p>
                    </article>
                    <div className="my-2">
                        <SkillItem name="Typescript" percentage={80} />
                        <SkillItem name="HTML" percentage={80} />
                        <SkillItem name="ReactJS" percentage={80} />
                        <SkillItem name="CSS" percentage={70} />
                        <SkillItem name="MySQL" percentage={60} />
                        <SkillItem name="Git" percentage={50} />
                        <SkillItem name="Cloud" percentage={40} />
                        <SkillItem name="Docker" percentage={40} />
                    </div>
                </center>
            </div>

            {/* End of mobile only content*/}

            <footer className="footer footer-center p-4 bg-base-200 lg:bg-base-100 text-base-content">
                <div>
                    <article className="prose lg:prose-xl">
                        <small>
                            Jacky FAN @{" "}
                            <a href="https://jacky.fan">jacky.fan</a>{" "}
                            {new Date().getFullYear()}. Source code available at{" "}
                            <a
                                href="https://github.com/redfrogsss/jacky.fan"
                                target="_blank"
                            >
                                GitHub
                            </a>
                            .
                        </small>
                    </article>
                </div>
            </footer>
        </div>
    );
}
