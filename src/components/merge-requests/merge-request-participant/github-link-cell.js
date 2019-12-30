import React from 'react'

const GitHubLinkCell = ({ request }) => {
  return (
    <td>
      <a href={request.githubLink} target="_blank" rel="noopener noreferrer">
        {request.githubTitle}
      </a>
    </td>
  )
}

export default GitHubLinkCell
