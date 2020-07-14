import React, { Fragment } from 'react';
import Task from './Task';

const ListTask = () => {

    const tasksProject = [
        {
            name: 'task 1',
            status: true
        },
        {
            name: 'task 2',
            status: false
        },
        {
            name: 'task 3',
            status: true
        },
        {
            name: 'task 4',
            status: false
        },
    ];

    return (
        <Fragment>
            <h2>Project: name</h2>
            <ul className="listado-tareas">
                {
                    tasksProject.length === 0
                        ? (<li className="tarea">No have tasks</li>)
                        : tasksProject.map(task => (
                            <Task task={task} />
                        ))
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
            >
                Delete project &times;
            </button>
        </Fragment>
    );
}

export default ListTask;