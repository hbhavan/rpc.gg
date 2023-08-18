import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FormPage } from '../pages/Form'
import { GamesPage } from '../pages/Games'
import { HomePage } from '../pages/Home'
import { DefaultPage } from '../pages/Home/default'
import { routes } from './routes'

export const Navigation = () => {
    return(
    <BrowserRouter >
        <Routes>
            <Route path={routes.default} element={<DefaultPage />}/>
            <Route path={routes.home} element={<HomePage />}/>
            <Route path={routes.form} element={<FormPage />}/>
            <Route path={routes.games} element={<GamesPage />}/>
        </Routes>
    </BrowserRouter>
    )
}