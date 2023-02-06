import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Project } from "../pages/Projects";
import { useEffect } from 'react';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
    const navigate = useNavigate();
    const [image, setImage] = useState<any>();


    const openProject = (projectId: number) => {
    navigate('/projects/' + String(projectId));
  };

  useEffect(() => {
    const data = JSON.stringify({
      imgId: "cover",
      mode: localStorage.getItem("theme"),
      projectId: project.projectId
    });

    const config = {
      method: 'post',
      url: 'http://localhost:4500/api/v1/content/img',
      headers: {
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios(config)
    .then(function (response) {
      setImage(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  }, [project.projectId])


    return (
        <div className="projectCardWrapper">
             <h1>{project.projectName}</h1>
             <p>{project.projectShortDescription}</p>
             <div className="projectCardImageContainer">
                <img className="projectCardImage" src={`data:image/png;base64,${image}`} alt="coverPicture"></img>
             </div>
            <button className="button" onClick={() => navigate(`/projects/${project.projectId}`)}>Learn more</button>
        </div>
    )
}

export default ProjectCard;