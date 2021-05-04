import React, { Component } from 'react'
import TaskForm from '../TaskForm/TaskForm'
import './AddTask.css'

export default class AddTask extends Component {
  static defaultProps = {
    categories: [],
  }
  render() {
    const { categories } = this.props
    return (
      <section className='AddTask'>
        <h2>Create a task</h2>
        <TaskForm>
          <div className='field'>
            <label htmlFor='task-name-input'>
              Name
            </label>
            <input type='text' id='task-name-input' />
          </div>
          <div className='field'>
            <label htmlFor='task-content-input'>
              Content
            </label>
            <textarea id='task-content-input' />
          </div>
          <div className='field'>
            <label htmlFor='task-category-select'>
              Category
            </label>
            <select id='task-category-select'>
              <option value={null}>...</option>
              {categories.map(category =>
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              )}
            </select>
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add task
            </button>
          </div>
        </TaskForm>
      </section>
    )
  }
}