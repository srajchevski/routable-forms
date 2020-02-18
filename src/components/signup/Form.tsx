import React from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import Multiselect from 'components/form/multiselect/Multiselect'
import { SignupFormProps } from 'interfaces/signup'

import './styles.scss'
import 'react-widgets/dist/css/react-widgets.css'
import RadioButton from 'components/form/radioButton/RadioButton'
import Input from 'components/form/input/Input'

const fields = ['firstName', 'lastName', 'colors', 'sex']
const COLORS = ['Red', 'Yellow', 'Blue', 'Green', 'Purple']

const SignupForm: React.FC<InjectedFormProps<SignupFormProps>> = props => {
  const { handleSubmit, pristine, submitting, error } = props
  const isValid = !Boolean(error)

  return (
    <>
      <h1 className="form-title">Routatest Signup Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="form-input-row">
            <Field
              className="md-6"
              label="First Name"
              name="firstName"
              type="text"
              placeholder="First Name"
              component={Input}
            />
            <Field
              className="md-6"
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Last Name"
              component={Input}
            />
          </div>
          <div className="md-12">
            <Field
              name="colors"
              component={Multiselect}
              data={COLORS}
              placeholder="Select color(s)"
            />
          </div>
          <div className="form-input-row">
            <Field
              className="md-6"
              name="sex"
              type="radio"
              value="Male"
              component={RadioButton}
            />
            <Field
              className="md-6"
              name="sex"
              type="radio"
              value="Female"
              component={RadioButton}
            />
          </div>

          <div className="buttonWrapper">
            <button type="submit" disabled={!isValid || pristine || submitting}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

const validate = (values: any) => {
  const errors: any = {}

  fields.forEach(key => {
    if (!values[key]) errors[key] = 'Required'
    else if (key === 'colors' && !values[key].length) errors[key] = 'Required'
  })

  if (Object.keys(errors).length) errors._error = errors
  return errors
}

export default reduxForm<SignupFormProps>({
  form: 'signup',
  validate,
})(SignupForm)
