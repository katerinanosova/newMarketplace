import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const Header = styled.header`
  background-color: #009ee4;
  @media screen and (max-width: 580px) {
    width: 100%;
    height: 55px;
    box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 3;
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
  @media screen and (max-width: 580px) {
    display: block;
  }
`;

export const LogoMobLink = styled.a`
  @media screen and (max-width: 580px) {
    display: block;
    width: 32px;
    height: 32px;
  }
`;

export const LogoMobImg = styled.img`
  @media screen and (max-width: 580px) {
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
  @media screen and (max-width: 580px) {
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

export const Main = styled.main``;

export const MainContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 10px 79px;
  @media screen and (max-width: 580px) {
    padding: 85px 0px 84px;
  }
`;

export const MainCenterBlock = styled.div`
  margin: 0 auto;
  @media screen and (max-width: 580px) {
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export const Menu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 11px 0;
  width: 100%;
  padding: 31px 10px 64px;
  @media screen and (max-width: 580px) {
    display: none;
  }
`;

export const MenuLogoLink = styled.a`
  width: 54px;
  height: 50px;
`;

export const MenuLogoImg = styled.img`
  width: 54px;
  height: auto;
`;

export const MenuForm = styled.form`
  margin-left: 60px;
  max-width: 1044px;
  width: 100%;
`;

export const MenuBtn = styled.button`
  width: 241px;
  height: 50px;
  background-color: #009ee4;
  border: 1px solid #009ee4;
  border-radius: 6px;
  font-size: 16px;
  line-height: 1;
  color: #ffffff;
  &: hover {
    background-color: #0080c1;
  }
`;

export const MainH2 = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 42px;
  color: #000000;
  margin-bottom: 30px;

  //   &:hover::after {
  //     border-top: 2px solid #0080c1;
  //     border-left: 2px solid #0080c1;
  //   }

  @media screen and (max-width: 580px) {
    font-size: 24px;
    line-height: 29px;
    color: #000000;
    padding: 0 0 0 26px;
    margin-bottom: 20px;
    position: relative;
  }

  //   &::before {
  //     content: '';
  //     display: block;
  //     width: 12px;
  //     height: 12px;
  //     background-color: transparent;
  //     border-top: 2px solid #000000;
  //     border-left: 2px solid #000000;
  //     transform: rotate(-45deg);
  //     position: absolute;
  //     top: 9px;
  //     left: 0;
  //     cursor: pointer;
  //   }
`;

export const MainProfileSell = styled.div`
  width: 100%;
  padding: 0 0 70px;
  @media screen and (max-width: 580px) {
    width: 100%;
    padding: 0 0 40px;
  }
`;

export const ProfileSellContent = styled.div`
  width: 100%;
  @media screen and (max-width: 890px) {
    max-width: 834px;
    width: 100%;
  }
  @media screen and (max-width: 580px) {
    max-width: 100%;
    width: 100%;
  }
`;

export const ProfileSellSeller = styled.div`
  display: flex;
  align-items: top;
  justify-content: start;

  @media screen and (max-width: 890px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 580px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const SellerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  @media screen and (max-width: 580px) {
    display: none;
    margin-right: 0px;
  }
`;

export const SellerImg = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background-color: #f0f0f0;
  @media screen and (max-width: 580px) {
    display: none;
  }
`;

export const SellerLinkImg = styled.a``;

export const SellerImgImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
`;

export const SellerRight = styled.div`
  width: auto;
  @media screen and (max-width: 580px) {
    width: 100%;
  }
`;

export const SellerTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  color: #000000;
  margin-bottom: 0px;
  @media screen and (max-width: 580px) {
    font-size: 20px;
    line-height: 26px;
    margin-bottom: 6px;
  }
`;

export const SellerCity = styled.p`
  font-size: 16px;
  line-height: 21px;
  color: #5f5f5f;
  margin-bottom: 10px;
  @media screen and (max-width: 580px) {
    font-size: 16px;
    line-height: 21px;
    color: #5f5f5f;
    margin-bottom: 6px;
  }
`;

export const SellerInf = styled(SellerCity)``;

export const SellerImgMobBlock = styled.div`
  display: none;
  @media screen and (max-width: 580px) {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 20px 0;
  }
`;

export const SellerImgMob = styled.div`
  @media screen and (max-width: 580px) {
    display: block;
    width: 132px;
    height: 132px;
    border-radius: 50%;
    background-color: #f0f0f0;
  }
`;

export const SellerImgMobLink = styled.a``;

export const SellerImgMobImg = styled.img`
  @media screen and (max-width: 580px) {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
  }
`;

export const SellerBtn = styled.button`
  margin-top: 20px;
  background-color: #009ee4;
  border-radius: 6px;
  border: 1px solid #009ee4;
  width: 214px;
  height: 62px;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  &:hover {
    background-color: #0080c1;
  }
  @media screen and (max-width: 580px) {
    width: 100%;
    height: 57px;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  }
`;

export const SellerBtnSpan = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 400;
  @media screen and (max-width: 580px) {
    font-size: 12px;
  }
`;

export const MainTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 32px;
  line-height: 40px;
  font-weight: 500;
  color: #000000;
  @media screen and (max-width: 580px) {
    font-size: 18px;
    line-height: 1;
    margin-bottom: 30px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 580px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Cards = styled.div`
  max-width: 1158px;
  width: 100%;
  display: -ms-grid;
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-auto-rows: 441px;
  grid-gap: 40px 26px;
  justify-content: center;
  overflow-y: auto;
  scrollbar-color: #ffffff #2e2e2e;
  scrollbar-width: thin;
  scrollbar-width: 0px;
  height: 441px;
  @media screen and (max-width: 1158px) {
    display: grid;
    grid-template-columns: repeat(3, 270px);
  }
  @media screen and (max-width: 890px) {
    display: grid;
    grid-template-columns: repeat(2, 270px);
  }
  @media screen and (max-width: 580px) {
    display: grid;
    grid-template-columns: repeat(2, 137px);
    grid-auto-rows: 293px;
    grid-gap: 10px 10px;
    justify-content: center;
    height: 596px;
  }
`;
