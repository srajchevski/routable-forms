import React, { useState } from 'react'
import { Provider } from 'react-redux'
import store from './reducers'
import SignupForm from './components/signup/Form'
import { SignupFormProps } from 'interfaces/signup'

import './App.scss'
import SubmittedScreen from 'components/submittedScreen/SubmittedScreen'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const App = () => {
  const [isSubmitted, setSubmitted] = useState(false)

  const onSubmit = async (values: SignupFormProps) => {
    await sleep(1200)
    console.log(values)
    setSubmitted(true)
  }

  return (
    <Provider store={store}>
      <h1 className="page-title">Routatest Signup Form</h1>
      {!isSubmitted ? <SignupForm onSubmit={onSubmit} /> : <SubmittedScreen />}
    </Provider>
  )
}

export default App
