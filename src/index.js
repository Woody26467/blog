import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './components/App'
import reducers from './reducers'
import thunk from 'redux-thunk'

const root = createRoot(document.getElementById('root'))

const store = createStore(reducers, applyMiddleware(thunk))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
