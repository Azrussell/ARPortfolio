import React from 'react'
import "./Projects.css";

const Projects = () => {

    return (
      <section classname="sect-wrap">
        <div className="project-container">
          <div className="project-box">
            <h2 className="project-title">Netflix & Grill</h2>
            <p className="project-description">My team and I designed an app for couples who are looking to have a night in. Users can select a movie and dinner recipe for a romantic night in.</p>
            <a href="https://nworku00.github.io/netflix-and-grill/" className="project-link">See project</a>
          </div>
          <div className="project-box">
            <h2 className="project-title">JarkGPT</h2>
            <p className="project-description">My team & I designed a project for students who are unfamiliar with Chat GPT AI prompting. Site provides questionnaire for users and ready made prompts for better results.</p>
            <a href="https://jarkfront-end1.onrender.com/" className="project-link">See project</a>
          </div>
          <div className="project-box">
            <h2 className="project-title">Trail Ahead</h2>
            <p className="project-description">A project designed for hikers to meet hikers. Users can create a profile, view and join upcoming or current hikes, build their profile amongst a community of other hikers.</p>
            <a href="https://trail-ahead.onrender.com/" className="project-link">See project</a>
          </div>
        </div>
        </section>
      );
    };

export default Projects