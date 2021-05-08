import React, { useContext } from 'react';
import ApiContext from './ApiContext';

export default function TaskCheck({ task, checked, setChecked }) {
    const context = useContext(ApiContext)
    const setTasks = context.setTasks

    const handleClickDelete = (e) => {
        e.preventDefault()
        const id = task.id
        let deleted = context.tasks.filter(task => task.id !== id)
        console.log('handleClickDelete task', task)
        setTasks(deleted)
    }

    const handleSubmit = (e) => {
        console.log('checked', checked)
        setChecked(!checked)
        const updatedTasks = context.tasks.map(task => {
          task.complete = checked[task.id] || false
          return task
        })
        context.setTasks(updatedTasks)
      }

    return (
        <div>
            <label htmlFor="check">
                <button
                    className='Task__delete'
                    type='button'
                    onClick={handleClickDelete}
                > Delete </button>
                <span>{task.content}</span>
                {/* setStudents to new version of students */}
                <input className="checkbox" onChange={handleSubmit} type="checkbox" name="check"
                    id="check" checked={checked} className="complete" value={checked}>
                </input>
            </label>
        </div>
    )
}