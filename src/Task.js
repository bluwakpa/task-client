import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'

export default function Task(props) {
  return (
    <div className='Task'>
      <h2 className='Task__title'>
        <Link to={`/task/${props.id}`}>
          {props.name}
        </Link>
      </h2>
      <button className='Task__delete' type='button'>
        {/* <FontAwesomeIcon icon='trash-alt' /> */}
        {/* {' '} */}
        remove
      </button>
      <div className='Task__dates'>
        <div className='Task__dates-modified'>
          Modified
          {' '}
          <span className='Date'>
            {format(props.modified, 'Do MMM YYYY')}
          </span>
        </div>
      </div>
    </div>
  )
}