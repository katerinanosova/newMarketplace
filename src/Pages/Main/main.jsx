
import { useGetAllAdsQuery } from '../../Store/RTKQuery/getAds';
import { Card } from '../../Components/Card/Card';
import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';
import { Search } from '../../Components/Search/Search';
import * as S from './main.styled';
export const Main = ({products}) => {
  const {data =[], isLoading} = useGetAllAdsQuery();
  if(!isLoading) {
    console.log(data);
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

