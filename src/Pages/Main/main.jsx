
import { Card } from '../../Components/Card/Card';
import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';
import { Search } from '../../Components/Search/Search';
import * as S from './main.styled';

export const Main = ({products}) => {
  

  return (
    <S.Wrapper>
      <S.Container>
        <Header />
        <main>
          <Search />
          <S.MainContainer>
            <S.MainH2>Объявления</S.MainH2>
            <S.MainContent>
              {products.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </S.MainContent>
          </S.MainContainer>
        </main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};

