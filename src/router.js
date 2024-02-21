import {createBrowserRouter, Navigate} from "react-router-dom";
import {AuthLayout, MainLayout, PublicLayout} from "./layouts";
import {CarsPage, LoginPage, RegisterPage} from "./pages";

const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:[
            {index:true, element:<Navigate to={'login'}/>},

            {element:<PublicLayout/>, children:[//не треба path, бо це як контейнер для ел. з публічним доступом
                    {path: 'login', element:<LoginPage/>},
                    {path: 'register', element:<RegisterPage/>}
                ]
            },
            {element: <AuthLayout/>, children:[
                    {path: 'cars', element: <CarsPage/>}
                ]}
        ]}
])

export {router}