import React from 'react'

const GitHubLinkCell = ({ request }) => {
  return (
    <td>
      <a href={request.ghLink} target="_blank" rel="noopener noreferrer">
        {request.ghLink.substr(20)}...
      </a>
    </td>
  )
}

export default GitHubLinkCell
