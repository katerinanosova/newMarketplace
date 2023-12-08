import * as S from "./Search.styled"

export const Search = () => {

    return (
        <S.MainSearch>
            <S.SearchLogoDesktop>
                <S.SearchLogoDesktopIcon src="/img/logo.png" />
            </S.SearchLogoDesktop>
            <S.SearchLogoMobile>
                <S.SearchLogoMobileIcon src="/img/logo-mob.png" />
            </S.SearchLogoMobile>
            <S.SearchForm>
                <S.SearchTextDesktop type="search"
                    placeholder="Поиск по объявлениям"
                    name="search" />
                <S.SearchTextMobile type="search"
                placeholder="Поиск"
                name="search-mob" />
                <S.SearchButton type="submit">Найти</S.SearchButton>
            </S.SearchForm>
        </S.MainSearch>
    )
}