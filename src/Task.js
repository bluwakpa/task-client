import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ApiContext from './ApiContext';
import TaskCheck from './TaskCheck'

export default function Task(props) {
  const context = useContext(ApiContext)
  const initialCheck = {};
  const [checked, setChecked] = useState(false);

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
}

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

  
  return (
    <main role="main">
      <header>
        <h2 className="h2">Task List</h2>
      </header>
      <form className='signup-form' onSubmit={onSubmit} >
      <input required='' type="text" placeholder='Enter Task' name='content' id='content' value={formData.content} onChange={handleChange} />
          <button type='submit' >Submit</button>
        <div className="ul-text">
          {
            context.tasks.map((task) => {
              return <TaskCheck match={props.match} key={task.id} checked={checked} setChecked={(isChecked) => setChecked(
                { ...checked, [task.id]: isChecked })} task={task} updateTasks={updateTasks} />
            })
          }
          {/* submit check to data */}
        </div>
        {/* <section className="button-section">
          <button type="submit">Submit</button>
          <br />

        </section> */}
      </form>
    </main>
  );
}