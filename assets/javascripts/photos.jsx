import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Photos from './gallery/Photos'

window.Application = {
  start (props) {
    createRoot(document.getElementById('ApplicationRoot'))
    .render(<StrictMode><Photos {...props} /></StrictMode>)
  }
}
