
import { useGetAllAdsQuery } from '../../Store/RTKQuery/getAds';
import { Card } from '../../Components/Card/Card';
import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';
import { Search } from '../../Components/Search/Search';
import * as S from './main.styled';
import { useDispatch } from 'react-redux';
import { saveProducts } from '../../Store/Slices/dataProductsSlice';
import { HeaderSecond } from '../../Components/HeaderSecond/HeaderSecond';
import { NewProduct } from '../../Components/NewProductAdd/newProduct';

export const Main = ({products}) => {
  
  const dispatch = useDispatch();
  const {data =[], isSuccess} = useGetAllAdsQuery();
  if(isSuccess) {
    dispatch(saveProducts({data}))
    console.log(data);
  }

   // заглушка на залогиненного юзера
  const userLoggedIn = true;

  return (
    <S.Wrapper>
      <S.Container>
      {userLoggedIn ? <HeaderSecond /> : <Header />}
        <S.Main>
          <Search />
          <S.MainContainer>
            <S.MainH2>Объявления</S.MainH2>
            <S.MainContent>
              {data.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </S.MainContent>
          </S.MainContainer>
        </S.Main>
        {/* {newProductModal ? 
             <NewProduct setNewProductModal={setNewProductModal} /> : null} */}
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};

