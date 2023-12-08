import { Link } from "react-router-dom";
import * as S from "./Footer.styled";


export const Footer = () => {

    return (
        <S.FooterWrapper>
            <S.FooterContainer>
                <Link to='/main'>
                    <S.FooterImg src="img/icon_01.png" alt="main" />
                </Link>
                    <S.FooterImg src="img/icon_02.png" alt="new_add" />
                <Link to='/profile'>
                    <S.FooterImg src="img/icon_03.png" alt="new_add" />
                </Link>
            </S.FooterContainer>
        </S.FooterWrapper>

    )
}


