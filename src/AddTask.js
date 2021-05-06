import React, { useState, useContext } from 'react';
import ApiContext from './ApiContext';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

export default function AddTask(props) {
    const context = useContext(ApiContext)

    const init = {
        content: "",
        lastName: "",
    }

    const [formData, setFormData] = useState(init)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        {/* insert fetch and then for db */ }
        e.preventDefault()
        const newTask = {
            content: formData.content,
            last_name: formData.lastName,
            id: uuidv4(),
            complete: false,
        }
        context.setTasks([...context.tasks, newTask])
        props.history.push(`/task/${formData.category}`)
    }


    return (
        <main role="main">
            <form className='signup-form' onSubmit={onSubmit}>
            <header role="banner">
                    <h2>Add Task</h2>
                </header>
                <div>
                    <label htmlFor="first-name">Task</label>
                    <input required='' type="text" placeholder='Enter Task' name='content' id='content' value={formData.content} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="last-name">Last name</label>
                    <input required='' type="text" placeholder='Last Name' name='lastName' id='last-name' value={formData.lastName} onChange={handleChange} />
                    <section className="button-section">
                        <button type='submit' >Submit</button>
                        <Link to="/task"><button> Cancel </button></Link>
                    </section>
                </div>
            </form>
        </main>
    );
} 