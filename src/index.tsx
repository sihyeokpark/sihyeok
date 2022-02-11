import { render } from 'react-dom'
import './css/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import Problems from './pages/problems'
import User from './pages/user'

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problems" element={<Problems />} />
            <Route path="/users" element={<Home />} />
            <Route path="/users/:id" element={<User />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)
