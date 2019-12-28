import React from 'react'
import Badge from 'react-bootstrap/Badge'

const BuildNotResolvedCell = ({ request }) => {
  return (
    <td>
      <Badge variant="danger">Build not resolved</Badge>
    </td>
  )
}

export default BuildNotResolvedCell
