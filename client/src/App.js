import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { verifyAuth } from './actions/userActions';
import { SelectedViewProvider } from './contexts/ViewContext';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Onboarding from './components/OnboardingPage';
import ForgotPassword from './components/ForgotPassword';

import Landing from './components/Landing';
import HowItWorks from './components/HowItWorks';
import WhyLetterbox from './components/WhyLetterbox';

import Main from './components/Main';
import ExploreFeeds from './components/ExploreFeeds';
import SingleFeed from './components/SingleFeed';
import ReadLater from './components/ReadLater';
import ReadHistory from './components/ReadHistory';
import HiddenNews from './components/HiddenNews';
import ReadNews from './components/ReadNews';
import MainLayout from './components/layouts/MainLayout';

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

                            <Route path="/why-letterbox" component={WhyLetterbox} />

                            <Route path="/sign-up" component={SignUp} />

                            <Route path="/sign-in" component={SignIn} />

                            <Route path="/onboarding" component={Onboarding} />

                            <Route path="/forgotten-password" component={ForgotPassword} />

                            <Route path="/explore-feeds" component={ExploreFeeds} />

                            <Route path="/feed/:feedId" component={SingleFeed} />

                            <Route exact path="/main/:newsletterId" component={Main} />

                            <Route path="/read-later" component={ReadLater} />

                            <Route path="/read-history" component={ReadHistory} />

                            <Route path="/hidden-news" component={HiddenNews} />

                            <Route path="/news/:id" component={ReadNews} />
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
