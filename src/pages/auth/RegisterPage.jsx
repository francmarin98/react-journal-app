export const RegisterPage = () => {
    return (
        <>
            <div className="register form-container">
                <div className="login-info-container">
                    <h1 className="title">Register</h1>
                    <form className="inputs-container">
                        <input className="input" type="text" required placeholder="Name"/>
                        <input className="input" type="email" required placeholder="Email"/>
                        <input className="input" type="password" required placeholder="Password"/>
                        <input className="input" type="password" required placeholder="Confirm password"/>
                        <button className="btn">Register</button>
                        <p>Already registered?</p>
                    </form>
                </div>
            </div>
        </>
    );
};
