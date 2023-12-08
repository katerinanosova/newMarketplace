import * as S from './sign.styled';


export const Sign = () => {
    return (
<S.Wrapper>
    <S.ContainerEnter>
        <S.ModalBlock>
            <S.ModalFormLogin>
                <S.ModalLogo>
                    <S.ModalLogoImg src='' alt=''/>
                </S.ModalLogo>
                <S.ModalInputLogin type="text" id="formlogin" placeholder="email"/>
                <S.ModalInputPassword type="password" placeholder="Пароль"/>
                <S.ModalBtnEnter><S.ModalBtnEnterLink>Войти</S.ModalBtnEnterLink></S.ModalBtnEnter>
                <S.ModalBtnSignup><S.ModalBtnSignupLink>Зарегистрироваться</S.ModalBtnSignupLink></S.ModalBtnSignup>
            </S.ModalFormLogin>
        </S.ModalBlock>
    </S.ContainerEnter>
</S.Wrapper>
    )
}