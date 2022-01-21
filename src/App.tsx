import React, { FC, useContext, useRef, useState } from 'react';
import { UserContext } from './context/TokenProvider';
import { login } from './context/action';

export const App: FC = () => {
  const { token, dispatch } = useContext(UserContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const nameInput = useRef(null);
  const passwordInput = useRef(null);
  const roleSelect = useRef(null);

  console.log(token);

  const handleDispatch = () => {
    login(dispatch, {
      name: name,
      password: password,
      role: role,
    });
  };

  const handleChangeName = () => {
    setName(nameInput.current.value);
  };

  const handleChangePassword = () => {
    setPassword(passwordInput.current.value);
  };

  const handleChangeRole = () => {
    setRole(roleSelect.current.value);
  };

  return (
    <>
      {token.role ? (
        <div>
          Hello {token.role} {token.name}
        </div>
      ) : null}
      <form>
        <input
          ref={nameInput}
          type="text"
          value={name}
          onInput={handleChangeName}
        />
        <input
          ref={passwordInput}
          type="password"
          value={password}
          onInput={handleChangePassword}
        />
        <select
          value={role}
          ref={roleSelect}
          name=""
          id=""
          onChange={handleChangeRole}
        >
          <option>Set role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
        <div onClick={handleDispatch}>Submit</div>
      </form>
    </>
  );
};
