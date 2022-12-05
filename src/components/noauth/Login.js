import '../noauth/Login.css';
import { loginwithgoogle } from '../../lib/loginwithgoogle';

function Login() {
   
    return (
        <div className="Login">
            <h1>Minimal Notes</h1>
            <p>A simple and elegant note taking app</p>
            <div id="signInDiv"></div>
            {/*Object.keys(user).length !== 0 &&
                <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
    */}

    <button className="login__btn login__google" onClick={loginwithgoogle}>
          Login with Google
        </button>
        <img src='../imgs/ButtonGoogle.png' alt="Google Login" className='ButtonGoogle' onClick={loginwithgoogle} />
        </div>
    );
}

export default Login;