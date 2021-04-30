import React, { useState } from 'react';
import data from './data'
import { Route, Link } from 'react-router-dom'
import CategoryNav from './CategoryNav'
import TaskList from './TaskList'
import Task from './Task'
import FilteredTasks from './FilteredTasks'

console.log(data)

function App() {
  const [categories, setCategories] = useState(data.categories)
  const [tasks, setTasks] = useState(data.tasks)
  return (
    <main>
      <header>
        <h1>
          <Link to="/">Task</Link>
        </h1>
      </header>
      <section style={{display:"flex"}}>
        <Route exact path="/" component={CategoryNav} />
        <Route exact path="/" component={TaskList} />
      </section>
      <section style={{display:"flex"}}>
        <Route exact path="/category/:categoryId" component={CategoryNav} />
        <Route exact path="/category/:categoryId" component={TaskList} />
      </section>
      <section>
        <Route exact path="/task/:taskId" component={Task} />
      </section>
    </main>
  );
}

export default App;