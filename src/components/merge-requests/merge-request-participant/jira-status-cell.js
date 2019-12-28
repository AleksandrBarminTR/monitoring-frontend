import React from 'react'
import JiraNotResolvedCell from './jira-not-resolved-cell'

const JiraStatusCell = ({ request }) => {
  if (request.jiraResolved === false) {
    return <JiraNotResolvedCell />
  }

  return (
    <td>
      {request.jiraStatus}
    </td>
  )
}

export default JiraStatusCell