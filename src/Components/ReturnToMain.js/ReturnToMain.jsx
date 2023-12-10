import { Link } from 'react-router-dom';
import * as S from './ReturnToMain.styled';

export const ReturnToMain = () => {
  return (
    <S.MainReturnToMain>
      <S.ReturnToMainLogoDesktop>
        <S.ReturnToMainLogoDesktopIcon src='/img/logo.png' />
      </S.ReturnToMainLogoDesktop>
      <S.ReturnToMainLogoMobile>
        <S.ReturnToMainLogoMobileIcon src='/img/logo-mob.png' />
      </S.ReturnToMainLogoMobile>
      <S.ReturnToMainForm>
        <Link to='/'>
          <S.ReturnToMainButton type='submit'>
            Вернуться на главную
          </S.ReturnToMainButton>
        </Link>
      </S.ReturnToMainForm>
    </S.MainReturnToMain>
  );
};
