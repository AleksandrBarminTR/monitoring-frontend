import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import MergeRequestProps from './merge-request-props'
import MergeRequestTable from './merge-request-table'
import ProgressBar from '../../progress-bar/progress-bar'
import { loadMergeRequestsList } from './merge-request-participant.backend'

export default class MergeRequestParticipant extends Component {
  constructor() {
    super()

    this.loadNewProperties = this.loadNewProperties.bind(this)

    this.state = {
      loading: false,
      props: {
        opened: true,
        closed: false
      },
      requests: []
    }
  }

  loadNewProperties(newProperties) {
    this.setState(state => {
      state.props = newProperties
      return state
    }, this.loadRequests)
  }

  componentDidMount() {
    this.loadRequests()
  }

  loadRequests() {
    this.setState(
      state => {
        state.loading = true
        state.requests = []
        return state
      },
      () => {
        loadMergeRequestsList(this.props.participant.id, this.state.props).then(
          requests => {
            this.setState(state => {
              state.loading = false
              state.requests = requests
              return requests
            })
          }
        )
      }
    )
  }

  render() {
    const content = this.state.loading ? (
      <ProgressBar />
    ) : (
      <MergeRequestTable requests={this.state.requests} />
    )

    return (
      <Accordion defaultActiveKey="content">
        <Card>
          <Accordion.Toggle as={Card.Header} variant="link" eventKey="content">
            {this.props.participant.name}
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="content">
            <Card.Body>
              <MergeRequestProps
                properties={this.state.props}
                onChange={this.loadNewProperties}
              />
              {content}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    )
  }
}
