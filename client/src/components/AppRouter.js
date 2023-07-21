import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes"
import { Context } from "../index";
import { SHOP_ROUTE } from "../utils/consts";


const AppRouter = () =>{
    const {user} = useContext(Context)
    console.log(user)
    return(
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path} component={Component} exact />
            )}
            {publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} component={Component} exact />
            )}
            <Route path="/" element={<Navigate replace to="/" />} />
        </Routes>

    )
}
export default AppRouter;