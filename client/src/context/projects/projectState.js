import React, { useReducer } from 'react';

import projectContext from './projectContext';
import projectReducer from './projectReducer';

import {
    FORM_PROJECT,
    GET_PROJECTS
} from '../../types';

const ProjectState = props => {

    const projects = [
        { id: 1, name: 'Virtual store' },
        { id: 2, name: 'Intranet' },
        { id: 3, name: 'Responsive site' },
        { id: 4, name: 'MERN' }
    ]

    const initialState = {
        projects: [],
        form: false,
    };

    const [state, dispatch] = useReducer(projectReducer, initialState);

    // define function
    const viewForm = () => {
        dispatch({
            type: FORM_PROJECT
        })
    }

    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        });
    }

    return (
        <projectContext.Provider
            value={{
                form: state.form,
                projects: state.projects,
                viewForm,
                getProjects
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState