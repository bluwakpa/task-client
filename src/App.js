import React, { useState, useEffect } from 'react';
import data from './data';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import './index.css';
import Task from './Task';
import Home from './Home';
import ApiContext from './ApiContext';
import config from './config';

export default function App(props) {
  const [tasks, setTasks] = useState(data.tasks)

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
    console.log("tasks", tasks)
  }

  const value = {
    tasks,
    setTasks,
    handleClickDelete
  }
  return (
    <BrowserRouter>
      <ApiContext.Provider value={value}>
        <div>
          <nav role="navigation" className="nav">
            <Link to="/"><h1 className="h1">Task</h1></Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route path="/task" component={Task} />
        </div>
        <footer role="contentinfo" className="footer">Copyright 2021</footer>
      </ApiContext.Provider>
    </BrowserRouter>
  );
}