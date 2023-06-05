import './RegisterPage.css'

function RegisterPage ( {onLinkClick} ){

    const handleLinkClick = event => {
        event.preventDefault()

        onLinkClick()
    }

    return (
        <div className="loginPage-container-fulL">

            <form className="RpFormContainer" action="https://www.google.com/search">

            <div className="form-field">
                <label htmlFor="name">Register</label>
                <input className="inputRp" type="text" name="name" placeholder="Name" id="name" />

            </div>

            <div className="form-field">
                <label htmlFor="lastname"></label>
                <input className="inputRp" type="text" name="lastname" placeholder="Lastname" id="lastname" />
            </div>

            <div className="form-field">
                <label htmlFor="email"></label>
                <input className="inputRp" type="email" name="email" placeholder="email" id="email" />
            </div>

            <div className="form-field">
                <label htmlFor="password"></label>
                <input className="inputRp" type="password" name="password" placeholder="password" id="password" />
            </div>

            <div className="form-field">
                <label htmlFor="birth"></label>
                <input className="inputRp" type="birth" name="birth" placeholder="birth" id="birth" />
            </div>

            <div className="form-field">
                <label htmlFor="phonenumber"></label>
                <input className="inputRp" type="phonenumber" name="phonenumber" placeholder="phonenumber" id="phonenumber" />
            </div>

            <div className="buttonsRp">
                <button type="submit">Register</button>
                <a href="login" onClick={handleLinkClick}>Login</a>
            </div>


            </form>

        </div>
    )
}

export default RegisterPage