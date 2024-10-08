import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './redux/userSlice';

export default function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogin = () => {
    dispatch(login('Sergey Potapov'));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {user.isLoggedIn ? (
        <div>
          <h1>Hello, {user.name}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

