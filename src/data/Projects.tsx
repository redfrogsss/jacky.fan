import SelfRemindPreview from "../../public/img/selfremind.png";
import AttendancePreview from "../../public/img/attendance.png";
import RedStreamPreview from "../../public/img/redstream.png";
import GDSCPreview from "../../public/img/gdsc.png";

export const Projects = [
    {
        title: "SelfRemind",
        description:
            "A selfhosted To-do List Manager built with Next.js, Chakra-UI and MySQL.",
        tags: ["Todo App", "Side Project"],
        image: SelfRemindPreview,
        link: "https://github.com/redfrogsss/selfremind",
    },
    {
        title: "GDSC Portfolio",
        description:
            "A portfolio website created for the GDSC portfolio workshop.",
        tags: ["Web", "Workshop"],
        image: GDSCPreview,
        link: "https://github.com/redfrogsss/gdsc-portfolio",
    },
    {
        title: "RedStream",
        description:
            "A Movie Streaming Website built with ReactJS, MaterialUI, ExpressJS, Firebase and FFmpeg.",
        tags: ["Movie Streaming", "School Project"],
        image: RedStreamPreview,
        link: "https://github.com/redfrogsss/RedStream",
    },
    {
        title: "Student Attendance System",
        description:
            "A Student Attendance Management System built with ExpressJS/Java, Bootstrap, JQuery and MySQL. ",
        tags: ["Web", "School Project"],
        image: AttendancePreview,
        link: "https://github.com/redfrogsss/attendance-system-nodejs",
    },
];