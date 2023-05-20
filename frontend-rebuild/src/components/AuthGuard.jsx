import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from "../services/Auth";
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

  useEffect(() => {
    const isAuth = AuthService.isAuthorized();
    setIsAuth(isAuth);
    if (!isAuth) {
      navigate('/login');
    }
  }, []);

  if (!isAuth) return null;


  return (
    <>{props.children}</>
  )
};

export default AuthGuard;