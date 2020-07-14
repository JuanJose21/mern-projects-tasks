import React, { Fragment, useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {

    // get state form
    const projectsContext = useContext(projectContext);
    const { form, viewForm } = projectsContext;

    // state project
    const [project, saveProject] = useState({
        name: ''
    });

    const { name } = project;

    const onChangeProject = e => {
        saveProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitProject = e => {
        e.preventDefault();
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => viewForm()}
            >
                New Project
            </button>

            {
                form
                    ?
                    (
                        <form
                            className="form-formulario-nuevo-proyecto"
                            onSubmit={onSubmitProject}
                        >
                            <input
                                type="text"
                                className="input-text"
                                placeholder="Project name"
                                name="name"
                                value={name}
                                onChange={onChangeProject}
                            />

                            <input
                                type="submit"
                                className="btn btn-block btn-primario"
                                value="Add project"
                            />
                        </form>
                    ) : null
            }
        </Fragment>
    );
}

export default NewProject;