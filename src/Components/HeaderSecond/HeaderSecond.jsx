import * as S from './HeaderSecond.styled';

export const HeaderSecond = () => {
  return (
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
  );
};
