import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Pages/HomePage/Homepage';
import PrivateRoute from './routes/PrivateRoute';
import MyOrderPage from './Pages/MyOrderPage/MyOrderPage';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider >
          <NavigationBar />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route path="/home">
              <Homepage />
            </Route>
            <Route path="/explore-all"></Route>
            <Route path="/signin"></Route>
            <Route path="/signup"></Route>
            <PrivateRoute path="/myorders">
              <MyOrderPage></MyOrderPage>
            </PrivateRoute>
          </Switch>
        </AuthProvider>
      </BrowserRouter >
    </div>
  );
}

export default App;
