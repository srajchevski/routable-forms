import React from 'react'
import { Multiselect as MultiselectInput } from 'react-widgets'

const Multiselect: React.FC = ({
  input,
  data,
  meta: { touched, error },
  placeholder,
  valueField,
  textField,
}: any) => (
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
)

export default Multiselect
