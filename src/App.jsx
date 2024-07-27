import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { publicRouter } from './routes/routes'
import Header from './components/Header/Header'

const App = () => {

    const [showHeading, setShowHeading] = useState('')

    return (
        <Router>
            <div id="wrapper">
                <Header />
                <Routes>
                    {publicRouter.map((route, index)=> {
                        const Page = route.component
                        return <Route key={index} path={route.path} element={<Page />} />                   
                    })}
                </Routes>
            </div>
        </Router>
    )
}

export default App
