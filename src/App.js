import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuth } from 'firebase/auth';
import './App.scss';

import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignInAndSignUp from './pages/sign-in-and-signup/sign-in-and-signup.comonent';

import { createUserProfileDocument } from './firebase/firebase.utils';
import { getDoc } from 'firebase/firestore';
import { setCurrentUser } from './redux/user/user.actions';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51JlkpDC8sYf7tfndST56Li8MQWzQpnaC7b1rRSXHTUYgXDJZ4r9dF5IUNV6EWVLTsjzy8kXfxR8v6apJ1feanHS200wJ4XiCFe'
);

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const auth = getAuth();
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      try {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth, {
            role: 'user',
          });
          const newUserSnap = await getDoc(userRef);
          setCurrentUser(newUserSnap.data());
        } else {
          setCurrentUser(userAuth);
        }
      } catch (err) {
        console.log(err);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Elements stripe={stripePromise}>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              path="/signin"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUp />
                )
              }
            />
          </Switch>
        </Elements>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
