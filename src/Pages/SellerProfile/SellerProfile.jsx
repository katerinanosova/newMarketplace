import { HeaderSecond } from '../../Components/HeaderSecond/HeaderSecond';
import { ReturnToMain } from '../../Components/ReturnToMain.js/ReturnToMain';
import { Card } from '../../Components/Card/Card';
import { Footer } from '../../Components/Footer/Footer';
import * as S from './SellerProfile.styled';
import { NewProduct } from '../../Components/NewProductAdd/newProduct';

export const SellerProfile = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <HeaderSecond />
        <S.Main>
          <S.MainContainer>
            <S.MainCenterBlock>
              <ReturnToMain />
              <S.MainH2>Профиль продавца</S.MainH2>
              <S.MainProfileSell>
                <S.ProfileSellContent>
                  <S.ProfileSellSeller>
                    <S.SellerLeft>
                      <S.SellerImg>
                        <S.SellerLinkImg target='_self'>
                          <S.SellerImgImg src='#' alt='' />
                        </S.SellerLinkImg>
                      </S.SellerImg>
                    </S.SellerLeft>
                    <S.SellerRight>
                      <S.SellerTitle>Кирилл Матвеев</S.SellerTitle>
                      <S.SellerCity>Санкт-Петербург</S.SellerCity>
                      <S.SellerInf>Продает товары с августа 2021</S.SellerInf>

                      <S.SellerImgMobBlock>
                        <S.SellerImgMob>
                          <S.SellerImgMobLink target='_self'>
                            <S.SellerImgMobImg src='#' alt='' />
                          </S.SellerImgMobLink>
                        </S.SellerImgMob>
                      </S.SellerImgMobBlock>

                      <S.SellerBtn>
                        Показать&nbsp;телефон
                        <S.SellerBtnSpan>
                          8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ
                        </S.SellerBtnSpan>
                      </S.SellerBtn>
                    </S.SellerRight>
                  </S.ProfileSellSeller>
                </S.ProfileSellContent>
              </S.MainProfileSell>
              <S.MainTitle>Товары продавца</S.MainTitle>
            </S.MainCenterBlock>

            <S.MainContent>
              <S.ContentCards>
              {/* {products.map((product) => (
                <Card key={product.id} product={product} />
              ))} */}
              </S.ContentCards>
            </S.MainContent>
          </S.MainContainer>
        </S.Main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
