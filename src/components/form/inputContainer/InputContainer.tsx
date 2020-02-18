import React from 'react'

import './styles.scss'

interface Props {
  children: any
  isInvalid?: boolean
}

const InputContainer: React.FC<Props> = ({ children, isInvalid }) => {
  return (
    <div className={`inputContainer ${isInvalid ? 'error' : ''}`}>
      {children}
    </div>
  )
}

export default InputContainer
