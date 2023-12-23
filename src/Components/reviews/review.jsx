import { HeaderSecond } from '../HeaderSecond/HeaderSecond';
import { Footer } from '../Footer/Footer';
import * as S from '../NewProductAdd/newProduct.styled';
import * as SU from './review.styled';
import { getTime } from '../../helpers/time';
import { useAddCommentMutation } from '../../Store/RTKQuery/getComments';
import { useParams } from 'react-router-dom';
import { getAccessTokenLocal } from '../../helpers/token';
import { useState } from 'react';

export const Review = ({ closeModal, dataComments }) => {
    
    const params = useParams();
    const [ comment, setComment ] = useState('');
    const [addComment] = useAddCommentMutation();
    const accessToken = getAccessTokenLocal();

    const addNewComment = () => {
        addComment({  idProduct: params.id, commentText: comment, access: accessToken })
    }

  return (
    <S.Wrapper>
      <S.ContainerBg>
        <HeaderSecond />
        <S.ModalBlock>
          <S.ModalContent>
            <S.ModalTitle>
              <S.ModalBtnReturnMobile onClick={closeModal}>
                <S.ModalBtnReturnImgMobile src='/img/return.png' />
              </S.ModalBtnReturnMobile>
              Отзывы о товаре
            </S.ModalTitle>
            <S.ModalBtnClose onClick={closeModal}>
              <S.ModalBtnCloseLine />
            </S.ModalBtnClose>
            <SU.ModalScroll>
              <S.ModalFormNewArtFormNewArt>
                <S.FormNewArtBlock>
                  <S.Label htmlFor='text'>Добавить отзыв</S.Label>
                  <S.FormNewArtArea
                    cols='auto'
                    rows='5'
                    placeholder='Введите описание'
                    onChange={(e) => setComment(e.target.value) }
                  />
                </S.FormNewArtBlock>
                <S.FormNewArtBtnPubBtnHov02 onClick={addNewComment}>
                  Опубликовать
                </S.FormNewArtBtnPubBtnHov02>
              </S.ModalFormNewArtFormNewArt>
              <SU.ModalReviewsReviews>
                {dataComments.map((review) => (
                  <SU.Review key={review.id}>
                    <SU.ReviewItem>
                      <SU.ReviewLeft>
                        <SU.ReviewImg>
                          <SU.Img src={`http://localhost:8090/${review.author.avatar}`} alt='' />
                        </SU.ReviewImg>
                      </SU.ReviewLeft>
                      <SU.ReviewRight>
                        <SU.ReviewNameFontT>
                          {review.author.name} <SU.Span>{getTime(review.created_on)}</SU.Span>
                        </SU.ReviewNameFontT>
                        <SU.ReviewTitleFontT>Комментарий</SU.ReviewTitleFontT>
                        <SU.ReviewTextFontT>
                          {review.text}
                        </SU.ReviewTextFontT>
                      </SU.ReviewRight>
                    </SU.ReviewItem>
                  </SU.Review>
                ))}
              </SU.ModalReviewsReviews>
            </SU.ModalScroll>
          </S.ModalContent>
        </S.ModalBlock>
        <Footer />
      </S.ContainerBg>
    </S.Wrapper>
  );
};
