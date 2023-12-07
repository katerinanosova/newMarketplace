import styled from "styled-components";

export const MainReturnToMain = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    padding: 11px 0;
    max-width: 1178px;
    margin: 0 auto;
    padding: 43px 10px 43px;

    @media screen and (max-width: 590px) {
        width: 100%;
        height: 55px;
        background-color: #009EE4;
        -webkit-box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
                box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.05);
        margin-bottom: 0px;
        padding: 11px 17px;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 3;
    }
`

export const ReturnToMainLogoDesktop = styled.div`
    @media screen and (max-width: 590px) {
        display: none;
    }
`

export const ReturnToMainLogoDesktopIcon = styled.img`
    width: 54px;
    height: auto;
`

export const ReturnToMainLogoMobile = styled.div`
    display: none;  

    @media screen and (max-width: 590px) {
        display: block;
        width: 32px;
        height: 32px;
    }
`

export const ReturnToMainLogoMobileIcon = styled.img`
    @media screen and (max-width: 590px) {
        width: 32px;
        height: auto;
        display: block;
        -o-object-fit: cover;
           object-fit: cover;
    }
`
export const ReturnToMainForm = styled.form`
    margin-left: 60px;
    max-width: 1044px;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
`

export const ReturnToMainButton = styled.button`
    width: 241px;
    height: 50px;
    background-color: #009EE4;
    border: 1px solid #009EE4;
    border-radius: 6px;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;

    &:hover {
        background-color: #0080C1;
    }
      
`