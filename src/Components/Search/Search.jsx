import * as S from './Search.styled';

export const Search = ({ setSearchAdv }) => {
  return (
    <S.MainSearch>
      <S.SearchLogoDesktop>
        <S.SearchLogoDesktopIcon src='/img/logo.png' />
      </S.SearchLogoDesktop>
      <S.SearchLogoMobile>
        <S.SearchLogoMobileIcon src='/img/logo-mob.png' />
      </S.SearchLogoMobile>
      <S.SearchForm>
        <S.SearchTextDesktop
          type='search'
          placeholder='Поиск по объявлениям'
          onChange={(e) => setSearchAdv(e.target.value)}
        />
        <S.SearchTextMobile
          type='search'
          placeholder='Поиск'
          onChange={(e) => setSearchAdv(e.target.value)}
        />
        <S.SearchButton type='submit'>Найти</S.SearchButton>
      </S.SearchForm>
    </S.MainSearch>
  );
};
