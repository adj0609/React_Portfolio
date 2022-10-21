import React from 'react';
import coverImage from '../../../assets/cover/portfolio.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Andrea Jared</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
         Junior Full Stack Developer with experience with the MERN (MongoDB, ExpresJS, Reactjs, Nodejs) tech stack. 
         Currently attending a Full Stack Flex Development Bootcamp through the university of Central Florida with a 
         graduation date of of 17 November 2022. Familiar with OOP, API's, PWA, Stripe and version control with Git and 
         GitHub. A self-starter and a team player with extensive experience in managment and leadership from the 
         service industry as a Director of Outlets managing multiple restaurants.
         
         
         
         
         
         
        </p>
      </div>
    </section>
  );
}

export default About;
