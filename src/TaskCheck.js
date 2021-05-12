import React, { useContext } from 'react';
import ApiContext from './ApiContext';
import data from './data';

export default function TaskCheck({ task, checked, setChecked }) {
    const context = useContext(ApiContext)
    const setTasks = context.setTasks
    const tasks = data.tasks

    const handleClickDelete = (e) => {
        const id = task.id
        let deleted = context.tasks.filter(task => task.id !== id)
        setTasks(deleted)
    }

    const handleChecked = (e, id) => {
        const updatedTasks = context.tasks.map(task => {
            if (task.id === id) {
                task.complete = e.target.checked
            }
            return task
        })
        context.setTasks(updatedTasks)
    }

    return (
        <div>
            <label htmlFor="check" >
                <button
                    className='Task__delete'
                    type='button'
                    onClick={handleClickDelete}
                > Delete </button>
                <span>{task.content}</span>
                {/* setStudents to new version of students */}
                <input className="checkbox" onChange={(e) => handleChecked(e, task.id)} value={task.complete} checked={task.complete} type="checkbox" name="check"
                    className="complete">
                </input>
            </label>
        </div>
    )
}