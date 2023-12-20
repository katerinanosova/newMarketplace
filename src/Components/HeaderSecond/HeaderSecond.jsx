import { useNavigate } from 'react-router-dom';
import * as S from './HeaderSecond.styled';
import { useState, useEffect } from 'react';
import { NewProduct } from '../NewProductAdd/newProduct';

export const HeaderSecond = ({setNewProductModal}) => {

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleOpenModal = () => {
    navigate('/new-product');
  };

  const handleCloseModal = () => {
    navigate('/profile');
  };

  return (
    <S.Header>
      <S.HeaderNav>
        <S.HeaderLogo>
          <S.LogoMobLink to='/' target='_blank'>
            <S.LogoMobImg src='/img/logo-mob.png' alt='logo' />
          </S.LogoMobLink>
        </S.HeaderLogo>
        <S.HeaderBtnPutAd onClick={handleOpenModal}>
            Разместить объявление
        </S.HeaderBtnPutAd>
        <S.HeaderButtonSecond>Личный кабинет</S.HeaderButtonSecond>
      </S.HeaderNav>
      {isModalOpen && <NewProduct closeModal={handleCloseModal} />}
    </S.Header>
  );
};
