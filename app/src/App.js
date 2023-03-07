import photo from "./images/selfie.png";
import arrow from "./images/arrow.svg";
import mail from "./images/mail.svg";
import github from "./images/github.svg";
import linkedin from "./images/linkedin.svg";

function App() {
  return (
    <div className="flex flex-col m-8 space-y-4 width-full ">
      <div className="flex flex-col self-center p-8 space-y-8 bg-white shadow-2xl w-80 rounded-3xl">
        <p className="text-4xl font-bold">Hi 👋</p>
        <p className="w-64 h-16 text-sm">
          Welcome to my portfolio.
          <br />
          Feel free to check my projects & contact info down below.
        </p>
      </div>
      <div className="flex flex-col self-center p-8 space-y-4 bg-white shadow-2xl w-80 rounded-3xl ">
        <p className="text-4xl font-bold">Agustin Lago</p>
        <p className="text-base font-bold">Frontend Developer</p>
      </div>
      <div className="relative flex flex-col items-start self-center justify-start px-8 pb-8 space-y-8 bg-gray-900 shadow-2xl w-80 pt-80 rounded-3xl">
        <img
          className="absolute top-0 left-0 w-full rounded-tl-3xl rounded-tr-3xl"
          src={photo}
          alt="selfportrait"
        />
        <p className="text-4xl font-bold text-white">About me</p>
        <p className="w-full text-sm text-white">
          I've been programming full time for a year now, although my path on
          this field started 10 years ago.
          <br /> I enjoy positions where i can be take a role in problem solving
          and adapt to the requirements of the product and the market learning
          new technologies on the way.
        </p>
      </div>
      <div className="flex flex-col items-end self-center justify-start p-8 space-y-5 bg-white shadow-2xl w-80 rounded-3xl">
        <div className="flex flex-col items-start justify-start w-full h-56 space-y-5">
          <div className="inline-flex items-center justify-center p-2 bg-black">
            <p className="text-sm font-bold text-white">UnBardo Design</p>
          </div>
          <p className="text-2xl font-bold">Clothing e-Commerce</p>
          <p className="w-full text-sm">
            Design & development of a web e-commerce for clothing brand using
            technologies such as: TypeScript, ReactJs, NodeJs, TailwindCSS,
            PostgreSQL, Express and Sequelize.
          </p>
        </div>
        <a
          href="https://unbardo.com.ar/"
          className="flex items-center justify-center px-3.5 py-2 border-2 rounded-full border-black"
        >
          <p className="text-xs font-medium tracking-wide">VISIT SITE</p>
        </a>
      </div>
      <div className="flex flex-col items-end self-center justify-start p-8 space-y-5 bg-white shadow-2xl w-80 rounded-3xl">
        <div className="flex flex-col items-start justify-start space-y-5">
          <div className="flex items-center justify-center p-2 bg-black">
            <p className="text-sm font-bold text-white">soyHenry PI</p>
          </div>
          <p className="text-2xl font-bold">World API.</p>
          <p className="w-full text-sm">
            Single Page Application Project that allows the user to visualise
            different countries around the world with their own statistics &
            information and create touristic activities.
          </p>
        </div>
        <a
          href="https://github.com/LagoJournal/PI-Countries"
          className="flex items-center justify-center px-3.5 py-2 border-2 rounded-full border-black"
        >
          <p className="text-xs font-medium tracking-wide">VISIT SITE</p>
        </a>
      </div>
      <div className="flex flex-col items-center self-center justify-start p-8 space-y-5 bg-gray-900 shadow-2xl w-80 rounded-3xl">
        <p className="text-4xl font-bold text-white">Education</p>
        <p className="text-sm text-center text-white">
          FullStack Web Dev Bootcamp soyHenry | 2022-2023
        </p>
        <p className="w-full text-sm text-white">
          Frontend Development using mainly ReactJs & Redux for Single Pages
          Applications.
          <br /> Backend Development using mainly Postgres, SQL, Express for
          Database creation & managment.
        </p>
        <div className="flex items-center justify-between w-full space-x-40 ">
          <img className="h-full rotate-180 rounded-lg " src={arrow} />
          <img className="h-full transform rounded-lg " src={arrow} />
        </div>
      </div>
      <div className="flex flex-col items-center self-center justify-start p-8 space-y-5 bg-white shadow-2xl w-80 rounded-3xl">
        <p className="text-4xl font-bold">Knowledge</p>
        <p className="w-full text-sm text-center">
          Languages
          <br /> JavaScript, TypeScript, Solidity
        </p>
        <p className="w-full text-sm text-center">
          Frontend & Design <br />
          ReactJs, Redux, React Router HTML5, CSS3, Tailwind CSS, Bootstrap,
          Figma
        </p>
        <p className="w-full text-sm text-center">
          Backend
          <br /> NodeJs, ExpressJs, Postgres, Sequelize, Postman, Nodemon
        </p>
        <p className="w-full text-sm text-center">
          Management Tools:
          <br /> Git, Npm, Github
        </p>
      </div>
      <div className="flex flex-col items-center self-center justify-start p-8 space-y-4 bg-white shadow-2xl w-80 rounded-3xl">
        <p className="text-2xl font-bold">Contact me</p>
        <div className="flex space-x-2.5 items-start justify-center">
          <a href="https://github.com/LagoJournal">
            <img className="" src={github} alt="github" />
          </a>
          <a href="mailto:lagoagustindev@gmail.com">
            <img className="" src={mail} alt="email" />
          </a>
          <a href="https://www.linkedin.com/in/agustin-lago/">
            <img className="" src={linkedin} alt="linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
