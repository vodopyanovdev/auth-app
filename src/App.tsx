import React, { ChangeEvent, FC, useContext, useRef, useState } from 'react';
import { UserContext } from './context/TokenProvider';
import { login, logout } from './context/action';
import {
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  Typography,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material';
import { Box } from '@mui/system';

export const App: FC = () => {
  const { token, dispatch } = useContext(UserContext);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const nameInput = useRef(null);
  const passwordInput = useRef(null);

  const handleLogin = () => {
    login(dispatch, {
      name: name,
      password: password,
      role: role,
    });
  };

  const handleLogOut = () => {
    logout(dispatch);
  };

  const handleChangeName = () => {
    setName(nameInput.current.value);
  };

  const handleChangePassword = () => {
    setPassword(passwordInput.current.value);
  };

  const handleChangeRole = (e: SelectChangeEvent<string>) => {
    setRole(e.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <FormControl>
        {!token.role ? (
          <>
            <TextField
              sx={{ marginBottom: '1rem' }}
              inputRef={nameInput}
              value={name}
              label="Name"
              onChange={handleChangeName}
            />
            <TextField
              sx={{ marginBottom: '1rem' }}
              inputRef={passwordInput}
              type="password"
              label="Password"
              value={password}
              onInput={handleChangePassword}
            />
            <Select
              sx={{ marginBottom: '1rem' }}
              defaultValue={role}
              value={role}
              onChange={handleChangeRole}
            >
              <MenuItem value="admin">Admin</MenuItem>
              <MenuItem value="user">User</MenuItem>
            </Select>
          </>
        ) : token.role === 'admin' ? (
          <Typography>{token.name}, its your Dashboard</Typography>
        ) : (
          <Typography>{token.name}, its your profile</Typography>
        )}
        {!token.role ? (
          <Button variant="contained" onClick={handleLogin}>
            LogIn
          </Button>
        ) : (
          <Button variant="contained" onClick={handleLogOut}>
            LogOut
          </Button>
        )}
      </FormControl>
    </Box>
  );
};
