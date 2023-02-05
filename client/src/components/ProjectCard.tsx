import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Project } from "../pages/Projects";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({project}) => {
    const navigate = useNavigate();
    const [image, setImage] = useState<any>();
      // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const openProject = (projectId: number) => {
    navigate('/projects/' + String(projectId));
  };
  const storedTheme = localStorage.getItem("theme");

  const getCoverImage = () => {
    var data = JSON.stringify({
      imgId: 1,
      mode: storedTheme,
      projectId: project.projectId
    });

    var config = {
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
  }
  getCoverImage();

    return (
        <div className="projectCardWrapper">
             <h1>{project.projectName}</h1>
             <p>{project.projectShortDescription}</p>
             <div className="projectCardImageContainer">
                <img className="projectCardImage" src={`data:image/png;base64,${image}`} alt="coverPicture"></img>
             </div>
            <button>Learn more</button>
        </div>
    )
}

export default ProjectCard;