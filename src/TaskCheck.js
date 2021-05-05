import { Link } from 'react-router-dom'

export default function TaskCheck({ task, checked, setChecked }) {
    console.log('checked', checked, 'task.id', task.id)
    return (
        <div>
            <label htmlFor="check">
                <Link to={`/edit-task/${task.id}`}>
                    <button type='submit'> E </button>
                </Link>
                <span>{task.last_name}, {task.first_name}</span>
                {/* setStudents to new version of students */}
                <input onChange={(e) => setChecked(!checked)} type="checkbox" name="check"
                    id="check" checked={checked} className="attendance">
                </input>
            </label>
            </div>
    )
} 