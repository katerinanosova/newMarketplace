import { useState } from 'react';
import { handleEmail, handlePassword, handleSignIn } from '../../helpers/sign';
import * as S from './signIn.styled';
import { useDispatch } from 'react-redux';

export const SignIn = ({ setChoiceReg }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleEmail = (event) => {
    const emailValidation = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    setEmail(event.target.value.trim());
    if (!emailValidation.test(event.target.value.trim())) {
      setError('Проверяйте вводимые символы');
    } else {
      setError(null);
    }
  };

  const handlePassword = (event) => {
    const trimmedValue = event.target.value.trim();
    if (trimmedValue.length < 6) {
      setError('Пароль должен быть не менее 6 символов');
    } else {
      setError(null);
    }
    setPassword(trimmedValue);
  };

  return (
    <S.Wrapper>
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin>
            <S.ModalLogo>
              <S.ModalLogoImg src='img/logo_modal.png' alt='' />
            </S.ModalLogo>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <S.ModalInputLogin
              value={email}
              onChange={handleEmail}
              type='text'
              placeholder='email'
            />
            <S.ModalInputPassword
              value={password}
              onChange={handlePassword}
              type='password'
              placeholder='Пароль'
            />
            <S.ModalBtnEnter>
              <S.ModalBtnEnterLink>Войти</S.ModalBtnEnterLink>
            </S.ModalBtnEnter>
            <S.ModalBtnSignup>
              <S.ModalBtnSignupLink onClick={() => setChoiceReg(false)}>
                Зарегистрироваться
              </S.ModalBtnSignupLink>
            </S.ModalBtnSignup>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </S.Wrapper>
  );
};
