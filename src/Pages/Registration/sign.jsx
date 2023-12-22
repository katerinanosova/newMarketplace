import { useEffect, useState } from 'react';
import { SignIn } from '../../Components/Registration/signIn';
import { SignUp } from '../../Components/Registration/signUp';
import { useGetNewTokenQuery } from '../../Store/RTKQuery/getToken';


export const Sign = () => {
  const [choiceReg, setChoiceReg] = useState(true);
  useEffect(() => {
    setChoiceReg(true);
  }, []);

  return choiceReg ? (
    <SignIn setChoiceReg={setChoiceReg} />
  ) : (
    <SignUp setChoiceReg={setChoiceReg}/>
  );
};
