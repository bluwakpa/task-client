import React, { useState } from 'react'
import { Route, Link } from 'react-router-dom'
import data from './data'

export default function TaskList() {
    const [tasks, setTasks] = useState(data.tasks)

    return (
        <main>
            <header>
                <h1>
                TaskList
                </h1>
            </header>
            <section>
                <ul>
                    <Link to="/task">
                        <h3>Task Personal</h3>
                    </Link>
                    <Link to="/task">
                        <h3>Task Work</h3>
                    </Link>
                    <Link to="/task">
                        <h3>Task Chores</h3>
                    </Link>
                </ul>
            </section>
        </main>
    )
}