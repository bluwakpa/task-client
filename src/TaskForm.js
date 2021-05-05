import React from 'react'
// import './index.css'

export default function TaskForm(props) {
    const { className, ...otherProps } = props
    return (
        <form
            className={['Task-form', className].join(' ')}
            action='#'
            {...otherProps}
        />
    )
}