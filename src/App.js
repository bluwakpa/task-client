import React, { useState } from 'react';
import data from './data';
import { Route, Link } from 'react-router-dom';
import './index.css';
import Task from './Task';
import Home from './Home';
import ApiContext from './ApiContext';

export default function App(props) {
  const [tasks, setTasks] = useState(data.tasks)
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
    <ApiContext.Provider value={value}>
      <div>
        <nav role="navigation">
          <Link to="/"><h1>Task</h1></Link>
        </nav>
        <Route exact path="/" component={Home} />
        <Route path="/task" component={Task} />
        {/* <Route path="/add-task" component={AddTask} />
        <Route path="/task-history/:id" component={TaskHistory} />
        <Route path="/tasks-history" component={TasksHistory} />
        <Route path="/edit-task/:id" render={(props) => <EditTask {...props} title={`Props through render`} />} /> */}
      </div>
      <footer role="contentinfo">Copyright 2021</footer>
    </ApiContext.Provider>
  );
}