import { render } from 'react-dom'
import './css/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home'
import ProblemList from './pages/problemlist'
import Problems from './pages/problems'
import User from './pages/user'
import NotFound from './pages/notfound'

render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/problems" element={<ProblemList />} />
            <Route path="/problems/:id" element={<Problems />} />
            <Route path="/users" element={<Home />} />
            <Route path="/users/:id" element={<User />} />

            <Route path="*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)
