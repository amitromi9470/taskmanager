import React from 'react'
import { useSelector} from 'react-redux'
import Server from './Components/Server'
import Task from './Components/Tasks'
import InactiveProgressBar from './Components/InactiveProgressBar'
import ActiveProgessBar from './Components/ActiveProgressBar'
import { Container, Row, Col } from 'react-bootstrap'
import { body } from './Styles/styles'

function App() {
  const taskArray = useSelector(state => state.totalTasks.taskArray)
  const totalTasks = useSelector(state => state.totalTasks.totalTasks)

  const renderBars = () => {
    return taskArray.map(task => {
      if (task.status === 'active') {
        return <ActiveProgessBar key={task.key}/>
      }
      else
        return <InactiveProgressBar/>
    })
  }

  return (
    <div style={body}>
      <Container>
        <Row>
          <Col lg={3}><Task /></Col>
          <Col lg={4}>
            {totalTasks > 0 && renderBars()}
          </Col>
          <Col lg={{ span: 3, offset: 2 }}><Server /></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
