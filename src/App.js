/* React-Bootstrap and CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './App.css';

/* React */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { UserProvider } from './UserContext';

/* Components */
import AppNavbar from './components/AppNavBar';
import ProductView from './components/ProductView';
import Footer from './components/Footer';
import CreateProduct from './components/DashboardCreate';
import UpdateProduct from './components/DashboardUpdate';
import ProductUpdate from './components/DashboardUpdate';
import GetAllOrders from './components/DashboardAllOrders';

/* Pages */
import Home from './pages/Home';
import Library from './pages/Library';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import Cart from './pages/Cart';
import PageNotFound from './pages/Error';
import Admin from './pages/AdminDashboard';






function App() {
  
  const [user, setUser] = useState({
    id: null,
    isAdmin: null
  })

  // Function for clearing localStorage on Logout
  const unsetUser = () => {
    localStorage.clear();
  }

  // Check if UserData is Cleared upon Logout
  useEffect(() => {
    console.log(user);
    console.log(localStorage);
  }, [user])

  useEffect(() => {

		// console.log(user);

		fetch(`${ process.env.REACT_APP_API_URL }/ecommerce/users/details`, {
			headers: {
				Authorization: `Bearer ${ localStorage.getItem('token') }`
			}
		})
		.then(res => res.json())
		.then(data => {

			// Set the user states values with the user details upon successful login.
			if (typeof data._id !== "undefined") {

				setUser({
					id: data._id,
					isAdmin: data.isAdmin
				});

			// Else set the user states to the initial values
			} else {

				setUser({
					id: null,
					isAdmin: null
				});

			}

		})

    }, []);



    // order of components matter
  return (
    <UserProvider value={{ user, setUser, unsetUser }}>
      <Router>
        <AppNavbar />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/library" component={Library} />
            <Route exact path="/library/:productId" component={ProductView} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/createproduct" component={CreateProduct} />
            <Route exact path="/updateproduct" component={UpdateProduct} />
            <Route exact path="/updateproduct/:productId" component={ProductUpdate} />
            <Route exact path="/allorders" component={GetAllOrders} />
            <Route component={PageNotFound} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;
