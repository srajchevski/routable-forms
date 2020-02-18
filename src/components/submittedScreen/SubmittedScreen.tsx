import React from 'react'

import './styles.scss'

const SubmittedScreen = () => {
  return (
    <div className="container">
      <h1 className="title">
        <span role="img" aria-label="">
          👍
        </span>{' '}
        Good job.
      </h1>
      <p className="text">Your information has been successfully submitted!</p>
    </div>
  )
}

export default SubmittedScreen
