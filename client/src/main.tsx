import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import globalReducer from "@/state"
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {setupListeners} from "@reduxjs/toolkit/query"
import {api} from "@/state/api"
import { configureStore } from '@reduxjs/toolkit'

const store  = configureStore({
  reducer : {
    global :globalReducer,
    [api.reducerPath] : api.reducer
  },
  middleware :(getDefault) => getDefault().concat(api.middleware)
})
setupListeners(store.dispatch)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
