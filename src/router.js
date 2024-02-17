import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostPage} from "./pages/PostPage";

const router = createBrowserRouter([
    {path: '', element: <MainLayout/>,
        children:[
            {index: true, element: <Navigate to={'users'}/>},
            {path: '/users', element: <UsersPage/>,
            children: [
                {path:':id', element: <UserDetailsPage/>}
            ]},
            {path: 'post', element: <PostPage/>}
        ]}
])

export {router}