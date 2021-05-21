import React, { useContext, useState } from 'react';
import ApiContext from './ApiContext';

export default function TaskCheck({ task }) {
    const context = useContext(ApiContext)
    const setTasks = context.setTasks
    const [checked, setChecked] = useState(false)

    const handleClickDelete = (e) => {
        const id = task.id
        let deleted = context.tasks.filter(task => task.id !== id)
        setTasks(deleted)
    }

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
            <input onChange={(e) => handleChecked(e, task.id)} value={task.complete} checked={task.complete} type="checkbox" name="check"
                        className="complete">
                    </input>
            <label htmlFor="check" className={checked ? 'strike' : 'left'}>{task.content}</label>
                <div className="position-right">
                    <button
                        className='button'
                        type='button'
                        onClick={handleClickDelete}
                    > Delete </button>
                    {/* setStudents to new version of students */}
                    
                </div>
            
        </div>
    )
}