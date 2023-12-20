import { Route, Routes } from 'react-router-dom';
import { Main } from './Pages/Main/main';
import { Profile } from './Pages/Profile/Profile';
import { SellerProfile } from './Pages/SellerProfile/SellerProfile';
import { Sign } from './Pages/Registration/sign';
import { Product } from './Pages/Product/Product';
import { NewProduct } from './Components/NewProductAdd/newProduct';
import { NotFound } from './Pages/NotFound/NotFound';
import { ProtectedRoute } from './ProtectedRoutes'

const products = [
  {
    id: 1,
    goods: 'Ракетка для большого тенниса Triumph Pro ST...',
    price: '3 200 ₽',
    place: 'Москва',
    time: 'Сегодня в 10:45',
  },
  {
    id: 2,
    goods: 'Ракетка для большого тенниса Triumph Pro ST...',
    price: '2 200 ₽',
    place: 'Санкт Петербург',
    time: 'Сегодня в 10:45',
  },
  {
    id: 3,
    goods: 'Ракетка для большого тенниса Triumph Pro ST...',
    price: '4 200 ₽',
    place: 'Минск',
    time: 'Сегодня в 10:45',
  },
  {
    id: 4,
    goods: 'Ракетка для большого тенниса Triumph Pro ST...',
    price: '6 200 ₽',
    place: 'Нижний Новгород',
    time: 'Сегодня в 10:45',
  },
];

export const AppRoutes = () => {

  return (
    <Routes>
      <Route path='/' element={<Main products={products} />} />
      <Route path='/reg' element={<Sign />} />
      <Route path='*' element={<NotFound />} />

      <Route element={<ProtectedRoute /> }>
          <Route path='/profile' element={<Profile products={products} />} />
          <Route path='/seller-profile' element={<SellerProfile products={products} />} />
          <Route path='/product/:id' element={<Product products={products} /> } />
          <Route path='/new-product' element={<NewProduct />} />
      </Route>
    </Routes>
  );
};
