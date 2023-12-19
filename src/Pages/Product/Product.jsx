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
import { useGetAdvIDQuery } from '../../Store/RTKQuery/getAdvId';
import { getTime } from '../../helpers/time';
import { useGetCommentsQuery } from '../../Store/RTKQuery/getComments';
import { updateToken } from '../../Api/tokenApi';
import { getSeller } from '../../Api/sellerApi';

export const Product = ({ }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const {data: dataComments=[]} = useGetCommentsQuery(id)
  const {data =[], isError, error, isSuccess, refetch} = useGetAdvIDQuery(id);
  let timeResult = '00.00.00'
  useEffect(() => {
    if (isSuccess) {
      timeResult = getTime(data.created_on)
      console.log(data);
      setShow(true)
    }
    },[isSuccess]);
    useEffect(() => {
      const seller = getSeller(data.user.id)
      console.log(seller);
      },[isSuccess]);
    if(isError && error.status == 401 ) {
      asyncUpgate()
    }
    const asyncUpgate = async () => {
      await updateToken()
      await refetch()
      return
    }
  // 
  // const [addNewProductModal, setAddNewProductModal] = useState(false);
  
  // const openModal = () => {
  //   setAddNewProductModal(true);
  // };


  const [openReviews, setOpenReviews] = useState(false);
  const openReviewsModal = () => {
    setOpenReviews(true);
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


  // заглушка на залогиненного юзера
  const userLoggedIn = false;

  const [showAdvEdit, setShowAdvEdit] = useState(false);
  const openAdvEditor = () => {
    setShowAdvEdit(true);
  }
  const handleCloseAllModals = () => {
    setOpenReviews(false);
    setShowAdvEdit(false);
  };


  return (
    show ?     <S.Wrapper>
    <S.Container>
      {userLoggedIn ? <HeaderSecond /> : <Header />}
      <main>
        <St.ProductContainer>
          <ReturnToMain />
        </St.ProductContainer>
        <St.ProductArticle>
          <St.ProductArticleContent>
            <St.ProductArticleLeft>
              <St.ProductArticleFillImg>
                <St.ProductArticleImage src={data.images.length > 0 ? `http://localhost:8090/${data.images[0].url}` : '/img/noFoto.jpeg'} alt='' />
                <St.ProductImageBarDesktop>
                {data.images.map((image) => (
                 <St.ProductImageBarDiv key={image.id} src={`http://localhost:8090/${image.url}`} alt='img' />
              ))}
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
                  {data.title}
                </St.ProductTitle>
                <St.ProductInfo>
                  <St.ProductDate>{timeResult}</St.ProductDate>
                  <St.ProductCity>{Boolean(data.user.city) ? data.user.city : "что нам город? Перед нами весь мир...не указан короче"}</St.ProductCity>
                  <St.ProductReviews onClick={openReviewsModal}>
                    {dataComments.length === 0 ? `еще нет отзывов, но вы можете сделать первый` : `${dataComments.length} отзыва`}
                  </St.ProductReviews>
                </St.ProductInfo>
                <St.ProductPrice>{data.price}</St.ProductPrice>
                {userLoggedIn ? (
                  <St.ProductButtonBox>
                    <St.ProductButton onClick={openAdvEditor}>Редактировать</St.ProductButton>
                    <St.ProductButton>Снять с публикации</St.ProductButton>
                  </St.ProductButtonBox>
                ) : (
                  <St.ProductButton>
                    Показать&nbsp;телефон&nbsp;
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
                  {data.description ? data.description : 'Продавец не описал товар'}
            </St.ProductDescriptionText>
          </St.ProductDescriptionContent>
        </St.ProductDescription>
        {/* {isModalOpen && <EditorAdv closeModal={handleCloseModal} />}
        {isReviewModalOpen && <Review closeModal={handleCloseModal} />} */}
        {openReviews ? 
           <Review closeModal={handleCloseAllModals} /> : null}
        {/* {newProductModal ? 
           <NewProduct setNewProductModal={setNewProductModal} /> : null} */}
        {showAdvEdit ? 
           <EditorAdv closeModal={handleCloseAllModals} /> : null}
      </main>
      <Footer />
    </S.Container>
  </S.Wrapper> : null
  );
};
