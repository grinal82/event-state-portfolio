import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <img src={project.img} alt={`Project ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
