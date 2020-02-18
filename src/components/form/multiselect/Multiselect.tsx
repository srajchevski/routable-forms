import React from 'react'
import { Multiselect as MultiselectInput } from 'react-widgets'
import InputContainer from '../inputContainer/InputContainer'

const Multiselect: React.FC = ({
  input,
  data,
  meta: { touched, error },
  placeholder = '',
  valueField,
  textField,
}: any) => (
  <InputContainer>
    {placeholder && input.value && input.value && (
      <label className="label-placeholder" style={{ marginBottom: 0 }}>
        {placeholder}
      </label>
    )}
    <MultiselectInput
      {...input}
      containerClassName={`multiselect ${touched && error ? 'error' : ''}`}
      placeholder={placeholder}
      onBlur={() => input.onBlur()}
      value={input.value || []}
      data={data}
      valueField={valueField}
      textField={textField}
    />
  </InputContainer>
)

export default Multiselect
