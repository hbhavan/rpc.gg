import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { FormPage } from '../pages/Form'
import { GamesPage } from '../pages/Games'
import { HomePage } from '../pages/Home'
import { routes } from './routes'

export const Navigation = () => {
    return(
    <BrowserRouter >
        <Routes>
            <Route path={routes.home} element={<HomePage />}/>
            <Route path={routes.form} element={<FormPage />}/>
            <Route path={routes.games} element={<GamesPage />}/>
        </Routes>
    </BrowserRouter>
    )
}