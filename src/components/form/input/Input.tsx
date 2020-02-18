import React from 'react'
import { WrappedFieldInputProps } from 'redux-form'
import InputContainer from '../inputContainer/InputContainer'
import '../common.scss'

interface RenderFieldProps {
  className: string
  label?: string
  input: WrappedFieldInputProps
  meta: { touched: boolean; error?: string }
  type: string
}

const Input: React.FC<RenderFieldProps> = ({
  className,
  label,
  input: { name, value, onChange },
  type,
  meta: { touched, error },
  ...inputProps
}) => (
  <div className={className}>
    <InputContainer isInvalid={Boolean(touched && error)}>
      {label && value && <label className="label-placeholder">{label}</label>}
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        {...inputProps}
      />
      {type === 'radio' && <span>{value}</span>}
    </InputContainer>
  </div>
)

export default Input
