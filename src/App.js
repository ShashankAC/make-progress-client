import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Home from './containers/Home';
import NotFound from './containers/NotFound';
import { userData } from './utils/cacheStore';
import { useReactiveVar } from "@apollo/client";

function NewUserRoutes() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <SignUp /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

function AuthRoutes() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/home' element= { <Home /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </div>
  )
}

function App() {
  const authState = useReactiveVar(userData);
  return (
    <>
      {authState?.userId && AuthRoutes()}
      {!authState?.userId && NewUserRoutes()}
    </>
  )
}

export default App;


