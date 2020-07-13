import React, { Fragment, useState } from 'react';
//import Sidebar from '../layout/Sidebar';

const NewProject = () => {

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
            >
                New Project
            </button>

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
        </Fragment>
    );
}

export default NewProject;