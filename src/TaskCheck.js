import React, { useContext, useState } from 'react';
import ApiContext from './ApiContext';
import config from './config';

export default function TaskCheck(props) {
    const context = useContext(ApiContext)
    const setTasks = context.setTasks
    const [checked, setChecked] = useState(false)

    const handleClickDelete = (e) => {
        e.preventDefault()

        fetch(`${config.API_ENDPOINT}/api/tasks/${props.task.id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(() => {
                const filteredDelete = context.tasks.filter(task => task.id !== props.task.id)
                context.setTasks(filteredDelete)
            })
            .catch(error => {
                console.error({ error })
            })
    };

    const handleChecked = (e, id) => {
        setChecked(!checked)
        const updatedTasks = context.tasks.map(task => {
            if (task.id === id) {
                task.complete = e.target.checked
            }
            return task
        })
        context.setTasks(updatedTasks)
    }

    return (
        <div className="parent-container">
            <div>
                <input onChange={(e) => handleChecked(e, props.task.id)} value={props.task.complete} checked={props.task.complete} type="checkbox" name="check"
                    className="complete">
                </input>
                <label htmlFor="check" className={checked ? 'strike' : 'left'}>{props.task.content}</label>
            </div>
            <div className="position-right">
                <button
                    className='Delete-button'
                    type='button'
                    onClick={handleClickDelete}
                > <i className="fa fa-2x fa-trash"></i> </button>
                {/* setStudents to new version of students */}
            </div>
        </div>
    )
}