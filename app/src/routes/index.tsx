import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Problems from '../pages/Problems'

const Root: React.FC = () => (
    <BrowserRouter>
        <Route index element={Home} />
        <Route path="problems" element={Problems} />
    </BrowserRouter>
)

export default Root;