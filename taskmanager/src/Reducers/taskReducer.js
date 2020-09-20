const initialState = {
    totalTasks: 0,
    taskArray: [],
}
const taskReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case 'ADD_TASK':
            newState = {
                totalTasks: state.totalTasks + action.payload,
                taskArray: state.taskArray
            }
            return newState
        case 'RESET_TASKS':
            if (state.totalTasks === 1) {
                newState = {
                    totalTasks: 0,
                    taskArray: []
                }
            }
            else {
                state.taskArray.splice(0, 1)
                state.taskArray[0].status = 'active'
                newState = {
                    totalTasks: state.totalTasks - 1,
                    taskArray: state.taskArray
                }
            }
            return newState
        case 'ADD_TASKS_ARRAY':
            newState = { ...state, taskArray: [...state.taskArray, action.payload] }
            return newState
        default:
            return state
    }
}

export default taskReducer