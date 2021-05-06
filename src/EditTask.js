import React, { useState, useContext } from 'react';
import ApiContext from './ApiContext';
import { Link } from 'react-router-dom'

export default function EditTask(props) {
    const context = useContext(ApiContext)
    console.log('context.tasks', context.tasks)
    const task = context.tasks.find(task => task.id === props.match.params.id);
    console.log('task', task)
    const taskIndex = context.tasks.indexOf(task)
    const [content, setContent] = useState(task.content)
    const [lastName, setLastName] = useState(task.last_name)
    const contentChange = function (e) { setContent(e.target.value) }
    const lastNameChange = function (e) { setLastName(e.target.value) }
    const setTasks = context.setTasks
    const onSubmit = (e) => {
        {/* insert fetch and then for db */ }
        e.preventDefault()
        console.log('inside handleClickDelete')
        const newTask = { ...task, content: content, last_name: lastName }
        const newTasks = [...context.tasks]
        newTasks[taskIndex] = newTask
        console.log('newTask', newTask)
        setTasks(newTasks)
        props.history.push(`/task`)
    }
    const handleClickDelete = (e) => {
        e.preventDefault()
        const id = props.match.params.id
        let deleted = context.tasks.filter(task => task.id !== id)
        console.log('handleClickDelete task', task)
        setTasks(deleted)
        props.history.push(`/task`)
    }
    return (
        <main role="main">
            <form className='signup-form' onSubmit={onSubmit} >
                <header role="banner">
                    <h2>Edit Task</h2>
                    {/* student ID to ensure not deleting wrong student */}
                </header>
                <div>
                    {/* Text box defaults as students information based on id */}
                    <label for="content">Content</label>
                    <input placeholder={task.content} onChange={contentChange} value={content} type="text" name='content' id='content' />
                </div>
                <div>
                    <label for="last-name">Last name</label>
                    <input placeholder={task.last_name} onChange={lastNameChange} value={lastName} type="text" name='last-name' id='last-name' />
                </div>
                <section>
                    {/* submit changes to student data 
                    send user to addPeriod 
                    message: your student has been updated */}
                    <button type='submit'> Update </button>
                    {/* delete student from class 
                    alert user
                    confirm delete: yes/no 
                    yes will send user to addPeriod */}
                    <button
                        className='Task__delete'
                        type='button'
                        onClick={handleClickDelete}
                    > Delete </button>

                    {/* view filtered student attendance history 
                    send user to student history */}

                    <Link to={`/task-history/${task.id}`}>
                        <button type='submit'> View </button>
                    </Link>
                </section>
            </form>
        </main>
    );
}