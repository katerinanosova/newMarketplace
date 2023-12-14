import * as S from './newProduct.styled';
import { HeaderSecond } from '../../Components/HeaderSecond/HeaderSecond';
import { Footer } from '../../Components/Footer/Footer';

export const NewProduct = ({ closeModal }) => {
    return (
        <S.Wrapper>
            <S.ContainerBg>
                {/* <HeaderSecond /> */}
                <S.ModalBlock>
                    <S.ModalContent>
                        <S.ModalTitle>Новое объявление</S.ModalTitle>
                        <S.ModalBtnClose onClick={closeModal}>
                            <S.ModalBtnCloseLine />
                        </S.ModalBtnClose>
                        <S.ModalFormNewArtFormNewArt>
                            <S.FormNewArtBlock>
                                <S.Label htmlFor="text">Название</S.Label>
                                <S.FormNewArtInput type="text" placeholder="Введите название"/>
                            </S.FormNewArtBlock>
                            <S.FormNewArtBlock>
                                <S.Label htmlFor="text">Описание</S.Label>
                                <S.FormNewArtArea cols="auto" rows="10" placeholder="Введите описание"/>
                            </S.FormNewArtBlock>
                            <S.FormNewArtBlock>
                                <S.FormNewArtP>Фотографии товара<S.Span>не более 5 фотографий</S.Span></S.FormNewArtP>
                                <S.FormNewArtBarImg>
                                    <S.FormNewArtImg>
                                        <S.Img src="" alt=""/>
                                        <S.FormNewArtImgCover/>
                                    </S.FormNewArtImg>
                                    <S.FormNewArtImg>
                                        <S.Img src="" alt=""/>
                                        <S.FormNewArtImgCover/>
                                    </S.FormNewArtImg>
                                    <S.FormNewArtImg>
                                        <S.Img src="" alt=""/>
                                        <S.FormNewArtImgCover/>
                                    </S.FormNewArtImg>
                                    <S.FormNewArtImg>
                                        <S.Img src="" alt=""/>
                                        <S.FormNewArtImgCover/>
                                    </S.FormNewArtImg>
                                    <S.FormNewArtImg>
                                        <S.Img src="" alt=""/>
                                        <S.FormNewArtImgCover/>
                                    </S.FormNewArtImg>
                                </S.FormNewArtBarImg>
                            </S.FormNewArtBlock>
                            <S.FormNewArtBlockBlockPrice>
                                <S.Label htmlFor="price">Цена</S.Label>
                                <S.FormNewArtInputPrice type="text"/>
                                <S.FormNewArtInputPriceCover/>
                            </S.FormNewArtBlockBlockPrice>
                            <S.FormNewArtBtnPubBtnHov02>Опубликовать</S.FormNewArtBtnPubBtnHov02>
                        </S.ModalFormNewArtFormNewArt>
                    </S.ModalContent>
                </S.ModalBlock>
                <Footer />
            </S.ContainerBg>
        </S.Wrapper>
    )
}