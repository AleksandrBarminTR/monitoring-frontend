import React, { Component } from 'react'
import { loadParticipantsList } from './merge-request-list.backend'
import MergeRequestParticipant from '../merge-request-participant/merge-request-participant'
import ProgressBar from '../../progress-bar/progress-bar'

export default class MergeRequestList extends Component {
  constructor() {
    super()

    this.state = {
      loading: false,
      participants: []
    }
  }

  componentDidMount() {
    this.loadParticipants()
  }

  loadParticipants() {
    this.setState(
      {
        loading: true,
        participants: []
      },
      () => {
        loadParticipantsList().then(participants => {
          this.setState({
            loading: false,
            participants: participants
          })
        })
      }
    )
  }

  render() {
    if (this.state.loading) {
      return <ProgressBar />
    }

    const participants = this.state.participants.map(participant => {
      return (
        <MergeRequestParticipant
          key={participant.id}
          participant={participant}
        />
      )
    })

    return <div>{participants}</div>
  }
}
