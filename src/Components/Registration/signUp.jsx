import { useState, useEffect } from 'react';
import * as S from './signIn.styled';
import * as SU from './signUp.styled';
import { registerUser } from '../../Api/api';
import { handleCity, handleName, handleSurname } from '../../helpers/sign';

export const SignUp = ({ setChoiceReg }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [passEqual, setPassEqual] = useState(false);
  const [error, setError] = useState(null);
  const [errorPass, setErrorPass] = useState(null);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [city, setCity] = useState('');
  const role = 'user';

  const handleEmail = (event) => {
    const trimmedValue = event.target.value.trim();
    const emailValidation = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    setEmail(trimmedValue);
    if (!emailValidation.test(trimmedValue)) {
      setError('Проверяйте вводимые символы');
    } else {
      setError(null);
    }
  };

  const handlePassword = (event) => {
    const trimmedValue = event.target.value.trim();
    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    if (!passwordValidation.test(trimmedValue)) {
      setErrorPass('От 6 символов с заглавными, строчными буквами и цифрами');
    } else {
      setErrorPass(null);
    }
    setPassword(trimmedValue);
  };

  const handleRepeatPassword = (event) => {
    setRepeatPassword(event.target.value.trim());
  };

  useEffect(() => {
    if (password && repeatPassword && password !== repeatPassword) {
      setPassEqual(false);
    } else {
      setPassEqual(true);
    }
  }, [password, repeatPassword]);

  const handleRegister = (event) => {
    event.preventDefault();

    if (!email) {
      setError('Введите email');
      return;
    }

    if (!password) {
      setError('Введите пароль');
      return;
    }

    if (password !== repeatPassword) {
      setErrorPass('Пароли не совпадают. Попробуйте еще раз');
      return;
    }

    const passwordValidation = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    if (!passwordValidation.test(password)) {
      setErrorPass('Пароль не соответствует требованиям');
      return;
    }

    registerUser(email, password, name, role, surname, city);
  };

  return (
    <S.Wrapper>
      <SU.ContainerSignup>
        <SU.ModalBlock>
          <SU.ModalFormLogin>
            <S.ModalLogo>
              <S.ModalLogoImg src='img/logo_modal.png' alt='' />
            </S.ModalLogo>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <S.ModalInputLogin
              value={email}
              onChange={handleEmail}
              type='email'
              placeholder='email'
            />
            {errorPass && <S.PassErrorMessage>{errorPass}</S.PassErrorMessage>}
            <S.ModalInputLogin
              value={password}
              onChange={handlePassword}
              type='text'
              placeholder='Пароль'
            />
            <S.ModalInputLoginRepeatPass
              $passEqual={passEqual}
              value={repeatPassword}
              onChange={handleRepeatPassword}
              type='text'
              placeholder='Повторите пароль'
            />
            <S.ModalInputLogin
              value={name}
              onChange={() => handleName(setName, event)}
              type='text'
              placeholder='Имя (необязательно)'
            />
            <S.ModalInputLogin
              value={surname}
              onChange={() => handleSurname(setSurname, event)}
              type='text'
              placeholder='Фамилия (необязательно)'
            />
            <S.ModalInputLogin
              value={city}
              onChange={() => handleCity(setCity, event)}
              type='text'
              placeholder='Город (необязательно)'
            />
            <SU.ModalBtnSignupEnt>
              <S.ModalBtnEnterLink onClick={handleRegister}>
                Зарегистрироваться
              </S.ModalBtnEnterLink>
            </SU.ModalBtnSignupEnt>
            <SU.ModalBtnSignupEnt>
              <S.ModalBtnEnterLink to='/profile'>
                Уже зарегистрирован
              </S.ModalBtnEnterLink>
            </SU.ModalBtnSignupEnt>
          </SU.ModalFormLogin>
        </SU.ModalBlock>
      </SU.ContainerSignup>
    </S.Wrapper>
  );
};
