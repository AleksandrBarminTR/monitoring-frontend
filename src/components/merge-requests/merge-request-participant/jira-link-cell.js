import React from 'react'
import JiraNotResolvedCell from './jira-not-resolved-cell'

const JiraLinkCell = ({ request }) => {
  if (request.jiraResolved === false) {
    return <JiraNotResolvedCell />
  }

  return (
    <td>
      <a href={request.jiraLink} target="_blank" rel="noopener noreferrer">
        {request.jiraLink}
      </a>
    </td>
  )
}

export default JiraLinkCell
