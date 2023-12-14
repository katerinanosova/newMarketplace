import styled from 'styled-components';

export const Header = styled.header`
  background-color: #009ee4;
  @media screen and (max-width: 620px) {
    width: 100%;
    height: 55px;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 5;
  }
`;

export const HeaderNav = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0 10px;
  height: 79px;
  display: flex;
  align-items: center;
  justify-content: end;
  @media screen and (max-width: 890px) {
    height: 55px;
    justify-content: start;
    padding: 0 20px;
  }
`;

export const HeaderLogo = styled.div`
  display: none;
  @media screen and (max-width: 620px) {
    display: block;
  }
`;

export const LogoMobLink = styled.a`
  @media screen and (max-width: 620px) {
    display: block;
    width: 32px;
    height: 32px;
  }
`;

export const LogoMobImg = styled.img`
  @media screen and (max-width: 620px) {
    width: 32px;
    height: auto;
    display: block;
    object-fit: cover;
  }
`;

export const HeaderBtnPutAd = styled.button`
  width: 232px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background-color: transparent;
  color: #ffffff;
  font-size: 16px;
  line-height: 1;
  @media screen and (max-width: 620px) {
    display: none;
  }
  &: hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #ffffff;
  }
`;

export const HeaderButtonSecond = styled(HeaderBtnPutAd)`
  width: 173px;
  height: 40px;
  margin-left: 10px;
`;
