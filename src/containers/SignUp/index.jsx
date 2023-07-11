import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { REGISTER_USER_MUTATION } from './queries';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Logo from '../../assets/Logo.jpg';
import Box from '@mui/material/Box';
import { containsNumbers, isValidEmail } from '../../utils/regex';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Typography } from '@mui/material';

function SignUp() {
  const [email, setEmail] = useState();
  const [emailError, setEmailError] = useState();
  const [name, setName] = useState();
  const [nameError, setNameError] = useState();
  const [password, setPassword] = useState();
  const [passwordError, setPasswordError] = useState();
  // const [openBackdrop, setOpenBackdrop] = useState();
  const [createUser, { loading, data, error }] = useMutation(REGISTER_USER_MUTATION);
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await createUser(
        { variables: { name: name, email: email, password: password }}
      );
      // Access the success response and token from the Apollo Client data object
      // const { token } = response;
      // Store the token in localStorage or as a cookie
      // localStorage.setItem('token', token);
      if(!response.errors && data) {
        navigate('/login');
      } else {
        setNameError('Unable to Sign Up :(')
      }
      // After successful login
    } catch(error) {
        throw new Error(`Cannot register: ${error}`);
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/login');
  }

  const handleChange = (e) => {
    const value = e.target.value
    switch (e.target.name) {
      case 'name':
        setName(value);
        if (containsNumbers(value)) {
          setNameError(true);
        } else if (value.length === 0) {
          setNameError('Please enter a name');
        } else {
          setNameError('');
        }
        break;
      case 'email':
        setEmail(value);
        if (value.length === 0) {
          setEmailError('Please enter an email address');
        } else if (!isValidEmail(value)) {
          setEmailError('Please enter a valid email');
        } else {
          setEmailError('');
        }
        break;
      case 'password':
        setPassword(value);
        if (value.length === 0) {
          setPasswordError('Please enter a password');
        } else {
          setPasswordError('');
        }
        break;
      default:
    }
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
              <TextField
                fullWidth
                required
                error={nameError}
                name="name"
                label="Name"
                value={name}
                helperText={nameError}
                type='text'
                onChange={handleChange}
              />
              <TextField
                fullWidth
                required
                error={emailError}
                name="email"
                label="Email"
                value={email}
                helperText={emailError}
                type='email'
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
                helperText={passwordError}
                type='password'
                onChange={handleChange}
              />
              <Box
                display="block"
              >
                <Button
                  type='submit'
                  onClick={handleSubmit}
                >
                  Sign up
                </Button>
                <Typography>Already have an account ?</Typography>
                <Button
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default SignUp;