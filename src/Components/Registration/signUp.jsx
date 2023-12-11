import { useState } from 'react';
import * as S from './signIn.styled';
import * as SU from './signUp.styled';
import { registerUser } from '../../Api/api';
import { handleCity, handleEmail, handleName, handlePassword, handleRepeatPassword, handleSurname } from '../../helpers/sign';

export const SignUp = ({ setChoiceReg }) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [repeatPassword,setRepeatPassword] = useState('');
  const [name,setName] = useState('');
  const [surname,setSurname] = useState('');
  const [city,setCity] = useState('');
  const role = 'user';
  return (
    <S.Wrapper>
      <SU.ContainerSignup>
        <SU.ModalBlock>
          <SU.ModalFormLogin>
            <S.ModalLogo>
              <S.ModalLogoImg src='img/logo_modal.png' alt='' />
            </S.ModalLogo>
            <S.ModalInputLogin value={email} onChange={() => handleEmail(setEmail, event)} type='text' placeholder='email' />
            <S.ModalInputLogin value={password} onChange={() => handlePassword(setPassword, event)} type='password' placeholder='Пароль' />
            <S.ModalInputLogin value={repeatPassword} onChange={() => handleRepeatPassword(setRepeatPassword, event)} type='password' placeholder='Повторите пароль' />
            <S.ModalInputLogin value={name} onChange={() => handleName(setName, event)} type='text' placeholder='Имя (необязательно)' />
            <S.ModalInputLogin
            value={surname} onChange={() => handleSurname(setSurname, event)}
              type='text'
              placeholder='Фамилия (необязательно)'
            />
            <S.ModalInputLogin
            value={city} onChange={() => handleCity(setCity, event)}
              type='text'
              placeholder='Город (необязательно)'
            />
            <SU.ModalBtnSignupEnt>
              <S.ModalBtnEnterLink onClick={() => registerUser(email, password, name, role, surname, city)}>Зарегистрироваться</S.ModalBtnEnterLink>
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
