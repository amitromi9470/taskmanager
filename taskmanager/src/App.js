import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Server from './Components/Server'
import Task from './Components/Tasks'
import InactiveProgressBar from './Components/InactiveProgressBar'
import ActiveProgessBar from './Components/ActiveProgressBar'
import { Container, Row, Col } from 'react-bootstrap'
import {body} from './Styles/styles'

function App() {
  const totalTasks = useSelector(state => state.totalTasks.totalTasks)
  const prevTasksValue = useSelector(state => state.totalTasks.prevTasksValue)
  const inactiveTaskArray = useSelector(state => state.totalTasks.inactiveTaskArray)
  const activeTaskArray = useSelector(state => state.totalTasks.activeTaskArray)
  const taskAdded = useSelector(state => state.totalTasks.taskAdded)

  const renderInactiveProgressBar = () => {
    const newTaskAdded = totalTasks - prevTasksValue;
    if (prevTasksValue === 0 && newTaskAdded > 1) {
      let j;
      for (j = 1; j < newTaskAdded; j++) {
        inactiveTaskArray.push(j)
      }
      return inactiveTaskArray.map(key => {
        return <InactiveProgressBar barKey={key + prevTasksValue} />
      })
    }
    if (prevTasksValue > 0) {
      let i;
      for (i = prevTasksValue; i < totalTasks; i++) {
        inactiveTaskArray.push(i)
      }
      return inactiveTaskArray.map(key => {
        return <InactiveProgressBar barKey={key + prevTasksValue} />
      })
    }
  }

  const renderActiveProgressBar = () => {
    if (taskAdded && prevTasksValue >= 0)
      return <ActiveProgessBar />
    return null
  }

  return (
    <div style={body}>
      <Container>
        <Row>
          <Col lg={3}><Task /></Col>
          <Col lg={4}>
            {renderActiveProgressBar()}
            {taskAdded && renderInactiveProgressBar()}
          </Col>
          <Col lg={{ span: 3, offset: 2 }}><Server /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
