import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { verifyAuth } from './actions/userActions';

import SignOut from './SignOut';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Onboarding from './components/OnboardingPage';
import ForgotPassword from './components/ForgotPassword';
import Main from './components/Main';
import Landing from './components/Landing';
import ExploreFeeds from './components/ExploreFeeds';
import ReadLater from './components/ReadLater';
import ReadHistory from './components/ReadHistory';
import HiddenNews from './components/HiddenNews';
import ReadNews from './components/ReadNews';
import SingleFeed from './components/SingleFeed';
import HowItWorks from './components/HowItWorks';
import MainLayout from './components/layouts/MainLayout';
import { SelectedViewProvider } from './contexts/ViewContext';

import './App.css'

const App = ({ verifyAuth, user }) => {
    useEffect(() => {
        verifyAuth();
    }, [verifyAuth]);

    return (
        <div className="App">
            <Router>
                <SelectedViewProvider>
                    <MainLayout activeUser={user}>
                        <Switch>
                            <Route  path="/" exact component={Landing} />

                            <Route path="/how-it-works" component={HowItWorks} />

                            <Route path="/sign-up" component={SignUp} />

                            <Route path="/sign-in" component={SignIn} />

                            <Route path="/signout" component={SignOut} />
                            
                            <Route path="/onboarding" component={Onboarding} />

                            <Route path="/forgotten-password" component={ForgotPassword} />

                            <Route path="/explore-feeds" component={ExploreFeeds} />

                            <Route path="/feed/:feedId" component={SingleFeed} />

                            <Route exact path="/main/:newsletterId" component={Main} />

                            <Route path="/news/:id" component={ReadNews} />

                            <Route path="/read-later" component={ReadLater} />

                            <Route path="/read-history" component={ReadHistory} />

                            <Route path="/hidden-news" component={HiddenNews} />
                        </Switch>
                    </MainLayout>
                </SelectedViewProvider>
            </Router>
        </div>
    );
};

const mapDispatchToProps = {
    verifyAuth,
};

export default connect(null, mapDispatchToProps)(App);
