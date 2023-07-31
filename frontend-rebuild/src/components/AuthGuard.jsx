import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import fireAuth from '../config/firebase';

const AuthGuard = (props) => {
  const {auth, onAuthStateChanged} = fireAuth;
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
        navigate('/login');
      }
    })
  }, []);

  if (!isAuth) return null;


  return (
    <>{props.children}</>
  )
};

export default AuthGuard;