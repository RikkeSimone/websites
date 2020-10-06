import React from 'react'
import ReactDOM from 'react-dom'

import LisaApp from './components/LisaApp'
import { BrowserRouter } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter><LisaApp /></BrowserRouter>,
    document.getElementById('LisaApp')
  )
})
