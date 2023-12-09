import { Link } from 'react-router-dom';
import * as S from './Header.styled';

export const Header = ({ buttonsPage, setButtonsPage }) => {

  return (
    <S.HeaderWrapper>
      <S.HeaderNav>
        {buttonsPage ? (
          <Link to='/profile'>
            <S.HeaderButton type='submit' onClick={() => setButtonsPage(false)}>
              Вход в личный кабинет
            </S.HeaderButton>
          </Link>
        ) : (
          <>
            <S.HeaderButton id='btputAd'>Разместить объявление</S.HeaderButton>
            <S.HeaderButtonSecond id='btnlk'>
              Личный кабинет
            </S.HeaderButtonSecond>
          </>
        )}
      </S.HeaderNav>
    </S.HeaderWrapper>
  );
};

