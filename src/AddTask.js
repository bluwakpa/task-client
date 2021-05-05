import React, { useState, useContext } from 'react';
import ApiContext from './ApiContext';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

export default function AddTask(props) {
    const context = useContext(ApiContext)

    const init = {
        firstName: "",
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
            first_name: formData.firstName,
            last_name: formData.lastName,
            id: uuidv4(),
            attendance: {
                "Today": false,
                "Yesterday": false
            }
        }
        context.setTasks([...context.tasks, newTask])
        props.history.push(`/attendance/${formData.category}`)
    }


    return (
        <main role="main">
            <form className='signup-form' onSubmit={onSubmit}>
            <header role="banner">
                    <h2>Add Task</h2>
                </header>
                <div>
                    <label htmlFor="first-name">First name</label>
                    <input required='' type="text" placeholder='First Name' name='firstName' id='first-name' value={formData.firstName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="last-name">Last name</label>
                    <input required='' type="text" placeholder='Last Name' name='lastName' id='last-name' value={formData.lastName} onChange={handleChange} />
                    <section className="button-section">
                        <button type='submit' >Submit</button>
                        <Link to="/attendance"><button> Cancel </button></Link>
                    </section>
                </div>
            </form>
        </main>
    );
} 