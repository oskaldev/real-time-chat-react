import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

const root = createRoot(document.getElementById('root'))
root.render(<App />)
const devMode = process.env.NODE_ENV === 'development'
if (devMode && module && module.hot) {
  module.hot.accept()
}