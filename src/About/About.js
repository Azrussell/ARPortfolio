import "./About.css"
import image from "../Section/aaliyah-headshot.jpg"

const About = () => {
    return (
      <div className="container">
        <div className="text-column">
          <h2 className="about-me">About</h2>
          <h2 className="about1">Me</h2>
          <p>I'm a software Engineer who loves web and computers. I'm eager to learn everything there is about computers and web design. My goal is to expand and polish my skillset and knowledge about software. I am fascinated by the world of technology and its potential to shape the future. This curiosity has led me to delve into the world of coding, where I discovered the power of turning ideas into reality through software development. The ability to create elegant solutions to complex problems by writing lines of code quickly became my driving force.
            Apart from coding, I am also interested in cybersecurity, fitness, and hiking
          </p>       
        </div>
        <div className="image-column">
          <img src={image}/>
        </div>
      </div>
    );
  }
   

export default About;
