import "../App.css";
import {
    NavBar,
} from "../components";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';

export default function SASProjectPage() {

    const title = "Student Attendance Management System (SAMS)";
    const projectLink = [{
        title: "GitHub",
        link: "https://github.com/redfrogsss/attendance-system-nodejs"
    }]

    const markdown = `
SAMS - a Student Attendance Management System built with [ExpressJS](https://expressjs.com/), [Bootstrap](https://getbootstrap.com/), [JQuery](https://jquery.com/) and [MySQL](https://www.mysql.com/).


![Alt text](/img/project_img/sas/01.png "Login Page")
![Alt text](/img/project_img/sas/02.png "Teacher Home Page")
![Alt text](/img/project_img/sas/03.png "Lessons Records Page")
![Alt text](/img/project_img/sas/04.png "Lesson Info Page")
![Alt text](/img/project_img/sas/05.png "Lesson Info Page")
![Alt text](/img/project_img/sas/06.png "Student Home Page")
![Alt text](/img/project_img/sas/07.png "Student Attendance Page")
![Alt text](/img/project_img/sas/08.png "Attendance History Page")

## Get Started

To start with, you must install [Docker](https://www.docker.com/products/docker-desktop) and [docker-compose](https://docs.docker.com/compose/) on your computer.

First, create a docker-compose.yml file with the following content:

~~~yml
version: "3"
services:
  web:
    build: .
    ports:
      - "3000:3000"
    restart: unless-stopped
  db:
    image: mysql/mysql-server:8.0
    restart: unless-stopped
    command: --default-authentication-plugin=mysql_native_password
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: sams
      MYSQL_USER: sams
      MYSQL_PASSWORD: sams
    volumes:
      - dbdata:/var/lib/mysql
      - ./my.conf:/etc/mysql/my.cnf
      - ./db/:/docker-entrypoint-initdb.d
volumes:
  dbdata:
~~~

Then, run the command to start the server:
~~~bash
docker-compose up -d
~~~

Wait a minutes and open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Demo Teacher Account
- username: \`liu@test.com\`
- password: \`testes\`

## Demo Student Account
- username: \`ftk@test.com\`
- password: \`testes\`

## Learn More

This is a Individual Assignment Project built by [Jacky Fan](https://github.com/redfrogsss) in 2021 for the Course AST20201 Web Programming. 

The following tech is used in this project.
- [ExpressJS](https://expressjs.com/) - the backend solutions of this project.
- [Bootstrap](https://getbootstrap.com/) - the UI solutions of this project.
- [JQuery](https://jquery.com/) - the client-side programming solutions of this project.
- [MySQL](https://www.mysql.com/) - the database of this project.
    `;

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

    const showAllLinkButtons = () => projectLink.map((link, index) => {
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
                        <h2>{title}</h2>
                        { showAllLinkButtons() }
                        <p>
                            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
                        </p>
                    </article>
                </div>
                {/* End of mobile only content*/}


                {/* Desktop only content */}
                <div className="hidden lg:flex justify-center h-auto bg-base-200 w-full">
                    <div className="flex items-center justify-center w-[80%] min-h-[92vh] bg-base-200">
                        <article className="prose lg:prose-xl my-32">
                            <h3>{title}</h3>
                            {showAllLinkButtons()}
                            <p>
                                <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
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
