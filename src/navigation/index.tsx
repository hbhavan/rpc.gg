import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/Home'
import { routes } from './routes'

export const Navigation = () => {
    return(
    <BrowserRouter >
        <Routes>
            <Route path={routes.home} element={<HomePage/>}/>
        </Routes>
    </BrowserRouter>
    )
}