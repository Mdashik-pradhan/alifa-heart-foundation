import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Footer from './Shares/Footer/Footer';
import Header from './Shares/Header/Header';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import LoginPage from './Pages/LoginPage/LoginPage/LoginPage';
import RegisterPage from './Pages/RagisterPage/RegiserPage/RegisterPage';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import User from './Pages/Users/User/User';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/services">
            <Services />
          </PrivateRoute>
          <PrivateRoute path="/serviceDetails/:_id">
            <ServiceDetails />
          </PrivateRoute>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <PrivateRoute path="/user">
            <User />
          </PrivateRoute>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
