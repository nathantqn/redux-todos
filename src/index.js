import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(rootReducer)
const root: ?Element = document.getElementById('root');

if (root != null) {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  )
}

