import {createBrowserRouter, Navigate} from "react-router-dom";

import {CharactersPage, EpisodesPage} from "./pages";
import {MainLayout} from "./layouts";


const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:[
            {index: true, element: <Navigate to={'episodes'}/>},

            {path: 'episodes', element: <EpisodesPage/>},

            {path: 'characters/:ids', element: <CharactersPage/>}
        ]}
])

export {router}