import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { verifyAuth } from './actions/userActions';

import SignOut from './SignOut';
import ComingSoon from './components/ComingSoon';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Onboarding from './components/OnboardingPage';
import ForgotPassword from './components/ForgotPassword';
import Main from './components/Main';
import Landing from './components/Landing';
import ExploreFeeds from './components/ExploreFeeds';
import ReadLater from './components/ReadLater'
import ReadNews from './components/ReadNews';
import SingleFeed from './components/SingleFeed';
import HowItWorks from './components/HowItWorks';
import './App.css'

const App = ({ verifyAuth }) => {
    useEffect(() => {
        verifyAuth();
    }, [verifyAuth]);

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route  path="/" exact component={Landing} />
                    <Route exact path="/main/:newsletterId" component={Main} />
                    <Route path="/comingsoon" exact component={ComingSoon} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/onboarding" component={Onboarding} />
                    <Route path="/forgotpassword" component={ForgotPassword} />
                    <Route path="/signout" component={SignOut} />
                    <Route path="/explore-feeds" component={ExploreFeeds} />
                    <Route path="/read-later" component={ReadLater} />
                    <Route path="/news/:id" component={ReadNews} />
                    <Route path="/feed/:feedId" component={SingleFeed} />
                    <Route path="/howitworks" component={HowItWorks} />
                </Switch>
            </Router>
        </div>
    );
};

const mapDispatchToProps = {
    verifyAuth,
};

export default connect(null, mapDispatchToProps)(App);
