import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Pages/HomePage/Homepage';
import PrivateRoute from './routes/PrivateRoute';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import AuthProvider from './context/AuthProvider';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ExploreAllProducts from './Pages/ExploreAllProducts/ExploreAllProducts';
import ProductDetailsPage from './Pages/ProductDetailsPage/ProductDetailsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider >

          <Switch>
            <Route exact path="/">
              <NavigationBar />
              <Homepage />
            </Route>
            <Route path="/home">
              <NavigationBar />
              <Homepage />
            </Route>
            <Route path="/explore-all">
              <NavigationBar />
              <ExploreAllProducts />
            </Route>
            <Route path="/explore-all"></Route>
            <Route path="/signin">
              <NavigationBar />
              <Login />
            </Route>
            <Route path="/signup">
              <NavigationBar />
              <NavigationBar />
              <Register />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/productDetails/:id">
              <NavigationBar />
              <ProductDetailsPage></ProductDetailsPage>
            </PrivateRoute>
          </Switch>
        </AuthProvider>
      </BrowserRouter >
    </div >
  );
}

export default App;
