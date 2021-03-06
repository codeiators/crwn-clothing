
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Route,Switch,Redirect} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
import React from 'react';

class App extends React.Component {



  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth =   auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot( snapshot => {
            this.props.setCurrentUser({
               id:snapshot.id,
               ...snapshot.data()
            });
            });
        }
      this.props.setCurrentUser(userAuth) 
  })
}

  componentWillUnmount()
  {
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
        <Route  exact  path='/' component={HomePage} />
        <Route   path='/shop' component={ShopPage} />
        <Route  exact path='/signin' render = {() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage/>)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
     currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({

  setCurrentUser: user => dispatch(setCurrentUser(user))

})
export default connect(mapStateToProps,mapDispatchToProps)(App);
