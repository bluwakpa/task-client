import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Task from './Task'
import CircleButton from './CircleButton'
// import './index.css'

export default function TaskListMain(props) {
    return (
        <section className='TaskListMain'>
            <ul>
                {props.tasks.map(task =>
                    <li key={task.id}>
                        <Task
                            id={task.id}
                            name={task.name}
                            modified={task.modified}
                        />
                    </li>
                )}
            </ul>
            <div className='TaskListMain__button-container'>
                <CircleButton
                    tag={Link}
                    to='/add-task'
                    type='button'
                    className='TaskListMain__add-task-button'
                >
                    <FontAwesomeIcon icon='plus' />
                    <br />
          Task
        </CircleButton>
            </div>
        </section>
    )
}

TaskListMain.defaultProps = {
    tasks: [],
}