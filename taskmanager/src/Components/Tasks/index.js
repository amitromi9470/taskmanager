import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import { flex, notification } from '../../Styles/styles'

const Task = () => {
    const totalTasks = useSelector(state => state.totalTasks.totalTasks)
    const dispatch = useDispatch();
    const [maxTaskReached, setMaxTaskReached] = useState(false);

    const addTask = () => {
        const value = parseInt(document.getElementById("taskValue").value);
        if (totalTasks + value > 100 || value < 0)
            return setMaxTaskReached(true)
        else {
            let i;
            for (i = totalTasks; i < totalTasks + value; i++) {
                const status = i === 0 ? 'active' : 'inactive'
                dispatch({
                    type: 'ADD_TASKS_ARRAY',
                    payload: {
                        key: i,
                        status
                    }
                })
            }
            dispatch({
                type: 'ADD_TASK',
                payload: value
            })
            setMaxTaskReached(false)
        }
    }

    return (
        <React.Fragment>
            <div style={flex}>
                <input id="taskValue" type="number" defaultValue={1} min="1" max="100" />
                <Button variant="success" onClick={addTask}>Add Task</Button>
            </div>
            <div>
                {maxTaskReached && <div style={notification}>Cannot Add the given number of tasks</div>}
            </div>
        </React.Fragment>
    )
}

export default Task