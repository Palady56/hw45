import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './redux/userSlice';

import { getPosts, selectPosts, selectLoading, selectError } from './redux/async';

export default function UserProfile() {

  const posts = useSelector(selectPosts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const handleLogin = () => {
    dispatch(login('Sergey Potapov'));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {user.isLoggedIn ? (
        <div>
          <h1>Hello, {user.name}</h1>
          <button onClick={handleLogout}>Logout</button>
          <div>
            <h2>Your posts:</h2>
            <ul>
              {posts.map(post => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};