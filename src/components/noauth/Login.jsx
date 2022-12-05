import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode"
import '../noauth/Login.css';

function Login() {

    const [user, setUser] = useState({});
    

    function handleCallbackReponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject);
        document.getElementById("signInDiv").hidden = true;
    }

    function handleSignOut(event) {
        setUser({});
        document.getElementById("signInDiv").hidden = false;
    }

    useEffect(() => {
        /* global google */
        google.accounts.id.initialize({
            client_id: "378005017257-iet6ef984sfbi8sth4338h0lcl7ul7g6.apps.googleusercontent.com",
            callback: handleCallbackReponse
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            { theme: "outline" }
        );
    }, []);
    // If we have no user: sign in button
    //If we have a user: show the log out button
    return (
        <div className="Login">
            <h1>Minimal Notes</h1>
            <p>A simple and elegant note taking app</p>
            <div id="signInDiv"></div>
            {Object.keys(user).length !== 0 &&
                <button onClick={(e) => handleSignOut(e)}>Sign Out</button>
            }

        </div>
    );
}

export default Login;