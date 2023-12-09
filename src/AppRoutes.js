import { Route, Routes } from "react-router-dom"
import { Main } from "./Pages/Main/main"
import { Product } from "./Pages/Product/Product"
import { Sign } from "./Pages/Registration/sign"
import { NewProduct } from "./Components/NewProductAdd/newProduct"

export const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/product" element={<Product />} />
            <Route path="/sign" element={<Sign />} />
            <Route path="/newproduct" element={<NewProduct />} />
        </Routes>
    )
}