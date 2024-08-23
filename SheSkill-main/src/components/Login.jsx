import './Login.css';
import * as reactRouterDom from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className="login-container">
                <div className="login-left">
                    <img src="images/girl6.png" alt="Logo" className="logo-image" />
                </div>
                <div className="login-right">
                    <div className="login-box">
                        <div style={{ textAlign: 'center' }}><h2>Login</h2></div>
                        <form action="/login" method="POST">
                            <div className="input-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" name="username" required />
                            </div>
                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" required />
                            </div>
                            <div className="forgot-password">
                                <a href="/forgot-password">Forgot Password?</a>
                            </div>
                            <button type="submit">Login</button>
                        </form>
                        <div className="create-account">
                            <p>Don't have an account? <reactRouterDom.Link to="/signup">Sign up</reactRouterDom.Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
