import SelfRemindPreview from "../../public/img/selfremind.png";
import AttendancePreview from "../../public/img/attendance.png";
import RedStreamPreview from "../../public/img/redstream2.png";
import GDSCPreview from "../../public/img/gdsc2.png";
import JackyFanPreview from "../../public/img/jackyfan.png";
import CRSWebPreview from "../../public/img/crsweb.png";

export const Projects = [
    {
        title: "CRS Web",
        description:
            "Web-based Conversational Recommender System built with ReactJS, Python Flask, MySQL and CRSLab.",
            tags: ["Web", "Final Year Project"],
            image: CRSWebPreview,
            link: "/projects/crsweb",
    },
    {
        title: "Jacky.Fan",
        description:
            "A personal website built with Vite, React, Typescript, DaisyUI and TailwindCSS.",
        tags: ["Personal Website", "Side Project"],
        image: JackyFanPreview,
        link: "/projects/jackyfan",
    },
    {
        title: "SelfRemind",
        description:
            "A selfhosted To-do List Manager built with Next.js, Chakra-UI and MySQL.",
        tags: ["Todo App", "Side Project"],
        image: SelfRemindPreview,
        link: "/projects/selfremind",
    },
    {
        title: "GDSC Portfolio",
        description:
            "A portfolio website created for the GDSC portfolio workshop.",
        tags: ["Web", "Workshop"],
        image: GDSCPreview,
        link: "/projects/gdsc",
    },
    {
        title: "RedStream",
        description:
            "A Movie Streaming Website built with ReactJS, MaterialUI, ExpressJS, Firebase and FFmpeg.",
        tags: ["Movie Streaming", "School Project"],
        image: RedStreamPreview,
        link: "/projects/redstream",
    },
    {
        title: "Student Attendance System",
        description:
            "A Student Attendance Management System built with ExpressJS/Java, Bootstrap, JQuery and MySQL. ",
        tags: ["Web", "School Project"],
        image: AttendancePreview,
        link: "/projects/sams",
    },
];