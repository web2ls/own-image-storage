import { useNavigate } from 'react-router-dom';
import AuthService from "../services/Auth";

const AuthGuard = (props) => {
  const navigate = useNavigate();

  const isAuth = AuthService.isAuthorized();

  if (!isAuth) {
    navigate('/login');
    return null;
  }

  return (
    <>{props.children}</>
  )
};

export default AuthGuard;