import { render } from 'react-dom'
import './css/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Problems from './pages/Problems'

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="problems" element={<Problems />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)
