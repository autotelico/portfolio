import React, { useState, useEffect } from 'react';

export function MainColumn() {
  const [projectCount, setProjectCount] = useState(0);

  function handleProjectCount() {
    useEffect(() => {
      setProjectCount((prevCount) => prevCount + 1);
      return () => {
        setProjectCount((prevCount) => prevCount - 1);
      };
    }, []);
  }

  return (
    <div id="main-column">
      <Intro />
      <Project
        title="Weather App"
        projectCount={projectCount}
        handleProjectCount={handleProjectCount}
        inverted={false}
      />
      <Project
        title="To-Do List"
        projectCount={projectCount}
        handleProjectCount={handleProjectCount}
        inverted={true}
      />
      <Contact />
    </div>
  );
}

export function Intro() {
  const knownLanguages = ['React', 'TypeScript', 'Sass', 'Bootstrap'];

  return (
    <>
      <h1>About</h1>
      <p>
        Extremely curious Front-End Developer with an unquenchable thirst for
        documentation and interviewing seniors.
      </p>
      <ul>
        Known languages and frameworks:
        {knownLanguages.map((language) => (
          <li>{language}</li>
        ))}
      </ul>
    </>
  );
}

export function Project({ title, projectCount, handleProjectCount, inverted }) {
  handleProjectCount();

  return (
    <div id={'project' + projectCount} className="project">
      {inverted ? (
        <>
          <img src="" alt="" height="100px" width="100px" />
          <p>{title}</p>
        </>
      ) : (
        <>
          <p>{title}</p>
          <img src="" alt="" height="100px" width="100px" />
        </>
      )}
    </div>
  );
}

export function Contact() {
  return (
    <div id="contact">
      <h1>Contact</h1>
      <ul>
        <li><a href="https://github.com/autotelico">GitHub</a></li>
        <li><a href="https://linkedin.com/in/henrique-mag">LinkedIn</a></li>
        <li><a href="mailto:henriqueheron1@gmail.com">Email me</a></li>
      </ul>
    </div>
  );
}