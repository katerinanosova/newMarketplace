import { Route, Routes } from 'react-router-dom';
import { Main } from './Pages/Main/main';
import { Profile } from './Pages/Profile/Profile';
import { SellerProfile } from './Pages/SellerProfile/SellerProfile';
import { Product } from './Pages/Product/Product';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/seller-profile' element={<SellerProfile />} />
      <Route path='/product' element={<Product />} />
    </Routes>
  );
};
