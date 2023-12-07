import { Link } from "react-router-dom"
import * as S from "./Card.styled"

export const Card = () => {

    return (
        <S.CardItem>
            <S.CardItemContainer>
                <S.CardImageWrapper>
                    <Link to='/'>
                        <S.CardImage src="#" alt="picture" />
                    </Link>
                </S.CardImageWrapper>
                <S.CardContent>
                    <S.CardTitle to='/'>Ракетка для большого тенниса Triumph Pro ST</S.CardTitle>
                    <S.CardPrice>2&nbsp;200&nbsp;₽</S.CardPrice>
                    <S.CardPlace>Санкт Петербург</S.CardPlace>
                    <S.CardDate>Сегодня в&nbsp;10:45</S.CardDate>
                </S.CardContent>
            </S.CardItemContainer>
        </S.CardItem>

        // <div className="cards__item">
        //     <div className="cards__card card">
        //         <div className="card__image">
        //             <a href="#" target="_blank">
        //                 <img src="#" alt="picture" />
        //             </a>
        //         </div>
        //         <div className="card__content">
        //             <a href="" target="_blank">
        //                 <h3 className="card__title">Ракетка для большого тенниса Triumph Pro ST</h3>
        //             </a>
        //             <p className="card__price">2&nbsp;200&nbsp;₽</p>
        //             <p className="card__place">Санкт Петербург</p>
        //             <p className="card__date">Сегодня в&nbsp;10:45</p>
        //         </div>
        //     </div>
        // </div>
    )
}