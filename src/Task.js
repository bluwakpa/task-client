import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import data from './data';
import ApiContext from './ApiContext';
import TaskHistory from './TaskHistory'

export default function Task(props) {
  const context = useContext(ApiContext)
  const initialCheck = {};
  const [checked, setChecked] = useState(initialCheck);

  console.log('checked', checked)
  // {}
  console.log('initialCheck', initialCheck)
  // {}
  console.log('context.tasks', context.tasks)
  // [{...tasks}]

  context.tasks.forEach(task => {
    initialCheck[task.id] = task.complete
  })

  useEffect(() => {
    setChecked(initialCheck)
  }, [context.tasks])

  const updateTasks = (newTask) => {
    const index = context.tasks.indexOf(newTask)
    context.tasks[index] = newTask
    context.setTasks([...context.tasks])
    props.history.push(`/tasks-history`)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const updatedTasks = context.tasks.map(task => {
      task.complete = checked[task.id] || false
      return task
    })
    context.setTasks(updatedTasks)
    console.log('updatedTasks', updatedTasks)
    props.history.push(`/tasks-history`)
  }

  console.log('checked', checked)
  // {task.id: false}


  return (
    <main role="main">
      <header>
        <h2 className="h2">Task List</h2>
      </header>
      <article className="form-section">
        {/* <label className="dream-date-label" htmlFor="date-month">Date: {data.date} </label> */}
      </article>
      <form onSubmit={handleSubmit}>
        {/* student names Link to EditStudent 
                    check attendance by clicking name
                    hover and focus
                    add class to show its selected
                    add pencil to left of name to edit student
                    accessibility by altering setCheck w CSS to view as button*/}
        {
          context.tasks.map((task) => {
            return <TaskHistory match={props.match} checked={checked[task.id]} setChecked={(isChecked) => setChecked(
              { ...checked, [task.id]: isChecked })} task={task} updateTasks={updateTasks} />
          })
        }
        {/* submit the attendance to student data */}
        <section className="button-section">
          <button type="submit">Submit</button>
          <br />
          <Link to="/add-task"><button>+ Task </button></Link>
        </section>
      </form>
    </main>
  );
}