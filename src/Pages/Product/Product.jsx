import { Footer } from '../../Components/Footer/Footer'
import { Header } from '../../Components/Header/Header'
import { ReturnToMain } from '../../Components/ReturnToMain.js/ReturnToMain';
import * as S from '../Main/main.styled';
import * as St from './Product.styled';

export const Product = () => {

    return (
        <S.Wrapper>
            <S.Container>
                <Header />
                <main>
                    <St.ProductContainer>
                        <ReturnToMain />
                    </St.ProductContainer>
                    <St.ProductArticle>
                        <St.ProductArticleContent>
                            <St.ProductArticleLeft>
                                <St.ProductArticleFillImg>
                                    <St.ProductArticleImage src='' alt='' />
                                    <St.ProductImageBarDesktop>
                                        <St.ProductImageBarDiv src='' alt='' />
                                        <St.ProductImageBarDiv src='' alt='' />
                                        <St.ProductImageBarDiv src='' alt='' />
                                        <St.ProductImageBarDiv src='' alt='' />
                                        <St.ProductImageBarDiv src='' alt='' />
                                        <St.ProductImageBarDiv src='' alt='' />
                                    </St.ProductImageBarDesktop>
                                    <St.ProductImageBarMobile>
                                        <St.ProductImageBarMobileCircle />
                                        <St.ProductImageBarMobileCircle />
                                        <St.ProductImageBarMobileCircle />
                                        <St.ProductImageBarMobileCircle />
                                        <St.ProductImageBarMobileCircle />
                                    </St.ProductImageBarMobile>
                                </St.ProductArticleFillImg>
                            </St.ProductArticleLeft>
                            <St.ProductArticleRight>
                                <St.ProductArticleRightBlock>
                                    <St.ProductTitle>Ракетка для большого тенниса Triumph Pro STС Б/У</St.ProductTitle>
                                    <St.ProductInfo>
                                        <St.ProductDate>Сегодня в 10:45</St.ProductDate>
                                        <St.ProductCity>Санкт-Петербург</St.ProductCity>
                                        <St.ProductReviews to='/'>23 отзыва</St.ProductReviews>
                                    </St.ProductInfo>
                                    <St.ProductPrice>2 200 ₽</St.ProductPrice>
                                    <St.ProductButton>Показать&nbsp;телефон
                                        <St.ProductButtonSpan>8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ</St.ProductButtonSpan>
                                     </St.ProductButton>
                                     <St.ProductAuthor>
                                        <St.ProductAuthorImage src='' alt='' />
                                        <St.ProductAuthorContent>
                                            <St.ProductAuthorName>Кирилл</St.ProductAuthorName>
                                            <St.ProductAuthorAbout>Продает товары с августа 2021</St.ProductAuthorAbout>
                                        </St.ProductAuthorContent>
                                     </St.ProductAuthor>
                                </St.ProductArticleRightBlock>
                            </St.ProductArticleRight>
                        </St.ProductArticleContent>
                    </St.ProductArticle>
                    <St.ProductDescription>
                        <St.ProductDescriptionTitle>Описание товара</St.ProductDescriptionTitle>
                        <St.ProductDescriptionContent>
                            <St.ProductDescriptionText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</St.ProductDescriptionText>
                        </St.ProductDescriptionContent>
                    </St.ProductDescription>
                </main>
                <Footer />
            </S.Container>
        </S.Wrapper>
    )
}