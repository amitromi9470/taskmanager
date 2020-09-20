const initialState = {
    taskAdded:false,
    prevTasksValue:0,
    totalTasks: 0,
    inactiveTaskArray:[],
    activeTaskArray:[]  
}
const taskReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case 'ADD_TASK':
            newState = {
                taskAdded:true,
                prevTasksValue:state.totalTasks,
                totalTasks : state.totalTasks + action.payload,
                activeTaskArray:state.activeTaskArray,
                inactiveTaskArray:state.inactiveTaskArray
            }
            return newState
        case 'REMOVE_TASK':
            newState = {
                prevTasksValue:state.totalTasks,
                totalTasks:state.totalTasks - 1,
            }
            return state - 1
        default:
            return state
    }
}

export default taskReducer