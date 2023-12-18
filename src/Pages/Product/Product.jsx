import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Footer } from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';
import { ReturnToMain } from '../../Components/ReturnToMain.js/ReturnToMain';
import * as S from '../Main/main.styled';
import * as St from './Product.styled';
import { HeaderSecond } from '../../Components/HeaderSecond/HeaderSecond';
import { NewProduct } from '../../Components/NewProductAdd/newProduct';
import { Review } from '../../Components/reviews/review';
import { EditorAdv } from '../../Components/EditorAdv/editor';

export const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   if (isOpen) {
  //     navigate(`/product/${id}`);
  //   }
  // }, [isModalOpen, id, navigate]);

  const [addNewProductModal, setAddNewProductModal] = useState(false);
  const closeModal = () => {
    setAddNewProductModal(false);

  };
  const openModal = () => {
    setAddNewProductModal(true);
  };

  const [openReviews, setOpenReviews] = useState(false);
  const openReviewsModal = () => {
    setOpenReviews(true);
  };
  const closeReviewsModal = () => {
    setOpenReviews(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleOpenModal = () => {
    if (windowWidth <= 600) {
      setIsModalOpen(true);
      setIsReviewModalOpen(true);
    }
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // заглушка на залогиненного юзера
  const userLoggedIn = true;
  const [showAdvEdit, setShowAdvEdit] = useState(false);
  const openAdvEditor = () => {
    setShowAdvEdit(true);
  }
  const closeAdvEditor = () => {
    setShowAdvEdit(false)
  }

  return (
    <S.Wrapper>
      <S.Container>
        {userLoggedIn ? <HeaderSecond openModal={openModal} /> : <Header />}
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
                  <St.ProductTitle>
                    Ракетка для большого тенниса Triumph Pro STС Б/У
                  </St.ProductTitle>
                  <St.ProductInfo>
                    <St.ProductDate>Сегодня в 10:45</St.ProductDate>
                    <St.ProductCity>Санкт-Петербург</St.ProductCity>
                    <St.ProductReviews to='/review'>
                      23 отзыва
                    </St.ProductReviews>
                  </St.ProductInfo>
                  <St.ProductPrice>2 200 ₽</St.ProductPrice>
                  {userLoggedIn ? (
                    <St.ProductButtonBox>
                      <St.ProductButton>
                        <Link to='/editor-adv'>Редактировать</Link>
                      </St.ProductButton>
                      <St.ProductButton>Снять с публикации</St.ProductButton>
                    </St.ProductButtonBox>
                  ) : (
                    <St.ProductButton>
                      Показать&nbsp;телефон
                      <St.ProductButtonSpan>
                        8&nbsp;905&nbsp;ХХХ&nbsp;ХХ&nbsp;ХХ
                      </St.ProductButtonSpan>
                    </St.ProductButton>
                  )}
                  <St.ProductAuthor>
                    <St.ProductAuthorImage src='' alt='' />
                    <St.ProductAuthorContent>
                      <Link to='/seller-profile'>
                        <St.ProductAuthorName>Кирилл</St.ProductAuthorName>
                      </Link>
                      <St.ProductAuthorAbout>
                        Продает товары с августа 2021
                      </St.ProductAuthorAbout>
                    </St.ProductAuthorContent>
                  </St.ProductAuthor>
                </St.ProductArticleRightBlock>
              </St.ProductArticleRight>
            </St.ProductArticleContent>
          </St.ProductArticle>
          <St.ProductDescription>
            <St.ProductDescriptionTitle>
              Описание товара
            </St.ProductDescriptionTitle>
            <St.ProductDescriptionContent>
              <St.ProductDescriptionText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </St.ProductDescriptionText>
            </St.ProductDescriptionContent>
          </St.ProductDescription>
          {isModalOpen && <EditorAdv closeModal={handleCloseModal} />}
          {isReviewModalOpen && <Review closeModal={handleCloseModal} />}
        </main>
        <Footer openModal={openModal} />
      </S.Container>
    </S.Wrapper>
  );
};
