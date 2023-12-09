import { Header } from '../../Components/Header/Header';
import { Card } from '../../Components/Card/Card';
import { Footer } from '../../Components/Footer/Footer';
import { Link } from 'react-router-dom';
import * as S from './Profile.styled';

export const Profile = ({ setButtonsPage }) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Header>
          <S.HeaderNav>
            <S.HeaderLogo>
              <S.LogoMobLink target='_blank'>
                <S.LogoMobImg src='img/logo-mob.png' alt='logo' />
              </S.LogoMobLink>
            </S.HeaderLogo>
            <S.HeaderBtnPutAd>Разместить объявление</S.HeaderBtnPutAd>
            <S.HeaderButtonSecond>
              Личный кабинет
            </S.HeaderButtonSecond>
          </S.HeaderNav>
        </S.Header>
        <S.Main>
          <S.MainContainer>
            <S.MainCenterBlock>
              <S.Menu>
                <S.MenuLogoLink target='_blank'>
                  <S.MenuLogoImg src='img/logo.png' alt='logo' />
                </S.MenuLogoLink>
                <S.MenuForm action='#'>
                  <Link to='/'>
                    <S.MenuBtn onClick={() => setButtonsPage(true)}>
                      
                      Вернуться на&nbsp;главную
                    </S.MenuBtn>
                  </Link>
                </S.MenuForm>
              </S.Menu>
              <S.MainH2>Здравствуйте, Антон!</S.MainH2>
              <S.MainProfile>
                <S.ProfileContent>
                  <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
                  <S.ProfileSettings>
                    <S.SettingsLeft>
                      <S.SettingsImg>
                        <S.SettingsImgLink href='#' target='_self'>
                          <S.SettingsImgImg src='img/empty-profile.svg' />
                        </S.SettingsImgLink>
                      </S.SettingsImg>
                      <S.SettingsChangePhoto href='#' target='_self'>
                        Заменить
                      </S.SettingsChangePhoto>
                    </S.SettingsLeft>

                    <S.SettingsRight>
                      <S.SettingsForm>
                        <S.SettingsDiv>
                          <S.SettingsLabel htmlFor='settings-fname'>
                            Имя
                          </S.SettingsLabel>
                          <S.SettingsFName
                            id='settings-fname'
                            name='fname'
                            type='text'
                            value='Ан'
                            placeholder=''
                          />
                        </S.SettingsDiv>

                        <S.SettingsDiv>
                          <S.SettingsLabel htmlFor='settings-lname'>
                            Фамилия
                          </S.SettingsLabel>
                          <S.SettingsLName
                            id='settings-lname'
                            name='lname'
                            type='text'
                            value='Городецкий'
                            placeholder=''
                          />
                        </S.SettingsDiv>

                        <S.SettingsDiv>
                          <S.SettingsLabel htmlFor='settings-city'>
                            Город
                          </S.SettingsLabel>
                          <S.SettingsCity
                            id='settings-city'
                            name='city'
                            type='text'
                            value='Санкт-Петербург'
                            placeholder=''
                          />
                        </S.SettingsDiv>

                        <S.SettingsDiv>
                          <S.SettingsLabel htmlFor='settings-phone'>
                            Телефон
                          </S.SettingsLabel>
                          <S.SettingsPhone
                            id='settings-phone'
                            name='phone'
                            type='tel'
                            value='89161234567'
                            placeholder='+79161234567'
                          />
                        </S.SettingsDiv>

                        <S.SettingsButton id='settings-btn'>
                          Сохранить
                        </S.SettingsButton>
                      </S.SettingsForm>
                    </S.SettingsRight>
                  </S.ProfileSettings>
                </S.ProfileContent>
              </S.MainProfile>
              <S.MainTitle>Мои товары</S.MainTitle>
            </S.MainCenterBlock>
            <S.MainContent>
              <S.ContentCards>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </S.ContentCards>
            </S.MainContent>
          </S.MainContainer>
        </S.Main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
