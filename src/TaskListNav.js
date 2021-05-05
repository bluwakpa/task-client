import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from './CircleButton'
import { countTasksForCategory } from './tasks-helpers'
// import './index.css'

export default function TaskListNav(props) {
  return (
    <div className='TaskListNav'>
      <ul className='TaskListNav__list'>
        {props.categories.map(category =>
          <li key={category.id}>
            <NavLink
              className='TaskListNav__category-link'
              to={`/category/${category.id}`}
            >
              <span className='TaskListNav__num-tasks'>
                {countTasksForCategory(props.tasks, category.id)}
              </span>
              {category.name}
            </NavLink>
          </li>
        )}
      </ul>
      <div className='TaskListNav__button-wrapper'>
        <CircleButton
          tag={Link}
          to='/add-category'
          type='button'
          className='TaskListNav__add-category-button'
        >
          <FontAwesomeIcon icon='plus' />
          <br />
          Category
        </CircleButton>
      </div>
    </div>
  )
}

TaskListNav.defaultProps = {
    categories: []
}