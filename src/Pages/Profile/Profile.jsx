import { HeaderSecond } from '../../Components/HeaderSecond/HeaderSecond';
import { ReturnToMain } from '../../Components/ReturnToMain.js/ReturnToMain';
import { Card } from '../../Components/Card/Card';
import { Footer } from '../../Components/Footer/Footer';
import * as S from './Profile.styled';
import { useDispatch } from 'react-redux';
import { useGetMeQuery } from '../../Store/RTKQuery/getMe';
import { useGetNewTokenMutation } from '../../Store/RTKQuery/getToken';
import { handleRefreshToken } from '../../helpers/token';
import { saveTokenUserAfterSignIn } from '../../Store/Slices/userSlice';

export const Profile = ({ products }) => {
  const dispatch = useDispatch();
  const access = localStorage.getItem('access')
  const refresh = localStorage.getItem('refresh')
  const handleRefreshToken = async (getNewToken, dispatch) => {
    const response = await getNewToken()
    console.log(response);
    dispatch(saveTokenUserAfterSignIn(response))
    
}
  const {data =[], isLoading, isError, error, isSuccess, refetch} = useGetMeQuery(access);
  const [getNewToken] = useGetNewTokenMutation();
  if(isSuccess) {
    const response = data
    console.log(response);
    console.log('done');
    // console.log(data);
  }
  if(isError && error.status !== 401 ){
    // console.log(error.data.detail);
  }
  if(isError && error.status === 401 && error.data.detail !== 'Refresh token is already used or invalid') {
    console.log(error);
    handleRefreshToken(getNewToken, dispatch)
    refetch()
  }

  return (
    <S.Wrapper>
      <S.Container>
        <HeaderSecond />
        <S.Main>
          <S.MainContainer>
            <S.MainCenterBlock>
              <ReturnToMain />
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
                        <S.SettingsNameBox>
                          <S.SettingsDiv>
                            <S.SettingsLabel htmlFor='settings-fname'>
                              Имя
                            </S.SettingsLabel>
                            <S.SettingsFName
                              name='fname'
                              type='text'
                              placeholder=''
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
                          />
                        </S.SettingsDiv>

                        <S.SettingsButton>Сохранить</S.SettingsButton>
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
