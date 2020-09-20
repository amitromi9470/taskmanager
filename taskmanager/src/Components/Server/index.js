import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { flex } from '../../Styles/styles'

const Server = (props) => {
    const serverState = useSelector(state => state.servers) // Remove this line
    const servers = useSelector(state => state.servers.servers)
    const serverCount = useSelector(state => state.servers.noOfServers)
    const dispatch = useDispatch()


    const addServer = () => {
        if (serverCount < 10) {
            dispatch({
                type: 'ADD_SERVER',
                payload: {
                    state: "idle",
                    noOfTasks: 0
                }
            })
        }
    }

    const removeServer = () => {
        const serverIndex = servers.findIndex(server =>
            server.state === 'idle' && server.noOfTasks === 0
        )
        if (serverIndex >= 0) {
            dispatch({
                type: 'REMOVE_SERVER',
                payload: serverIndex
            })
        }
    }

    return (
        <div style={flex}>
            <Button variant="success" onClick={addServer} disabled={serverCount === 10}>Add Server</Button>
            <Button variant="success" onClick={removeServer} disabled={serverCount === 1}>Remove Server</Button>
        </div>
    )
}

export default Server