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
    id: "",
    modified: "",
    complete: false,
  }

  const [formData, setFormData] = useState(init)

  const handleChange = (e) => {
    console.log('e.target.value', e.target.value)
    setFormData({
      ...formData,
      content: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      content: formData.content,
      id: uuidv4(),
      modified: new Date(),
      complete: false,
    }
  
    fetch(`${config.API_ENDPOINT}/api/tasks`, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newTask),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(newTask => {
        setFormData(init)
        context.setTasks([...context.tasks, newTask])
        props.history.push(`/tasks`)
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