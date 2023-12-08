
import styled from "styled-components";


export const Wrapper = styled.div`
width: 100%;
min-height: 100%;
overflow: hidden;
`
export const ContainerBg = styled.div`
max-width: 100%;
height: 100vh;
margin: 0 auto;
position: relative;
background-color: #F4F5F6;
`
export const ModalBlock = styled.div`
position: absolute;
z-index: 5;
left: calc(50% - (600px/2));
top: 60px;
opacity: 1;
`
export const ModalContent = styled.div`
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
-webkit-box-align: start;
    -ms-flex-align: start;
        align-items: flex-start;
width: 600px;
height: auto;
padding: 32px 50px 42px;
background-color: #FFFFFF;
border-radius: 12px;
position: relative;
`
export const ModalTitle = styled.h3`
font-size: 32px;
line-height: 46px;
font-weight: 500;
color: #000000;
`
export const ModalBtnClose = styled.div`
width: 23px;
height: 23px;
position: absolute;
top: 47px;
right: 50px;
z-index: 3;
cursor: pointer;
`
export const ModalBtnCloseLine = styled.div`
position: relative;
width: 100%;
height: 100%;
&::after{
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #D9D9D9;
    top: 47%;
    right: -4px;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
&::before{
    content: "";
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #D9D9D9;
    top: 47%;
    right: -4px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

`
export const ModalFormNewArtFormNewArt = styled.div`
margin-top: 22px;
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
    -ms-flex-direction: column;
        flex-direction: column;
width: 100%;
`

