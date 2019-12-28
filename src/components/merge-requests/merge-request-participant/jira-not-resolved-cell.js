import React from 'react'
import Badge from 'react-bootstrap/Badge'

const JiraNotResolvedCell = ({ request }) => {
  return (
    <td>
      <Badge variant="danger">Jira not resolved</Badge>
    </td>
  )
}

export default JiraNotResolvedCell
