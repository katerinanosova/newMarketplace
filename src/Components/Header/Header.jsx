import * as S from './Header.styled';

export const Header = () => {
    
    return (
        <S.HeaderWrapper>
            <S.HeaderNav>
                <S.HeaderButton type='submit' id="btnMainEnter" >Вход в личный кабинет</S.HeaderButton>
            </S.HeaderNav>
        </S.HeaderWrapper>
    )
}