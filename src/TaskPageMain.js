import React from 'react'
import Task from './Task'
// import './index.css'

export default function TaskPageMain(props) {
  return (
    <section className='TaskPageMain'>
      <Task
        id={props.task.id}
        name={props.task.name}
        modified={props.task.modified}
      />
      <div className='TaskPageMain__content'>
        {props.task.content.split(/\n \r|\n/).map((para, i) =>
          <p key={i}>{para}</p>
        )}
      </div>
    </section>
  )
}

TaskPageMain.defaultProps = {
    task: {
    content: '',
  }
}