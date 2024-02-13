import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {ErrorPage} from "./pages/ErrorPage";
import {Todos} from "./components/TodosContainer/Todos";
import {Albums} from "./components/AlbumsContainer/Albums";
import {Comments} from "./components/CommentsContainer/Comments";
import {Posts} from "./components/PostsContainer/Posts";

const router = createBrowserRouter([
    {path:'', element: <MainLayout/>, errorElement:<ErrorPage/>,
    children:[
        {path: 'todos', element: <Todos/>},
        {path: 'albums', element: <Albums/>},
        {path: 'comments', element: <Comments/>,
        children:[
            {path: 'posts', element: <Posts/>}
        ]}

    ]}
]);

export {router}