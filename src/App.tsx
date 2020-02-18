import React from 'react'
import { Provider } from 'react-redux'
import store from './reducers'
import SignupForm from './components/signup/Form'
import { SignupFormProps } from 'interfaces/signup'

import './App.css'

const App = () => {
  const onSubmit = (values: SignupFormProps) => {
    console.log(values)
  }

  return (
    <Provider store={store}>
      <SignupForm onSubmit={onSubmit} />
    </Provider>
  )
}

export default App
