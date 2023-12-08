import * as S from './signIn.styled';
import * as SU from './signUp.styled';

export const SignUp = () => {
    return (
        <S.Wrapper>
            <SU.ContainerSignup>
                <SU.ModalBlock>
                    <SU.ModalFormLogin>
                        <S.ModalLogo><S.ModalLogoImg src='img/logo_modal.png' alt=''/></S.ModalLogo>
                        <S.ModalInputLogin type="text" placeholder="email"/>
                        <S.ModalInputLogin type="password" placeholder="Пароль"/>
                        <S.ModalInputLogin type="password" placeholder="Повторите пароль"/>
                        <S.ModalInputLogin type="text" placeholder="Имя (необязательно)"/>
                        <S.ModalInputLogin type="text" placeholder="Фамилия (необязательно)"/>
                        <S.ModalInputLogin type="text" placeholder="Город (необязательно)"/>
                        <SU.ModalBtnSignupEnt><S.ModalBtnEnterLink>Зарегистрироваться</S.ModalBtnEnterLink></SU.ModalBtnSignupEnt>
                    </SU.ModalFormLogin>
                </SU.ModalBlock>
            </SU.ContainerSignup>
        </S.Wrapper>
        )
    }