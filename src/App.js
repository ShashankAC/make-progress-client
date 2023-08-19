import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Home from './containers/Home';
import GoalDetails from './components/GoalDetails';
import NotFound from './containers/NotFound';
import { ApolloConsumer, useQuery } from "@apollo/client";
import { IS_LOGGED_IN } from './containers/Login/queries';

function NewUserRoutes() {
  
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <SignUp /> } />
        <Route path='/login' element={ <ApolloConsumer>{client => <Login client={client} />}</ApolloConsumer> } />
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
        <Route path="/goalDetails/:id" element={<GoalDetails />} />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </div>
  )
}

function App() {
  const { data } = useQuery(IS_LOGGED_IN);
  return (
    <>
      {data?.isLoggedIn && AuthRoutes()}
      {!data?.isLoggedIn && NewUserRoutes()}
    </>
  )
}

export default App;


