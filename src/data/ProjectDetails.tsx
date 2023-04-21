
const ProjectDetail = {
    sams: {
        title: "Student Attendance Management System (SAMS)",
        date: "April 2021",
        links: [{
            title: "GitHub",
            link: "https://github.com/redfrogsss/attendance-system-nodejs"
        }],
        description: `
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
        `
    },
    redstream: {
        title: "RedStream",
        date: "April 2021",
        links: [{
            title: "GitHub",
            link: "https://github.com/redfrogsss/RedStream"
        }],
        description: `
RedStream - a Movie Streaming Website built with [ReactJS](https://reactjs.org/), [MaterialUI](https://mui.com/), [ExpressJS](https://expressjs.com/), [Firebase](https://firebase.google.com/) and [FFmpeg](https://ffmpeg.org/).


## Who Made This?
- Sanjay THAPA
- SINGH Pawandeep
- FAN Tsz Kin
- KO Chun Kit
- SZE Chun

## Screenshot

![Alt text](/img/project_img/redstream/01.png "Home Page")
![Alt text](/img/project_img/redstream/02.png "Movie Page")
![Alt text](/img/project_img/redstream/03.png "Movie Details")
![Alt text](/img/project_img/redstream/04.png "Series Details")
![Alt text](/img/project_img/redstream/05.png "Search Movies")
![Alt text](/img/project_img/redstream/06.png "Upload Movies")
![Alt text](/img/project_img/redstream/07.png "Upload Movies Details")
![Alt text](/img/project_img/redstream/08.png "Playing Movies")
![Alt text](/img/project_img/redstream/09.png "Sign Up Page")
![Alt text](/img/project_img/redstream/10.png "Sign Up Page")


## Let's Get Started!
1. Clone this repo
2. Go to the directory of the repo
3. Double click start_backend.bat
4. Double click start_frontend.bat
5. Done

## Demo Admin Account
- email: admin@redstream.com
- pwd: redstream

## Demo User Account
- email: test@test.com
- pwd: testes

## Learn More
This is a Group Project built in 2021 for the Final Year Project of the Associate Degree in Information System Development.

The following tech is used in this project.
- [ReactJS](https://reactjs.org/) - the frontend framework of this project.
- [MaterialUI](https://chakra-ui.com/) - the UI solutions of this project.
- [Firebase](https://www.mysql.com/) - the database of this project.
- [ExpressJS](https://www.mysql.com/) - the backend of this project.
- [FFmpeg](https://www.mysql.com/) - the video encoder of this project.
        `
    },
    gdscPortfolio: {
        title: "GDSC Portfolio",
        date: "February 2022",
        links: [{
            title: "GitHub",
            link: "https://github.com/redfrogsss/gdsc-portfolio"
        }],
        description: `
# GDSC Portfolio
This is a portfolio website created for the GDSC portfolio workshop.
![Web page](/img/project_img/gdsc/1.png "GDSC Portfolio")
![Web page](/img/project_img/gdsc/2.png "GDSC Portfolio")
![Web page](/img/project_img/gdsc/3.png "GDSC Portfolio")
![Web page](/img/project_img/gdsc/4.png "GDSC Portfolio")

## Visit My Work!
To visit the portfolio, please go to [https://redfrogsss.github.io/gdsc-portfolio/](https://redfrogsss.github.io/gdsc-portfolio/)

## Learn More
This project involve the following tech:
- React
- React-Bootstrap
- Javascript
- CSS
- HTML
        `
    },
    selfremind: {
        title: "SelfRemind",
        date: "February 2022",
        links: [{
            title: "GitHub",
            link: "https://github.com/redfrogsss/selfremind"
        }],
        description: `
a selfhosted To-do List Manager built with [Next.js](https://nextjs.org/), [Chakra-UI](https://chakra-ui.com/) and [MySQL](https://www.mysql.com/).

## Screenshots
![Alt text](/img/project_img/selfremind/login.png "Login Page")
![Alt text](/img/project_img/selfremind/home.png "Home Page")

## Getting Started with \`docker-compose\`

To start with, you must install [Docker](https://www.docker.com/products/docker-desktop) and [docker-compose](https://docs.docker.com/compose/) on your computer.

First, create a \`docker-compose.yml\` file with the following content:

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
      MYSQL_ROOT_PASSWORD: example
      MYSQL_DATABASE: selfremind
      MYSQL_USER: selfremind
      MYSQL_PASSWORD: selfremind123
    volumes:
      - dbdata:/var/lib/mysql
      - ./my.conf:/etc/mysql/my.cnf
volumes:
  dbdata:
~~~

Then, run the command to start the server:
~~~bash
docker-compose up -d
~~~

Wait a minutes and open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

By default, the username is \`admin\` and the password is \`admin\`.

## Learn More

This is a side project built by [Jacky Fan](https://github.com/redfrogsss) - a university student in HK. 

The following tech is used in this project.
- [Next.js](https://nextjs.org/) - the frontend and backend framework of this project.
- [Chakra-UI](https://chakra-ui.com/) - the UI solutions of this project.
- [MySQL](https://www.mysql.com/) - the database of this project.

You can check out [my dirty code in Github](https://github.com/redfrogsss/selfremind) - your feedback are welcome!
        `
    },
    jackyfan: {
        title: "Jacky.FAN",
        date: "February 2023",
        links: [{
            title: "GitHub",
            link: "https://github.com/redfrogsss/jacky.fan"
        }],
        description: `
A personal website built with Vite, React, Typescript, DaisyUI and Tailwind CSS.

You can access this website via https://jacky.fan

## Features
- Dark Mode Support
- Responsive UI
- etc.

## Screenshots
![Screenshot](/img/project_img/jackyfan/01.png)
![Screenshot](/img/project_img/jackyfan/02.png)
![Screenshot](/img/project_img/jackyfan/03.png)

## Getting Started with \`Yarn\`

Start \`Dev\` Server:

~~~bash
# Clone the repo
git clone https://github.com/redfrogsss/jacky.fan.git

# Install dependencies
cd jacky.fan
yarn

# Start dev server
yarn dev
~~~

## Learn More

This project uses the following tech:

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript.
- [Vite](https://vitejs.dev/) - Next generation frontend tooling. It's fast!
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
- [DaisyUI](https://daisyui.com/) - A simple, responsive and customizable UI components library for Tailwind CSS.
- [HeroIcon](https://heroicons.com/) - Beautiful hand-crafted SVG icons.
- [Cloudflare Pages](https://pages.cloudflare.com/) - A static site hosting service.
        `
    },
}

export default ProjectDetail;