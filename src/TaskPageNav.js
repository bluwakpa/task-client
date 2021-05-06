// import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import CircleButton from './CircleButton'
// import './index.css'

export default function TaskPageNav(props) {
  return (
    <div className='TaskPageNav'>
      <CircleButton
        tag='button'
        role='link'
        onClick={() => props.history.goBack()}
        className='TaskPageNav__back-button'
      >
        <FontAwesomeIcon icon='chevron-left' />
        <br />
        Back
      </CircleButton>
      {props.category && (
        <h3 className='TaskPageNav__category-name'>
          {props.category.name}
        </h3>
      )}
    </div>
  )
}

TaskPageNav.defaultProps = {
  history: {
    goBack: () => {}
  }
}