import { useEffect, useState } from 'react';
import { SignIn } from '../../Components/Registration/signIn';
import { SignUp } from '../../Components/Registration/signUp';
import { useGetNewTokenQuery } from '../../Store/RTKQuery/getToken';
import * as S from '../Main/main.styled'
import { Header } from '../../Components/Header/Header';
import { Footer } from '../../Components/Footer/Footer';
import { HeaderSecond } from '../../Components/HeaderSecond/HeaderSecond';


export const Sign = () => {
  const [choiceReg, setChoiceReg] = useState(true);
  useEffect(() => {
    setChoiceReg(true);
  }, []);

  return (
    // <S.Wrapper>
    //   <S.Container>
        <>
        <Header />
        {choiceReg ?
        <SignIn setChoiceReg={setChoiceReg} /> :
        <SignUp setChoiceReg={setChoiceReg} />}
        <Footer />
        </>
    //   </S.Container>
    // </S.Wrapper>
  )
};
