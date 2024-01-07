import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FPRankings } from '../pages/FriendPoints'
import { HomePage } from '../pages/Home'
import { DefaultPage } from '../pages/Home/default'
import { routes } from './routes'

export const Navigation = () => {
    return(
    <BrowserRouter >
        <Routes>
            <Route path={routes.default} element={<DefaultPage />}/>
            <Route path={routes.home} element={<HomePage />}/>
            <Route path={routes.friendPoints2023} element={<FPRankings />}/>
        </Routes>
    </BrowserRouter>
    )
}