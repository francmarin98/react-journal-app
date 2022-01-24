import {Link} from "react-router-dom";

export const RegisterPage = () => {
    return (
        <>
            <div className="register form-container animate__animated animate__fadeIn">
                <div className="login-info-container">
                    <h1 className="title">Register</h1>
                    <form className="inputs-container">
                        <input
                            className="input"
                            type="text"
                            name="name"
                            required placeholder="Name"
                        />
                        <input
                            className="input"
                            type="email"
                            name="email"
                            required
                            placeholder="Email"
                        />
                        <input
                            className="input"
                            type="password"
                            name="password"
                            required
                            placeholder="Password"
                        />
                        <input
                            className="input"
                            type="password"
                            name="password_confirmation"
                            required
                            placeholder="Confirm password"
                        />
                        <button type="submit" className="btn">Register</button>
                        <Link to="/auth/login" className="link-to">
                            Already registered?
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
};
