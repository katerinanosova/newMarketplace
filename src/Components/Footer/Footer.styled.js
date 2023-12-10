import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: none;

  @media screen and (max-width: 620px) {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 54px;
    width: 100%;
    background-color: #ffffff;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const FooterContainer = styled.div`
  @media screen and (max-width: 620px) {
    width: 225px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const FooterImg = styled.img`
  @media screen and (max-width: 620px) {
    width: 42px;
    height: 42px;
  }
`;
// была ссылка внутри img
// .footer__img img {
//     width: 100%;
//     height: 100%;
//     display: block;
//     -o-object-fit: cover;
//        object-fit: cover;
//   }
