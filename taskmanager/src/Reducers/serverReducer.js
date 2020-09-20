const initialState = {
    noOfServers: 1,
    servers: [{
        state: 'running',
        noOfTasks: 0
    }]
}
const serverReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case 'ADD_SERVER':
            newState = {
                noOfServers: state.noOfServers + 1,
                servers: [...state.servers, action.payload]
            }
            return newState;
        case 'REMOVE_SERVER':
            state.servers.splice(action.payload, 1)
            newState = {
                noOfServers: state.noOfServers - 1,
                servers: state.servers
            }
            return newState
        default:
            return state
    }
}

export default serverReducer