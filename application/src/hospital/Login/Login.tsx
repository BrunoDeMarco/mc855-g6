import * as React from 'react';
import { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { HospitalBaseLayout } from '../components/HospitalBaseLayout/HospitalBaseLayout';
import SessionContext from '../SessionContextProvider/SessionContextProvider';
import { login } from '../helpers/login';

export const Login: React.FC = () => {
  const { values, setUsername, setToken } = useContext(SessionContext);

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const setUserData = (userData: string) => {
    setUser(userData);
    setUsername(userData);
  }

  // TODO fix to call login()
  const handleClick = () => {
    setToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInJvbGUiOjAsImlhdCI6MTY1Nzg2NDA4OCwiZXhwIjoxNjU4NDY4ODg4fQ.-EQy2HVHh5GAxW7npOlRZ5De1L0KGdVLRmhpxa52N6s");
    console.log(values);
  };

  return (
    <HospitalBaseLayout>
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
                Sign in
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Usuário"
              name="username"
              value={user}
              autoComplete="username"
              autoFocus
              onChange={(e) => setUserData(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Senha"
              name="password"
              value={password}
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClick}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </HospitalBaseLayout>
  );
}
