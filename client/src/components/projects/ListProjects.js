import React from 'react';
import Project from './Project';

const ListProjects = () => {
    const projects = [
        {
            name: 'Virtual store'
        },
        {
            name: 'Intranet'
        },
        {
            name: 'Responsive site'
        }
    ];

    return (
        <ul className="listado-proyectos">
            {
                projects.map((project, index) => (
                    <Project
                        key={index}
                        project={project}
                    />
                ))
            }
        </ul>
    );
}

export default ListProjects;