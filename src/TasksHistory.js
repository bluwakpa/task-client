import React, { useContext } from 'react';
import ApiContext from './ApiContext';
import { Link, useHistory } from 'react-router-dom'
import Task from './Task'
import EditTask from './EditTask'


export default function TasksHistory(props) {
    const history = useHistory();
    const context = useContext(ApiContext);
    const tasks = context.tasks
    return (
        <main role="main">
            <header role="banner">
                <h2>Tasks History</h2>
                {tasks.map(task => (
                    <div>
                        <h3>
                            {task.content} {task.last_name} <br />
                        </h3>

                        <div>
                            {
                                Object.entries(task.complete).map(([date, present]) => (
                                    <div>
                                        <p>{date}: {present ? "Present" : "Absent"}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))}

            </header>
            <section className="button-section">
                <Link to="/task"><button> Check </button></Link>
            </section>
        </main>
    );
}