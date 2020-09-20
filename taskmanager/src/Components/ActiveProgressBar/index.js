import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { container, label } from '../../Styles/styles'

const ActiveProgressBar = () => {
    const [completed, setCompleted] = useState(0);
    const dispatch = useDispatch()

    useEffect(() => {
        const interval = setInterval(() => {
            setCompleted(completed => {
                const newCompleted = completed + 20;
                if (newCompleted === 100) {
                    clearInterval(interval)
                    dispatch({
                        type: 'RESET_TASKS'
                    })
                }
                return newCompleted
            })
        }, 1000)
    }, []);

    const barStatus = completed === 100 ? `COMPLETED` : `${completed}%`

    const filler = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: 'blue',
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out',
    }
    return (
        <div style={container}>
            <div style={filler}>
                <span style={label}>{barStatus}</span>
            </div>
        </div>

    )
}

export default ActiveProgressBar;
