import { render } from 'react-dom'
import './css/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import Problems from './pages/problems'

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="problems" element={<Problems />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)
