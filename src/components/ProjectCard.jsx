import { useState } from "react"

export function ProjectCard({imageName, title, description}) {

    return (
        <section className="current-project">
            <img src={`src/assets/project/${imageName}.png`}></img>
            <data>
                <h1>{title}</h1>
                <p>{description}</p>
            </data>
        </section>
    )
}