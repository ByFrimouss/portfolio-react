import "./ProjectCard.scss";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="card-inner">
        <img src={project.image} alt={project.title} />
        <div className="card-info">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
