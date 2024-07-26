import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRouter } from './routes/routes'
import Header from './components/Header/Header'

const App = () => {
    return (
        <div id="wrapper">
            <Header />
            <Routes>
                {publicRouter.map((route, index)=> {
                    const Page = route.component
                    return <Route key={index} path={route.path} element={<Page />} />                   
                })}
            </Routes>
        </div>
    )
}

export default App
