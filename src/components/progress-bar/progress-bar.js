import React from 'react'
import { ProgressBar as BootstrapProgressBar} from 'react-bootstrap'

const ProgressBar = () => {
  return (
    <BootstrapProgressBar animated now={100} />
  )
}

export default ProgressBar;