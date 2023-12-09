import { Card } from '../../Components/Card/Card';
import { Footer } from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import * as S from './SellerProfile.styled';

export const SellerProfile = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.HeaderNav>
            <S.HeaderLogo>
              <S.LogoMobLink target='_blank'>
                <S.LogoMobImg src='img/logo-mob.png' alt='logo' />
              </S.LogoMobLink>
            </S.HeaderLogo>
            <S.HeaderBtnPutAd>Разместить объявление</S.HeaderBtnPutAd>
            <S.HeaderButtonSecond>Личный кабинет</S.HeaderButtonSecond>
          </S.HeaderNav>
        </S.Header>

        <S.Main>
          <S.MainContainer>
            <S.MainCenterBlock>
              <S.Menu>
                <S.MenuLogoLink>
                  <S.MenuLogoImg src='img/logo.png' alt='logo' />
                </S.MenuLogoLink>
                <S.MenuForm action='#'>
                  <Link to='/'>
                    <S.MenuBtn>Вернуться на&nbsp;главную</S.MenuBtn>
                  </Link>
                </S.MenuForm>
              </S.Menu>
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

                      <S.SellerBtn className='seller__btn btn-hov02'>
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
              <S.Cards>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </S.Cards>
            </S.MainContent>
          </S.MainContainer>
        </S.Main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};