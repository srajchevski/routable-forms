import React from 'react'
import { WrappedFieldInputProps } from 'redux-form'
import InputContainer from '../inputContainer/InputContainer'
import './styles.scss'

interface Props {
  className: string
  meta: { touched: boolean; error: string }
  input: WrappedFieldInputProps
}

const RadioInput: React.FC<WrappedFieldInputProps> = props => {
  return (
    <label className="container">
      <input type="radio" {...props} />
      <span className="checkmark"></span>
      {props.value}
    </label>
  )
}

const RadioButton: React.FC<Props> = ({
  className,
  input,
  meta: { touched, error },
}) => (
  <div className={className}>
    <InputContainer isInvalid={Boolean(touched && error)}>
      <RadioInput {...input} />
    </InputContainer>
  </div>
)

export default RadioButton
