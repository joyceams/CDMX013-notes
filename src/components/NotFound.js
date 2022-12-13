import { useNavigate } from "react-router-dom";

function NotFound(props) {

    const navigate = useNavigate();

    const navigateTo = (route) => {
        navigate(route);
    };

    return (
        <div>
            <div className="notfound">
                <h1>Page not found</h1>
                <button className="backButton" onClick={() => navigateTo('/')}>Back</button>
            </div>
        </div>
    )
}

export default NotFound;