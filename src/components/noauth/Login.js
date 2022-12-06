import '../noauth/Login.css';
import { loginwithgoogle } from '../../lib/loginwithgoogle';

function Login() {

    return (
        <div className="Login">
            <h1>Minimal Notes</h1>
            <p>A simple and elegant note taking app</p>
            <div id="signInDiv"></div>
            <img src='../imgs/btn_google_signin_dark_normal_web.png' alt="Google Login" className='ButtonGoogle' onClick={loginwithgoogle} />
        </div>
    );
}

export default Login;