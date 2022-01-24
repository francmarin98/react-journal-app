import {Link} from "react-router-dom";

export const LoginPage = () => {
    return (
        <>
            <div className="login form-container animate__animated animate__fadeIn">
                <div className="login-info-container">
                    <h1 className="title">Log In</h1>
                    <form className="inputs-container">
                        <input
                            className="input"
                            type="email"
                            required
                            placeholder="Email"
                        />
                        <input
                            className="input"
                            type="password"
                            required
                            placeholder="Password"
                        />
                        <button type="submit" className="btn">login</button>
                        <Link to="/auth/register" className="link-to">Don't have an account? <span className="span">Sign Up</span></Link>
                        <div className="google-btn">
                            <div className="google-icon-wrapper">
                                <img className="google-icon"
                                     src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                     alt="google button"/>
                            </div>
                            <p className="btn-text">
                                <b>Sign in with google</b>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
