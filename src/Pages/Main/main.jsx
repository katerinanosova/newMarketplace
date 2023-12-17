
import { useGetAllAdsQuery } from '../../Store/RTKQuery/getAds';
import { Card } from '../../Components/Card/Card';
import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';
import { Search } from '../../Components/Search/Search';
import * as S from './main.styled';
import { useDispatch } from 'react-redux';
import { saveProducts } from '../../Store/Slices/dataProductsSlice';

export const Main = ({products}) => {
  
  const dispatch = useDispatch();
  const {data =[], isLoading} = useGetAllAdsQuery();
  if(!isLoading) {
    dispatch(saveProducts({data}))
  }

  return (
    <S.Wrapper>
      <S.Container>
        <Header />
        <S.Main>
          <Search />
          <S.MainContainer>
            <S.MainH2>Объявления</S.MainH2>
            <S.MainContent>
              {products.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </S.MainContent>
          </S.MainContainer>
        </S.Main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};

