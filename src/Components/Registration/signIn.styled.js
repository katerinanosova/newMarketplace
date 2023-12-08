import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
min-height: 100%;
overflow: hidden;
`
export const ContainerEnter = styled.div`
max-width: 100%;
height: 100vh;
margin: 0 auto;
position: relative;
background-color: #F4F5F6;
`
export const ModalBlock = styled.div`
position: absolute;
z-index: 2;
left: calc(50% - (366px/2));
top: calc(50% - (439px/2));
opacity: 1;
@media screen and (max-width: 768px) {
    position: absolute;
    z-index: 2;
    left: calc(50% - (320px/2));
    top: 55px;
    opacity: 1;
}
`
export const ModalFormLogin = styled.div`
width: 366px;
height: 439px;
background-color: #FFFFFF;
border-radius: 12px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
padding: 43px 47px 47px 40px;
&:first-child {
    margin-bottom: 30px;
  }
  @media screen and (max-width: 768px) {
    width: 320px;
    height: auto;
    background-color: #FFFFFF;
    border-radius: 0px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    padding: 40px 20px;
}
`
export const ModalLogo = styled.div`
width: 140px;
height: 21px;
margin-bottom: 34px;
background-color: transparent;
@media screen and (max-width: 768px) {
    width: 120px;
    height: 18px;
    margin-bottom: 30px;
    background-color: transparent;
}
`
export const ModalLogoImg = styled.img`
width: 140px;
height: auto;
@media screen and (max-width: 768px) {
    width: 120px;
    height: auto;
}
`
export const ModalInputLogin = styled.input`
width: 100%;
border-top: none;
border-left: none;
border-right: none;
border-bottom: 1px solid #D0CECE;
padding: 8px 1px;
margin-bottom: 30px;
outline: none;
&::-webkit-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #D0CECE;
  }
    @media screen and (max-width: 768px) {
        width: 100%;
        border: 1px solid #D0CECE;
        padding: 9px 17px;
        border-radius: 30px;
        &::-webkit-input-placeholder {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            color: #B3B3B3;
          }
          margin-bottom: 14px;
    }
`
export const ModalInputPassword = styled.input`
width: 100%;
border-top: none;
border-left: none;
border-right: none;
border-bottom: 1px solid #D0CECE;
padding: 8px 1px;
outline: none;
&::-webkit-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #D0CECE;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    border: 1px solid #D0CECE;
    padding: 9px 17px;
    border-radius: 30px;
    &::-webkit-input-placeholder {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #B3B3B3;
      }
}
`
export const ModalBtnEnter = styled.button`
width: 278px;
height: 52px;
background-color: #009EE4;
border-radius: 6px;
margin-top: 60px;
margin-bottom: 20px;
border: none;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-webkit-box-pack: center;
    -ms-flex-pack: center;
        justify-content: center;
        
        &:active {
            background-color: #0080C1;
          }
          &:hover {
            background-color: #0080C1;
          }
          @media screen and (max-width: 768px) {
            height: 46px;
            margin-top: 40px;
            margin-bottom: 10px;
            border: none;
        }

`
export const ModalBtnEnterLink = styled(Link)`
width: 100%;
height: 100%;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
letter-spacing: -0.05px;
color: #FFFFFF;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-webkit-box-pack: center;
    -ms-flex-pack: center;
        justify-content: center;
        @media screen and (max-width: 768px) {
            font-size: 16px;
            line-height: 24px;
        }
`
export const ModalBtnSignup = styled.button`
width: 278px;
height: 52px;
background-color: transparent;
border: 1px solid #D0CECE;
border-radius: 6px;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
letter-spacing: -0.05px;
color: #000000;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-webkit-box-pack: center;
    -ms-flex-pack: center;
        justify-content: center;
        &:active {
            background-color: #D9D9D9;
          }
        &:hover {
            background-color: #F4F5F6;
          }
          @media screen and (max-width: 768px) {
            height: 46px;
            border: 1px solid #D9D9D9;
            font-size: 16px;
            line-height: 24px;
        }
`
export const ModalBtnSignupLink = styled(Link)`
width: 100%;
height: 100%;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 24px;
letter-spacing: -0.05px;
color: #000000;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
-webkit-box-pack: center;
    -ms-flex-pack: center;
        justify-content: center;
        @media screen and (max-width: 768px) {
            font-size: 16px;
            line-height: 24px;
        }
`