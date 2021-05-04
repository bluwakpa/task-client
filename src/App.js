import React, { useState, useContext } from 'react';
import data from './data'
import ApiContext from './ApiContext';
// import { useParams } from 'react-router-dom'
// import { v4 as uuidv4 } from 'uuid';


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

  const [tasks, setTasks] = useState(data.tasks)
  console.log('tasks', tasks)

  // "tasks": [{tasks}]

  console.log('tasks.content', tasks[0].content)
  // undef

  // wrap this inside a function and pass in a current htmlId
  // const task = context.tasks.find(task => task.id === data) || {};
  // console.log('task', task)
  // {}

  // indexOf may not work with objects, might need library underscore or lodash
  // const taskIndex = context.tasks.indexOf(task)
  // console.log('taskIndex', taskIndex)
  //  -1

  // argue a single task.content based on .index
  const [content, setContent] = useState(tasks.content)
  console.log('content', content)
  // undef

  // consider push, add to end, may not need splice
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

  // setTasks([
  //   ...tasks,
  //   {
  //     id: uuidv4(),
  //     task,
  //     complete:false
  //   }
  // ])

  // const setStatusTask = (id, status) => {
  //   setTasks(tasks.map(tast => task.id === id ? {...task, complete: status} : task))
  // }

  // const { addTask, deleteTask } = useTaskState ([]);

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

  const handleClickDelete = (e) => {
    e.preventDefault()
    const task = data.tasks.filter(task => task.id === data) || {};
    let deleted = context.tasks.filter(task => task.id !== data)
    console.log('data.tasks', data.tasks)
  }


  return (
    <div className="app">
      <div className="header">
        <h1>Task</h1>
      </div>
      <form className="task-list">
        <ul>
          <div>
            {/* Text box defaults as students information based on id */}
            <input 
              placeholder="Add task"
              type="text"
            />
            <button>Add</button>
          </div>
          {tasks.map((task, i) => (
            <div className={`task ${task.complete && 'task-is-complete'}`}>
              <div className={'checkbox'} onClick={() => toggleTaskComplete(i)}>
                {task.complete && (
                  <span>&#x2714;</span>
                )}
              </div>
              <input
                type="text"
                value={task.content}
                onEnter={e => handleEnter(e, i)}
                onChange={e => updateTask(e, i)}
              />
              <button
                className="Task_delete"
                type="button"
                onClick={handleClickDelete}
              >Delete</button>
            </div>
          ))}
        </ul>
      </form>
      <footer role="contentinfo" className="footer">Copyright 2021</footer>
    </div>
  );
}