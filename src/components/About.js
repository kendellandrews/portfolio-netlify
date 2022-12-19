import React from "react";

export default function About() {
    return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-2 font-bold text-white">
                Kendell Andrews
                <br className="hidden lg:inline-block" />            
            </h1>
            <h3 className="title-font text-white text-1xl sm:text2xl mb-4">Web Full-Stack Developer</h3>
          <p className="mb-8 leading-relaxed">
          <h3>I am a Web Developer specializing in frontend languages.</h3>
        <br />
              <h5>I have a dream of starting two businesses, one that will change my life and one that would change the lives of others. Chasing this dream has given me a vast array of skills. Most recently, chasing the dream has come in the form of learning full stack web development, web3, and blockchain. I am excited to work for companies that can help develop and broaden my skill set that will one day help me achieve my goals of helping others. </h5>
        <br />
              <h5>I enjoy talking about business, sports, life, books, self imporvement, mental health, and understanding how the code I'm working on affects the entirety of the business. A company's success is my success.</h5>
            
              <br /> <br />

              Side note.... this portfolio/resumé is built using React.js.
          </p>
        <div className="flex justify-center">
            <a
              href="#projects"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              See Past Work
            </a>
           
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
            className="object-cover object-center rounded lg:float-right md:float-right sm:float-none lg:w-3/4"
            alt="hero"
            src="./headshotGrey.png"
          />
        </div>
      </div>
    </section>
  );
}