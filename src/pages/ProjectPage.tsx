import "../App.css";
import {
    NavBar,
} from "../components";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

interface ProjectPageProps {
    project: {
        title: string;
        date: string;
        links: {
            title: string;
            link: string;
        }[];
        description: string;
    }
}

export default function ProjectPage({project} : ProjectPageProps) {

    const LinkButton = ({title, link} : {title: string, link: string}) => {
        return (
            <a className="btn btn-outline no-underline" href={link}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
                &nbsp; {title}
            </a>
        );
    }

    const DateColumn = ({date} : {date: string}) => {
        return (
            <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 inline pb-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>
                &nbsp; {date}
            </>
            
        );
    }

    const showAllLinkButtons = () => project.links.map((link, index) => {
        return (
            <div key={index} className="mt-4">
                <LinkButton title={link.title} link={link.link} />
            </div>
        );
    })

    return (
        <div className="App bg-slate-400">
            <div className="w-[100vw] bg-base-100">
                <header className="fixed w-full top-0 z-50">
                    <NavBar />
                </header>

                {/* Mobile only */}
                <div className="lg:hidden min-h-[92vh] bg-base-200 p-4">
                    <article className="prose lg:prose-xl w-[90%] m-auto md:w-full mt-16">
                        <h2>{project.title}</h2>
                        <DateColumn date={project.date}/>
                        { showAllLinkButtons() }
                        <p>
                            <ReactMarkdown children={project.description} remarkPlugins={[remarkGfm]} />
                        </p>
                    </article>
                </div>
                {/* End of mobile only content*/}


                {/* Desktop only content */}
                <div className="hidden lg:flex justify-center h-auto bg-base-200 w-full">
                    <div className="flex items-center justify-center w-[80%] min-h-[92vh] bg-base-200">
                        <article className="prose lg:prose-xl my-32">
                            <h3>{project.title}</h3>
                            <DateColumn date={project.date} />
                            {showAllLinkButtons()}
                            <p>
                                <ReactMarkdown children={project.description} remarkPlugins={[remarkGfm]} />
                            </p>
                        </article>
                    </div>
                </div>
                {/* End of Desktop only content */}

                <footer className="footer footer-center p-4 bg-base-200 lg:bg-base-100 text-base-content">
                    <div>
                        <article className="prose lg:prose-xl">
                            <small>
                                Jacky FAN @{" "}
                                <a href="https://jacky.fan">jacky.fan</a>{" "}
                                {new Date().getFullYear()}. Source code available at{" "}
                                <a
                                    rel="noopener"
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
        </div>
    );
}
