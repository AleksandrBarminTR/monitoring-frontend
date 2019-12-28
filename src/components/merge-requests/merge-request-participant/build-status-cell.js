import React from 'react'
import BuildNotResolvedCell from './build-not-resolved-cell'

const BuildStatusCell = ({ request }) => {
  if (request.buildResolved === false) {
    return <BuildNotResolvedCell />
  }

  return <td>{request.buildStatus}</td>
}

export default BuildStatusCell
