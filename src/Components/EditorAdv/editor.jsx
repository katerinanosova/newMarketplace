import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HeaderSecond } from '../HeaderSecond/HeaderSecond';
import * as S from '../NewProductAdd/newProduct.styled';
import { Footer } from '../Footer/Footer';

export const EditorAdv = ({ setIsOpen }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <S.Wrapper>
      <S.ContainerBg>
        <HeaderSecond />
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle>Редактировать объявление</S.ModalTitle>
            {windowWidth <= 600 ? (
              <S.ModalBtnCloseSvg
                src='/img/closer.svg'
                onClick={() => setIsOpen(true)}
              />
            ) : (
              <Link to='/product/:id'>
                <S.ModalBtnClose>
                  <S.ModalBtnCloseLine />
                </S.ModalBtnClose>
              </Link>
            )}
            <S.ModalFormNewArtFormNewArt>
              <S.FormNewArtBlock>
                <S.LabelDescription htmlFor='text'>Название</S.LabelDescription>
                <S.FormNewArtInput type='text' placeholder='Введите название' />
              </S.FormNewArtBlock>
              <S.FormNewArtBlock>
                <S.LabelDescription htmlFor='text'>Описание</S.LabelDescription>
                <S.FormNewArtArea
                  cols='auto'
                  rows='10'
                  placeholder='Введите описание'
                  defaultValue='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                />
              </S.FormNewArtBlock>
              <S.FormNewArtBlock>
                <S.FormNewArtP>
                  Фотографии товара<S.Span>не более 5 фотографий</S.Span>
                </S.FormNewArtP>
                <S.FormNewArtBarImg>
                  <S.FormNewArtImg>
                    <S.Img src='' alt='' />
                    <S.FormNewArtImgCover />
                  </S.FormNewArtImg>
                  <S.FormNewArtImg>
                    <S.Img src='' alt='' />
                    <S.FormNewArtImgCover />
                  </S.FormNewArtImg>
                  <S.FormNewArtImg>
                    <S.Img src='' alt='' />
                    <S.FormNewArtImgCover />
                  </S.FormNewArtImg>
                  <S.FormNewArtImg>
                    <S.Img src='' alt='' />
                    <S.FormNewArtImgCover />
                  </S.FormNewArtImg>
                  <S.FormNewArtImg>
                    <S.Img src='' alt='' />
                    <S.FormNewArtImgCover />
                  </S.FormNewArtImg>
                </S.FormNewArtBarImg>
              </S.FormNewArtBlock>
              <S.FormNewArtBlockBlockPrice>
                <S.LabelDescription htmlFor='price'>Цена</S.LabelDescription>
                <S.FormNewArtInputPrice type='text' />
                <S.FormNewArtInputPriceCover />
              </S.FormNewArtBlockBlockPrice>
              <S.FormNewArtBtnPubBtnHov02>Сохранить</S.FormNewArtBtnPubBtnHov02>
            </S.ModalFormNewArtFormNewArt>
          </S.ModalContent>
        </S.ModalBlock>
        <Footer />
      </S.ContainerBg>
    </S.Wrapper>
  );
};
