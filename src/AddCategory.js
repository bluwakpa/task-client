import React, { Component } from 'react'
import TaskForm from './TaskForm'
import './index.css'

export default class AddCategory extends Component {
  render() {
    return (
      <section className='AddCategory'>
        <h2>Create a category</h2>
        <TaskForm>
          <div className='field'>
            <label htmlFor='category-name-input'>
              Name
            </label>
            <input type='text' id='category-name-input' />
          </div>
          <div className='buttons'>
            <button type='submit'>
              Add category
            </button>
          </div>
        </TaskForm>
      </section>
    )
  }
}