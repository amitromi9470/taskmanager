import React, { useEffect, useState } from 'react';
import { container, label } from '../../Styles/styles'

const ActiveProgressBar = () => {
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCompleted(completed => {
                const newCompleted = completed + 20;
                if (newCompleted === 100) {
                    clearInterval(interval)
                }
                return newCompleted
            })
        }, 1000)
    }, []);

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
                <span style={label}>{`${completed}%`}</span>
            </div>
        </div>

    )
}

export default ActiveProgressBar;
