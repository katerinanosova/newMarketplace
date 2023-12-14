import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductContainer = styled.div`
  max-width: 1178px;
  margin: 0 auto;
  padding: 0px 5px;

  @media screen and (max-width: 768px) {
    padding: 0 20px 0;
  }
`

export const ProductArticle = styled.div`
    max-width: 1178px;
    padding: 0 0 70px;
    margin: 0 auto;
    padding: 34px 5px 70px;

    @media screen and (max-width: 768px) {
        max-width: 1178px;
        width: 100%;
        padding: 55px 0 0px;
        margin: 0 auto;
    }
`

export const ProductArticleContent = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: top;
        -ms-flex-align: top;
            align-items: top;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
    
    @media screen and (max-width: 768px) {
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
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
    }
`

export const ProductArticleLeft = styled.div`
    max-width: 480px;
    margin-right: 54px;

    @media screen and (max-width: 890px) {
        margin-right: 20px;
    }

    @media screen and (max-width: 768px) {
        max-width: 100%;
        width: 100%;
        min-width: 320px;
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
        margin-right: 0;
        margin-bottom: 20px;
    }
`

export const ProductArticleRight = styled.div`
    max-width: 621px;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        width: 100%;
        padding: 0 20px;
    }
`

export const ProductArticleFillImg = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover::before {
        border-top: 2px solid #0080C1;
        border-left: 2px solid #0080C1;
    }

    @media screen and (max-width: 768px) {
        max-width: 100%;
        width: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        


        &::before {
            content: "";
            display: block;
            width: 23px;
            height: 23px;
            background-color: transparent;
            border-top: 2px solid #000000;
            border-left: 2px solid #000000;
            transform: rotate(-45deg);
            position: absolute;
            top: 24px;
            left: 32px;
            cursor: pointer;
        }

        @media screen and (max-width: 620px) {
            aspect-ratio: 1 / 1;
            }
        }

        @media screen and (max-width: 620px) and (min-width: 480px) {
            &::before {
                top: 100px;
            }
        }
    }
`

export const ProductArticleImage = styled.img`
    width: 480px;
    height: 480px;
    background-color: #F0F0F0;
    display: block;
    object-fit: cover;

    @media screen and (max-width: 620px) {
        width: 100%;
    }
`

export const ProductImageBarDesktop = styled.div`
    margin-top: 30px;
    width: 490px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    overflow: hidden;
    margin-left: -5px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const ProductImageBarDiv = styled.img`
    width: 88px;
    min-width: 88px;
    height: 88px;
    background-color: #F0F0F0;
    border: 2px solid #F0F0F0;
    margin: 0 5px;
    display: block;
    object-fit: cover;
`

export const ProductImageBarMobile = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        width: 68px;
        height: 8px;
        position: absolute;
        bottom: 20px;
        left: calc(50% - (68px/2));
        display: flex;
        justify-content: space-between;
    }

    @media screen and (max-width: 620px) {
        bottom: 80px;
    }

    @media screen and (max-width: 530px) {
        bottom: 35px;
    }

    @media screen and (max-width: 450px) {
        bottom: 20px;
    }
`

export const ProductImageBarMobileCircle = styled.div`
    background-color: #FFFFFF;
    &:active {
        background-color: #FFFFFF;
    }

    @media screen and (max-width: 768px) {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: 1px solid #FFFFFF;
    }
`

export const ProductArticleRightBlock = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
`

export const ProductTitle = styled.h3`
    margin-bottom: 10px;
    font-size: 32px;
    line-height: 46px;
    font-weight: 700;
    color: #000000;

    @media screen and (max-width: 768px) {
        margin-bottom: 10px;
        font-size: 18px;
        line-height: 1;
    }
`

export const ProductInfo = styled.div`
    margin-bottom: 34px;

    @media screen and (max-width: 768px) {
        margin-bottom: 20px;
    }
`
export const ProductDate = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5F5F5F;
    margin-bottom: 4px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 17px;
        color: #5F5F5F;
        margin-bottom: 4px;
    }
`

export const ProductCity = styled.p`
    font-size: 16px;
    line-height: 21px;
    color: #5F5F5F;
    margin-bottom: 4px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 17px;
        color: #5F5F5F;
        margin-bottom: 4px;
    }
`

export const ProductReviews = styled(Link)`
    font-size: 16px;
    line-height: 21px;
    color: #009EE4;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 19px;
        color: #009EE4;
    }
`

export const ProductPrice = styled.p`
    font-size: 28px;
    line-height: 39px;
    font-weight: 700;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
        line-height: 25px;
        font-weight: 700;
        margin-bottom: 20px;
    }
`

export const ProductButton = styled.button`
    background-color: #009EE4;
    border-radius: 6px;
    border: 1px solid #009EE4;
    width: 214px;
    height: 62px;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
    color: #FFFFFF;
    font-family: 'Roboto', sans-serif;

    @media screen and (max-width: 768px) {
        width: 100%;
        height: 57px;
        font-size: 14px;
        line-height: 20px;
        color: #FFFFFF;
    }
`

export const ProductButtonSpan = styled.span`
    display: block;
    font-size: 14px;
    font-weight: 400;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`

export const ProductAuthor = styled.div`
    margin-top: 34px;
    margin-bottom: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;

    @media screen and (max-width: 768px) {
        margin-top: 30px;
        margin-bottom: 30px;
    }
`

export const ProductAuthorImage = styled.img`
    width: 40px;
    height: 40px;
    background-color: #F0F0F0;
    border-radius: 50%;
    display: block;
    -o-object-fit: cover;
       object-fit: cover;
`

export const ProductAuthorContent = styled.div`
    margin-left: 12px;
`

export const ProductAuthorName = styled.p`  
    font-size: 20px;
    line-height: 26px;
    font-weight: 600;
    color: #009EE4;

    @media screen and (max-width: 768px) {
        font-size: 18px;
        line-height: 23px;
        font-weight: 600;
    }
`

export const ProductAuthorAbout = styled.p`
    font-size: 16px;
    line-height: 32px;
    color: #5F5F5F;

    @media screen and (max-width: 768px) {
        font-size: 14px;
        line-height: 28px;
    }
`

export const ProductDescription = styled.div`
    max-width: 1178px;
    margin: 0 auto;
    padding: 0px 5px;

    @media screen and (max-width: 768px) {
        padding: 0 20px 0;
    }
`

export const ProductDescriptionTitle = styled.h3`
    margin-bottom: 32px;
    padding: 0 5px;
    font-size: 32px;
    line-height: 46px;
    font-weight: 500;
    color: #000000;


    @media screen and (max-width: 768px) {
        margin-bottom: 14px;
        padding: 0;
        font-size: 18px;
        line-height: 1;
    }
`

export const ProductDescriptionContent = styled.div`
    max-width: 792px;
    width: 100%;
    padding: 0 5px 117px;

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0 auto;
        padding: 0 0 84px;
    }
`

export const ProductDescriptionText = styled.p`
    font-size: 16px;
    line-height: 24px;
    color: #000000;
`