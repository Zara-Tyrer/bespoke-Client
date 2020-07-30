import React from 'react';

//About page renders the images of the information catalogue


const About = () => {
  const about = {
    width: "100vw"
  }

  return (
    <div>
      <img style={about} src="about.png" alt="about and prices"></img>
      <img style={about} src="about2.png" alt="about and prices"></img>
    </div>
  )
}

export default About