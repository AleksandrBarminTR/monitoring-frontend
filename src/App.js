import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavigationBar from './components/navigation-bar/navigation-bar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MergeRequestList from './components/merge-requests/merge-request-list/merge-request-list'

function App() {
  return (
    <Router>
      <Container>
        <NavigationBar />
      </Container>
      <Container>
        <Row>
          <Col>
            <Switch>
              <Route path="/">
                <MergeRequestList />
              </Route>
            </Switch>
          </Col>
        </Row>
      </Container>
    </Router>
  )
}

export default App
