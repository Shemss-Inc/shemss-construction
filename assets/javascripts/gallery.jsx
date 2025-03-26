import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './gallery/App'

window.Application = {
  start (props) {
    createRoot(document.getElementById('ApplicationRoot'))
    .render(<StrictMode><App {...props} /></StrictMode>)
  }
}
