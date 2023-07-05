import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink, ApolloLink } from "@apollo/client";
import { BrowserRouter } from 'react-router-dom';

const authToken = localStorage.getItem('token');

const headers = {};

if (authToken) {
  headers['Authorization'] = `Bearer ${authToken}`;
}
headers['Content-Type'] = 'application/json; charset=utf-8';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql',
  headers,
});

// our custom "afterware" that checks each response and saves the auth token
  // if it contains an 'Authorization' header
  const afterwareLink = new ApolloLink((operation, forward) => {
    return forward(operation).map(response => {
      const context = operation.getContext();
      const authHeader = context.response.headers.get("Authorization");

      // We would see this log in the SSR logs in the terminal
      // but in the browser console it would always be null!

      if (authHeader) {
        // cut off the 'Bearer ' part from the header
        const token = authHeader.replace("Bearer ", "");
        localStorage.setItem('token', token) // save sessionID, e.g. in a cookie
      }
      return response;
    });
  });

// this is how we combine middlewares in Apollo client

const client = new ApolloClient({
  link: ApolloLink.from([
    // place any other links before the line below
    afterwareLink.concat(httpLink),
  ]),
  cache: new InMemoryCache(),
});



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
