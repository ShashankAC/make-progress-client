import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLazyQuery } from "@apollo/client";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';
import Logo from '../../assets/Logo.jpg';
import { LOGIN_USER } from './queries';

function Login() {

  const [emailOrUserName, setEmailOrUserName] = useState();
  const [emailOrUserNameError, setEmailOrUserNameError] = useState();
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState();
  const [login, { loading, data, error }] = useLazyQuery(LOGIN_USER, {
    variables: { usernameOrEmail: emailOrUserName, password: password },
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    switch(e.target.name) {
      case 'emailOrUserName':
        setEmailOrUserName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
    }
  }

  useEffect(() => {
    if (data && !loading) {
      navigate('/home');
    } else if (error && !loading) {
      setEmailOrUserNameError(error.message);
    }
  }, [loading, error, data, navigate])

  const handleLogin = async(e) => {
    e.preventDefault();
    try {
      login();
    }
    catch(error) {
      setEmailOrUserNameError(error.message);
      throw new Error(`Cannot authenticate: ${error}`);
    }
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate('/');
  }

  return (
      <Grid
        container
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item 
          xl={4}
          lg={4}
          md={8}
          sm={8}
          xs={8}
        >
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            { error ? "Something went wrong" : <CircularProgress color="inherit" /> }
          </Backdrop>
          <Card>
            <CardMedia
              component="img"
              height="fit-content"
              image={Logo}
              alt="Make Progress"
            />
            <CardContent>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1 },
                }}
                noValidate
                autoComplete="off"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <form method='POST'>
                  <TextField
                    fullWidth
                    required
                    error={emailOrUserNameError}
                    name="emailOrUserName"
                    label="Email or Username"
                    value={emailOrUserName}
                    helperText={emailOrUserNameError ? 'Email or Username not found': ''}
                    type='text'
                    onChange={handleChange}
                    onBlur={handleChange}
                  />
                  <TextField
                    fullWidth
                    required
                    error={passwordError}
                    name="password"
                    label="Password"
                    value={password}
                    helperText={passwordError ? 'Please enter a password': ''}
                    type='password'
                    onChange={handleChange}
                  />
                  <Box display="block">
                    <Button onClick={handleLogin}>
                      Login
                    </Button>
                    <Typography>Don't have an account ? Sign up now</Typography>
                      <Button onClick={handleSignUp}>
                        Sign up  
                      </Button>
                  </Box>
                </form>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
  )
}

export default Login;