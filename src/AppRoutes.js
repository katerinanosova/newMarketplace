import { Route, Routes } from "react-router-dom"
import { Main } from "./Pages/Main/main"
import { Product } from "./Pages/Product/Product"

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/product" element={<Product />} />
        </Routes>
    )
}