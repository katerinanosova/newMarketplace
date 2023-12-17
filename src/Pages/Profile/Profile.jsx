import { HeaderSecond } from '../../Components/HeaderSecond/HeaderSecond';
import { ReturnToMain } from '../../Components/ReturnToMain.js/ReturnToMain';
import { Card } from '../../Components/Card/Card';
import { Footer } from '../../Components/Footer/Footer';
import * as S from './Profile.styled';
import { useChangeMeMutation, useGetMeQuery } from '../../Store/RTKQuery/getMe';
import { getAccessTokenLocal } from '../../helpers/token';
import { updateToken } from '../../Api/tokenApi';
import { useEffect, useState } from 'react';
import { handleChangeMe, profileUserData, saveUserLocal } from '../../helpers/user';

export const Profile = ({ products }) => {
  const [city, setCity] = useState('')
  const [avatar, setAvatar] = useState(null)
  const [userName, setUserName] = useState('')
  const [phone, setPhone] = useState('')
  const [surname, setSurname] = useState('')
  const access = getAccessTokenLocal()
  const {data =[], isError, error, isSuccess, refetch} = useGetMeQuery(access);
  const [changeMe, {isError: isErrorChangeMe, error: errorChangeMe}] = useChangeMeMutation()
  const asyncUpgate = async () => {
    console.log('begin update');
    await updateToken()
    await refetch()
    console.log('refetch');
    return
  }
  useEffect(() => {
    if(isSuccess) {
      const response = data
      console.log(response);
      console.log(localStorage.getItem('access'));
      saveUserLocal(response.email, response.name, response.id)
      profileUserData(data, setUserName, setSurname, setCity, setPhone, setAvatar)
      
    }
    if(isError && error.status === 401 && error.data.detail === "Could not validate credentials: Not enough segments") {
      console.log(localStorage.getItem('access'));
      console.log(error);
      asyncUpgate()
      return
    }
    if(isError && error.status === 401 && error.data.detail === 'Could not validate credentials: Signature has expired') {
      console.log('update');
      asyncUpgate()
      return
    }
  }, [isSuccess, isError])



  return (
    <S.Wrapper>
      <S.Container>
        <HeaderSecond />
        <S.Main>
          <S.MainContainer>
            <S.MainCenterBlock>
              <ReturnToMain />
              <S.MainH2>{userName === '' ? "Здравствуйте, Неизвестный!" : `Здравствуйте, ${userName}!`}</S.MainH2>
              <S.MainProfile>
                <S.ProfileContent>
                  <S.ProfileTitle>Настройки профиля</S.ProfileTitle>
                  <S.ProfileSettings>
                    <S.SettingsLeft>
                      <S.SettingsImg>
                        <S.SettingsImgLink href='#' target='_self'>
                          <S.SettingsImgImg src={avatar === null ? 'img/empty-profile.svg' : `${avatar}`} />
                        </S.SettingsImgLink>
                      </S.SettingsImg>
                      <S.SettingsChangePhoto href='#' target='_self'>
                        Заменить
                      </S.SettingsChangePhoto>
                    </S.SettingsLeft>

                    <S.SettingsRight>
                      <S.SettingsForm>
                        <S.SettingsNameBox>
                          <S.SettingsDiv>
                            <S.SettingsLabel htmlFor='settings-fname'>
                              Имя
                            </S.SettingsLabel>
                            <S.SettingsFName
                              name='fname'
                              type='text'
                              placeholder=''
                              value={userName}
                              onChange={e => setUserName(e.target.value)}
                            />
                          </S.SettingsDiv>

                          <S.SettingsDiv>
                            <S.SettingsLabel htmlFor='settings-lname'>
                              Фамилия
                            </S.SettingsLabel>
                            <S.SettingsLName
                              name='lname'
                              type='text'
                              placeholder=''
                              value={surname}
                              onChange={e => setSurname(e.target.value)}
                            />
                          </S.SettingsDiv>
                        </S.SettingsNameBox>
                        <S.SettingsDiv>
                          <S.SettingsLabel htmlFor='settings-city'>
                            Город
                          </S.SettingsLabel>
                          <S.SettingsCity
                            name='city'
                            type='text'
                            placeholder=''
                            value={city}
                            onChange={e => setCity(e.target.value)}
                          />
                        </S.SettingsDiv>

                        <S.SettingsDiv>
                          <S.SettingsLabel htmlFor='settings-phone'>
                            Телефон
                          </S.SettingsLabel>
                          <S.SettingsPhone
                            name='phone'
                            type='tel'
                            placeholder='+...'
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                          />
                        </S.SettingsDiv>

                        <S.SettingsButton onClick={() => handleChangeMe(access, userName, surname, phone, city, changeMe)}>Сохранить</S.SettingsButton>
                      </S.SettingsForm>
                    </S.SettingsRight>
                  </S.ProfileSettings>
                </S.ProfileContent>
              </S.MainProfile>
              <S.MainTitle>Мои товары</S.MainTitle>
            </S.MainCenterBlock>
            <S.MainContent>
              <S.ContentCards>
                {products.map((product) => (
                  <Card key={product.id} product={product} />
                ))}
              </S.ContentCards>
            </S.MainContent>
          </S.MainContainer>
        </S.Main>
        <Footer />
      </S.Container>
    </S.Wrapper>
  );
};
