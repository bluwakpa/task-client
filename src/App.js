import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import './index.css';
import Task from './Task';
import Home from './Home';
import ApiContext from './ApiContext';
import config from './config';

export default function App(props) {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    fetch(`${config.API_ENDPOINT}/api/tasks`)
      .then(res => {
        if (!res.ok)
          return Promise.reject(res)
        return res.json()
      })
      .then((tasks) => {
        setTasks(tasks)
      })
      .catch(error => {
        console.error({ error })
      })
  }, [])

  const handleClickDelete = (e) => {
    e.preventDefault()
    const tasks = props.match.params.id

    fetch(`${config.API_ENDPOINT}/api/tasks`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok)
          return Promise.reject(e)
        const newTasks = [...tasks]
        const indexOfDeleted = tasks.findIndex(task => task.id === tasks)
        newTasks.splice(indexOfDeleted, 1)
        this.context.setTasks(newTasks)
        props.history.push(`/tasks`)
      })
      .catch(error => {
        console.error({ error })
      })
  };

  const value = {
    tasks,
    setTasks,
    handleClickDelete
  }

  return (
    <ApiContext.Provider value={value}>
      <div>
        <nav role="navigation" className="nav">
          <a className="hamburger" >
            <i className="fa fa-bars"></i>
          </a>
          <Link className="logo" to="/">
            <h1>Task</h1>
          </Link>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/tasks" component={Task} />
      </div>
      <footer role="contentinfo" className="footer">
        <h3>Task</h3>
        <div className="copyright">Copyright 2021</div>
        <br />
          FAQs<br />
          Need Help?<br />
          Contact Us
      </footer>
    </ApiContext.Provider>
  );
}