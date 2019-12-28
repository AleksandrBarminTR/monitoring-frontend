import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import GitHubStatusCell from './github-status-cell'
import GitHubLinkCell from './github-link-cell'
import JiraLinkCell from './jira-link-cell'
import JiraStatusCell from './jira-status-cell'
import BuildStatusCell from './build-status-cell'

export default class MergeRequestTable extends Component {
  render() {
    const rows = this.props.requests.map((request, index) => {
      return (
        <tr key={index}>
          <GitHubStatusCell request={request} />
          <GitHubLinkCell request={request} />
          <JiraLinkCell request={request} />
          <JiraStatusCell request={request} />
          <BuildStatusCell request={request} />
        </tr>
      )
    })

    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>GitHub Link</th>
            <th>Jira Link</th>
            <th>Jira Status</th>
            <th>Build Link</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    )
  }
}
