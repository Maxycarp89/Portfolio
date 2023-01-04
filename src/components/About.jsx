import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md: h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          My core competencies span various programming languages, databases,
          web frameworks, development tools, and related technologies. I have
          been working on projects from small applications to complex websites.
          I strive to keep up with the latest trends in web technologies.
        </p>

        <br />

        <p className="text-xl">
          In addition to my technical skills, I also have soft skills that allow
          me to work in a team, communicate clearly and effectively, manage
          time, solve problems, share creative ideas and make quick decisions. I
          also have the ability to work independently and manage projects
          successfully.
        </p>
      </div>
    </div>
  );
};

export default About;
