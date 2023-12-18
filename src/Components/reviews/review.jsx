import { HeaderSecond } from '../HeaderSecond/HeaderSecond';
import { Footer } from '../Footer/Footer';
import * as S from '../NewProductAdd/newProduct.styled';
import * as SU from './review.styled';

export const Review = ({ closeReviewsModal }) => {
    return (
        <S.Wrapper>
            <S.ContainerBg>
            <HeaderSecond />
                <S.ModalBlock>
                    <S.ModalContent>
                        <S.ModalTitle>Отзывы о товаре</S.ModalTitle>
                        <S.ModalBtnClose onClick={closeReviewsModal}>
                            <S.ModalBtnCloseLine />
                        </S.ModalBtnClose>
                        <SU.ModalScroll>
                            <S.ModalFormNewArtFormNewArt>
                                <S.FormNewArtBlock>
                                    <S.Label htmlFor="text">Добавить отзыв</S.Label>
                                    <S.FormNewArtArea cols="auto" rows="5" placeholder="Введите описание"/>
                                </S.FormNewArtBlock>
                                <S.FormNewArtBtnPubBtnHov02>Опубликовать</S.FormNewArtBtnPubBtnHov02>
                            </S.ModalFormNewArtFormNewArt>
                            <SU.ModalReviewsReviews>
                                <SU.Review>
                                    <SU.ReviewItem>
                                        <SU.ReviewLeft>
                                            <SU.ReviewImg>
                                                <SU.Img src="" alt=""/>
                                            </SU.ReviewImg>
                                        </SU.ReviewLeft>
                                        <SU.ReviewRight>
                                            <SU.ReviewNameFontT>Олег <SU.Span>14 августа</SU.Span></SU.ReviewNameFontT>
                                            <SU.ReviewTitleFontT>Комментарий</SU.ReviewTitleFontT>
                                            <SU.ReviewTextFontT>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</SU.ReviewTextFontT>
                                        </SU.ReviewRight>
                                    </SU.ReviewItem>
                                </SU.Review>
                                <SU.Review>
                                    <SU.ReviewItem>
                                        <SU.ReviewLeft>
                                            <SU.ReviewImg>
                                                <SU.Img src="" alt=""/>
                                            </SU.ReviewImg>
                                        </SU.ReviewLeft>
                                        <SU.ReviewRight>
                                            <SU.ReviewNameFontT>Олег <SU.Span>14 августа</SU.Span></SU.ReviewNameFontT>
                                            <SU.ReviewTitleFontT>Комментарий</SU.ReviewTitleFontT>
                                            <SU.ReviewTextFontT>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</SU.ReviewTextFontT>
                                        </SU.ReviewRight>
                                    </SU.ReviewItem>
                                </SU.Review>
                                <SU.Review>
                                    <SU.ReviewItem>
                                        <SU.ReviewLeft>
                                            <SU.ReviewImg>
                                                <SU.Img src="" alt=""/>
                                            </SU.ReviewImg>
                                        </SU.ReviewLeft>
                                        <SU.ReviewRight>
                                            <SU.ReviewNameFontT>Олег <SU.Span>14 августа</SU.Span></SU.ReviewNameFontT>
                                            <SU.ReviewTitleFontT>Комментарий</SU.ReviewTitleFontT>
                                            <SU.ReviewTextFontT>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</SU.ReviewTextFontT>
                                        </SU.ReviewRight>
                                    </SU.ReviewItem>
                                </SU.Review>
                                <SU.Review>
                                    <SU.ReviewItem>
                                        <SU.ReviewLeft>
                                            <SU.ReviewImg>
                                                <SU.Img src="" alt=""/>
                                            </SU.ReviewImg>
                                        </SU.ReviewLeft>
                                        <SU.ReviewRight>
                                            <SU.ReviewNameFontT>Олег <SU.Span>14 августа</SU.Span></SU.ReviewNameFontT>
                                            <SU.ReviewTitleFontT>Комментарий</SU.ReviewTitleFontT>
                                            <SU.ReviewTextFontT>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</SU.ReviewTextFontT>
                                        </SU.ReviewRight>
                                    </SU.ReviewItem>
                                </SU.Review>
                                <SU.Review>
                                    <SU.ReviewItem>
                                        <SU.ReviewLeft>
                                            <SU.ReviewImg>
                                                <SU.Img src="" alt=""/>
                                            </SU.ReviewImg>
                                        </SU.ReviewLeft>
                                        <SU.ReviewRight>
                                            <SU.ReviewNameFontT>Олег <SU.Span>14 августа</SU.Span></SU.ReviewNameFontT>
                                            <SU.ReviewTitleFontT>Комментарий</SU.ReviewTitleFontT>
                                            <SU.ReviewTextFontT>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</SU.ReviewTextFontT>
                                        </SU.ReviewRight>
                                    </SU.ReviewItem>
                                </SU.Review>
                            </SU.ModalReviewsReviews>
                        </SU.ModalScroll>
                    </S.ModalContent>
                </S.ModalBlock>
                <Footer />
            </S.ContainerBg>
        </S.Wrapper>
    )
}



