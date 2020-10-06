import React from 'react'
import ReactDOM from 'react-dom'

import LisaApp from '../lisa/client/components/LisaApp'
import { BrowserRouter } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter><LisaApp /></BrowserRouter>,
    document.getElementById('LisaApp')
  )
})
