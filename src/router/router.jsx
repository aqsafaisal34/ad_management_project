import { Route, Routes } from "react-router-dom"
import ROUTES from "./ROUTES"
import Auth from "../components/auth"
import Layout from "../components/layout"

const MyRouter = () => {
    return (
        <Routes>
            {ROUTES.map((route) => {
                return (
                    <Route
                        key={route.key}
                        path={route.path}
                        element={<Auth> { route.protected ? <Layout>{route.element}</Layout> : route.element } </Auth>}
                    />
                )
            })}
            <Route path="*" element={<>Not Found</>}/>
        </Routes>
    )
}

export default MyRouter