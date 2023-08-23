import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersData } from '../../redux/users/usersSlice';
import './Users.css';

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(usersData());
  }, []);

  return (
    <section className="users__section">
      <article className="users__container">
        <h2 className="users__title">List of users</h2>
        {users.isLoading && <p className="users__loading">Loading Users...</p>}
        {!users.isLoading && users.users.length ? (
          <ul className="users__list__container">
            {users.users.map((user, ind) => (
              <li
                key={user.location.street.number}
                className="users__list__items"
              >
                <p className="users__name">
                  <span className="users__bold">
                    User
                    {' '}
                    {ind + 1}
                    :
                    {' '}

                  </span>
                  {user.name.first}
                  {' '}
                  {user.name.first}
                </p>
              </li>
            ))}
          </ul>
        ) : null}
        {!users.isLoading && users.error ? <div>{users.error}</div> : null}
      </article>
    </section>
  );
}

export default Users;
