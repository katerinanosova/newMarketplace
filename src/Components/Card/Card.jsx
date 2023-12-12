import { Link } from 'react-router-dom';
import * as S from './Card.styled';

export const Card = ({ product }) => {
  return (
    <S.CardItem>
      <S.CardItemContainer>
        <S.CardImageWrapper>
          <Link to={`/product/${product.id}`} >
            <S.CardImage src='#' alt='picture' />
          </Link>
        </S.CardImageWrapper>
        <S.CardContent>
          <S.CardContentLink>
            <Link to={`/product/${product.id}`} >
              <S.CardTitle>{product.goods}</S.CardTitle>
            </Link>
          </S.CardContentLink>
          <S.CardPrice>{product.price}</S.CardPrice>
          <S.CardPlace>{product.place}</S.CardPlace>
          <S.CardDate>{product.time}</S.CardDate>
        </S.CardContent>
      </S.CardItemContainer>
    </S.CardItem>
  );
};
