import React, { useState, useContext } from 'react';
import data from './data'
import ApiContext from './ApiContext';
import { useParams } from 'react-router-dom'
// import { v4 as uuidv4 } from 'uuid';
// import CategoryNav from './CategoryNav'
// import TaskList from './TaskList'
// import Task from './Task'
// import FilteredTasks from './FilteredTasks'

export default function App() {
  // console.log('props', props)
  // {}
  const context = useContext(ApiContext)
  console.log('context.data', context)
  // {
  //   categories: [],
  //   tasks: [],
  //   addCategory: () => {},
  //   addTask: () => {},
  //   editCategory: () => {},
  //   editTask: () => {},
  // }
  // const [categories, setCategories] = useState(data.categories)
  const [tasks, setTasks] = useState(data.tasks)
  console.log('tasks', tasks)
  // "tasks": [{tasks}]
  console.log('tasks.content', tasks.content)
  // undef
  
  const task = context.tasks.find(task => task.id === data.match.params.id) || {};
  console.log('task', task)
  // {}
  const taskIndex = context.tasks.indexOf(task)
  console.log('taskIndex', taskIndex)
  //  -1
  const [content, setContent] = useState(tasks.content)
  console.log('content', content)
  // undef
  // const content = context.data.tasks.content
  // console.log(content)

  function createTask(e, i) {
    const newTasks = [...tasks];
    newTasks.splice(i + 1, 0, {
      content: '',
      complete: false,
    });
    setTasks(newTasks);
    setTimeout(() => {
      document.forms[0].elements[i + i].focus();
    }, 0);
  }

  function updateTask(e, i) {
    const newTasks = [...tasks];
    newTasks[i].content = e.target.value;
    setTasks(newTasks);
    console.log('setTasks', setTasks, 'newTasks', newTasks)
  }

  function toggleTaskComplete(i) {
    const tempTasks = [...tasks];
    tempTasks[i].complete = !tempTasks[i].complete;
    setTasks(tempTasks);
  }

  function removeTask(i) {
    if (i === 0 && tasks.length === 1) return;
    setTasks(tasks => tasks.slice(0, i).concat(tasks.slice(i + 1, tasks.length)));
    setTimeout(() => {
      document.forms[0].elements[i - 1].focus();
    }, 0);
  }

  function handleEnter(e, i) {
    if (e.key === 'Enter') {
      createTask(e, i);
    }
    if (e.key === 'Backspace' && tasks[i].content === '') {
      e.preventDefault();
      console.log('tasks', tasks)
      return removeTask(i);
    }
  }


  return (
    <div className="app">
      <div className="header">
        <h1>Task</h1>
      </div>
      <form className="task-list">
        <ul>
          {tasks.map((task, i) => (
            <div className={`task ${task.complete && 'task-is-ed'}`}>
              <div className={'checkbox'} onClick={() => toggleTaskComplete(i)}>
                {task.complete && (
                  <span>&#x2714;</span>
                )}
              </div>
              <input
                type="text"
                value={tasks.content}
                onEnter={e => handleEnter(e, i)}
                onChange={e => updateTask(e, i)}
              />
            </div>
          ))}
        </ul>
      </form>
      <footer role="contentinfo" className="footer">Copyright 2021</footer>
    </div>
  );
}