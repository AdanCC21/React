import { Decoration } from "./components/Decoration";
import { ProjectCard } from "./components/ProjectCard";

import './css/projects.css'

export function Projects(){

    

    return (
        <div className="project-general">
            <Decoration currentScreen={'projects'}/>
            <ProjectCard imageName={'cookingHub'} title={'Cooking Hub'} description={'App movil for Android and iOs'}></ProjectCard>
            
            <section className="projects-list">
                
            </section>
        </div>
    )
}