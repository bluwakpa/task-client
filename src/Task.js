import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ApiContext from './ApiContext';
import TaskCheck from './TaskCheck';
import config from './config';

export default function Task(props) {
  const context = useContext(ApiContext)
  const [checked, setChecked] = useState({});

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
    e.preventDefault()
    setFormData({
      ...formData,
      content: ''
    })
    fetch(`${config.API_ENDPOINT}/api/tasks`)
      .then(res => {
        if (!res.ok)
          return Promise.reject(res)
        return res.json()
      })
      .then((formData) => {
        // const task = req.body
        const newTask = {
          content: formData.content,
          id: uuidv4(),
          complete: false,
        }
        context.setTasks([...context.tasks, newTask])
      })
      .catch(error => {
        console.error({ error })
      })
  }

  const updateTasks = (newTask) => {
    const index = context.tasks.indexOf(newTask)
    context.tasks[index] = newTask
    context.setTasks([...context.tasks])
    props.history.push(`/tasks-history`)
  }


  return (
    <main role="main" className="main">
      <header>
        <h2 className="h2">Let's Get Stuff Done</h2>
      </header>
      <form className='signup-form' onSubmit={onSubmit} >
        <input className="input" required='required' type="text" placeholder='What do you want to get done today?' name='content' id='content' value={formData.content} onChange={handleChange} />
        <button type='submit' className='button'>ADD</button>
        <div className="ul-text">
          {
            context.tasks.map((task) => {
              return <TaskCheck match={props.match} key={task.id} checked={checked} setChecked={(isChecked) => setChecked(
                { ...checked, [task.id]: isChecked })} task={task} updateTasks={updateTasks} />
            })
          }
        </div>
      </form>
    </main>
  );
}