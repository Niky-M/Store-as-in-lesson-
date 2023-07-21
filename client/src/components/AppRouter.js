import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes"
import { Context } from "../index";
import { SHOP_ROUTE } from "../utils/consts";
import Shop from "../pages/Shop";
import DevicePage from "../pages/DevicePage";
import Basket from "../pages/Basket";
import Auth from "../pages/Auth";
import Admin from "../pages/Admin";


const AppRouter = () =>{
    const {user} = useContext(Context)
    console.log(user)
    return(
        // <Routes>
        //      {user.isAuth && authRoutes.map(({path, Component}) =>
        //         <Route key={path} path={path} component={Component} exact/>
        //     )}
        //     {publicRoutes.map(({path, Component}) =>
        //         <Route key={path} path={path} component={Component} exact/>
        //     )}
        //     <Route path="*" element={<Navigate replace to={SHOP_ROUTE} />} />
        // </Routes>


        user.isAuth
            ?
            <Routes>
                <Route path="/" element={<Shop/>} />
                <Route path="/login" element={<Auth/>} />
                <Route path="/registration" element={<Auth/>} />
                <Route path="/device/:id" element={<DevicePage/>} />
                <Route path="/basket" element={<Basket/>} />
                <Route path="/admin" element={<Admin/>} />
                <Route path="*" element={<Navigate replace to={SHOP_ROUTE} />} />
            </Routes>
            :
            <Routes>
                <Route path="/" element={<Shop/>} />
                <Route path="/login" element={<Auth/>} />
                <Route path="/registration" element={<Auth/>} />
                <Route path="/device/:id" element={<DevicePage/>} />
                <Route path="*" element={<Navigate replace to={SHOP_ROUTE} />} />
            </Routes>

    )
}
export default AppRouter;