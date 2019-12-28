import React from 'react'
import Button from 'react-bootstrap/Button'

const GitHubStatusCell = ({ request }) => {
  const content =
    request.ghStatus === 'open' ? (
      <Button variant="success" size="sm">
        Open
      </Button>
    ) : (
      <Button variant="info" size="sm">
        Closed
      </Button>
    )

  return <td>{content}</td>
}

export default GitHubStatusCell
