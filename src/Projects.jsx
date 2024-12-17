import { useState } from "react";
import { Decoration } from "./components/Decoration";
import { ProjectCard } from "./components/ProjectCard";

import './css/projects.css'

export function Projects(){
    let projects = ['cookingHub', 'pooyecto', 'petCare'];
    let [previousProject, setPreviousProject] = useState(2);
    let [currentProject, setCurrentProject] = useState(0);
    let [nextProject, setNextProject] = useState(1);
    let [title, setTitle] = useState('Cooking Hub');
    let [description, setDescription] = useState('Una aplicacion de cocina para dispositivos moviles');

    const changeProject = (sense) =>{
        let previous = previousProject;
        let temp = currentProject;
        let next = nextProject;
        
        if(sense == 'right'){
            temp++;
            next++
            previous++
            
            if(temp > 2){
                temp = 0;
            }

            if(next>2){
                next = 0;
            }

            if(previous >2){
                previous=0;
            }
            
            setPreviousProject(previous);
            setNextProject(next);
            setCurrentProject(temp);
        }
        else{
            temp--;
            next--;
            previous--;
            
            if(temp < 0){
                temp = 2;
            }
            if(next < 0){
                next = 2;
            }
            
            if(previous < 0){
                previous = 2;
            }

            setPreviousProject(previous);
            setNextProject(next);
            setCurrentProject(temp)
        }
        handleInfo(temp);
    }

    const handleInfo=(temp)=>{
        if(projects[temp] == 'cookingHub'){
            setTitle('Cooking Hub');
            setDescription('Una aplicacion de cocina para dispositivos moviles');
        }
        if(projects[temp] == 'petCare'){
    
            setTitle('Pet Care');
            setDescription('Una aplicacion/pagina web que va enfocada al cuidado de las mascotas')
        }
        if(projects[temp] == 'pooyecto'){
            setTitle('Pooyecto');
            setDescription('Un juego sencillo de serpientes y escaleras para aplicaciones de escritorio');
        }
    }

    console.log(projects[currentProject]);
    console.log(currentProject)

    return (
        <div className="project-general">
            <Decoration currentScreen={'projects'}/>
            <ProjectCard imageName={projects[currentProject]} title={title} description={description}></ProjectCard>
            
            <section className="projects-list">
                <img onClick={() => changeProject('left')} src='src/assets/icon/left.svg'></img>
                
                <img onClick={() => changeProject('left')} src={`src/assets/project/${projects[previousProject]}.png`}></img>
                <img src={`src/assets/project/${projects[currentProject]}.png`}></img>
                <img onClick={() => changeProject('right')} src={`src/assets/project/${projects[nextProject]}.png`}></img>
                
                <img onClick={() => changeProject('right')} src='src/assets/icon/right.svg'></img>
            </section>
        </div>
    )
}
