import React, { useContext } from 'react';
import ApiContext from './ApiContext';
import { Link } from 'react-router-dom'

export default function TaskHistory({ match }) {
    const context = useContext(ApiContext);
    console.log('match', match)
    const task = context.tasks.find(task => task.id === match.params.id);
    console.log('task.attendance', task.attendance)
    const tasks = context.tasks;
    console.log('task', task)

    const listItems = tasks.map((task) =>
        <TaskHistory key={task.toString()}
            value={task} />
    );
    console.log('listItems', listItems)
    return (
        <main role="main">
            <header role="banner">
                <h2>Task History</h2>
                <h3>
                    {task.first_name} {task.last_name} <br />
                </h3>
                <div>
                    {
                        Object.entries(task.attendance).map(([date, present]) => (
                            <div>
                                <p>{date}</p>
                                <p>{present ? "Present" : "Absent"}</p>
                            </div>
                        ))
                    }
                </div>
            </header>
            <section className="button-section">
                <Link to="/attendance"><button> Check </button></Link>
            </section>
        </main>
    );
}