import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from './actions/userActions';

function SignOut({ signOut, user }) {

    const handleSignOut =  () => {
         signOut();
    }

    return (
        <div className="App">
            {
                user ?
                    <Link to="/" onClick={handleSignOut}>Sign Out</Link>
                    : <Link to="/signin">Sign In</Link>
            }
        </div>
    );
}

const mapStateToProps = state => ({
    user: state.user.user,
})

const mapDispatchToProps = {
    signOut,
}
    
export default connect(mapStateToProps, mapDispatchToProps)(SignOut);
