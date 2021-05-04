import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TaskListNav from './TaskListNav'
import TaskPageNav from './TaskPageNav'
import TaskListMain from './TaskListMain'
import TaskPageMain from './TaskPageMain'
import AddCategory from './AddCategory'
import AddTask from './AddTask'
import data from './data'
import { getTasksForCategory, findTask, findCategory } from './tasks-helpers'
import './index.css'

class App extends Component {
  state = {
    tasks: [],
    categories: [],
  };

  componentDidMount() {
    // fake date loading from API call
    setTimeout(() => this.setState(data), 600)
  }

  renderNavRoutes() {
    const { tasks, categories } = this.state
    return (
      <>
        {['/', '/category/:categoryId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            render={routeProps =>
              <TaskListNav
              categories={categories}
                tasks={tasks}
                {...routeProps}
              />
            }
          />
        )}
        <Route
          path='/task/:taskId'
          render={routeProps => {
            const { taskId } = routeProps.match.params
            const task = findTask(tasks, taskId) || {}
            const category = findCategory(categories, task.categoryId)
            return (
              <TaskPageNav
                {...routeProps}
                category={category}
              />
            )
          }}
        />
        <Route
          path='/add-category'
          component={TaskPageNav}
        />
        <Route
          path='/add-task'
          component={TaskPageNav}
        />
      </>
    )
  }

  renderMainRoutes() {
    const { tasks, categories } = this.state
    return (
      <>
        {['/', '/category/:categoryId'].map(path =>
          <Route
            exact
            key={path}
            path={path}
            render={routeProps => {
              const { categoryId } = routeProps.match.params
              const getTasksForCategory = getTasksForCategory(tasks, categoryId)
              return (
                <TaskListMain
                  {...routeProps}
                  tasks={getTasksForCategory}
                />
              )
            }}
          />
        )}
        <Route
          path='/task/:taskId'
          render={routeProps => {
            const { taskId } = routeProps.match.params
            const task = findTask(tasks, taskId)
            return (
              <TaskPageMain
                {...routeProps}
                task={task}
              />
            )
          }}
        />
        <Route
          path='/add-category'
          component={AddCategory}
        />
        <Route
          path='/add-task'
          render={routeProps => {
            return (
              <AddTask
                {...routeProps}
                categories={categories}
              />
            )
          }}
        />
      </>
    )
  }

  render() {
    return (
      <div className='App'>
        <nav className='App__nav'>
          {this.renderNavRoutes()}
        </nav>
        <header className='App__header'>
          <h1>
            <Link to='/'>Task</Link>
            {' '}
            <FontAwesomeIcon icon='check-double' />
          </h1>
        </header>
        <main className='App__main'>
          {this.renderMainRoutes()}
        </main>
      </div>
    )
  }
}

export default App