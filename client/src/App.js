import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Categories from './Pages/Categories';
import Login from './Pages/Login';
import Register from './Pages/Register';
import LogOut from './Pages/LogOut';
import Profile from './Pages/Profile';
import Details from './Pages/Details';
import Edit from './Pages/Edit';
import CreateSell from './Pages/CreateSell';
import EditProfile from './Pages/EditProfile';
import Error404 from './Pages/Error404';
import Messages from './Pages/Messages'
import Pay from './Pages/Pay';

function App() {
   return (
      <>
         <Header />
         <Switch>
            <Route path="/" exact component={Categories} />
            <Route path="https://nexnotesapp.herokuapp.com/categories/:category" exact component={Categories} />
            <Route path="https://nexnotesapp.herokuapp.com/categories/:category/:id/details" component={Details} />
            <Route path="https://nexnotesapp.herokuapp.com/categories/:category/:id/edit" component={Edit} />
            <Route path="https://nexnotesapp.herokuapp.com/auth/login" exact component={Login} />
            <Route path="https://nexnotesapp.herokuapp.com/auth/register" exact component={Register} />
            <Route path="https://nexnotesapp.herokuapp.com/auth/logout" exact render={LogOut} />
            <Route path='https://nexnotesapp.herokuapp.com/add-product' exact component={CreateSell} />;
            <Route path='https://nexnotesapp.herokuapp.com/profile/:id' exact component={Profile} />;
            <Route path='https://notexchange.shop/profile/:id/edit' exact component={EditProfile} />;
            <Route path='https://nexnotesapp.herokuapp.com/messages' exact component={Messages} />;
            <Route path='https://nexnotesapp.herokuapp.com/pay' exact component={Pay} />;
            <Route path='https://nexnotesapp.herokuapp.com/messages/:id' exact component={Messages} />;
            <Route component={Error404} />
         </Switch>
         <Footer />
      </>
   );
}

export default App;
