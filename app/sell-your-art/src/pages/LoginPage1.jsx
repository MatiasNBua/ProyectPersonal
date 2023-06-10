import Loggito from '../utils/Loggito'
import './LoginPage.css'

// import withContext from "../utils/withContext"

function LoginPage ( {onLinkClick, onLoginClick} ){

    const handleLinkClick = event => {
        event.preventDefault()

        onLinkClick()
    }

    const handleFormSubmit = event => {
        event.preventDefault()

        onLoginClick()
    //     const {
    //         target: form,
    //         target: {
    //             email: {value: email},
    //             password: {value: password}
    //         }
    //     } = event
    }




    return (
        <main className="loginPage-container-full">

            <form className='LpFormContainer' action="https://www.google.com/search" onSubmit={handleFormSubmit}/* method='get' */>

            <div className="form-field">
                <label htmlFor="email"> Log in</label>
                <input className='inputLp' type="email" name="email" placeholder='Email' id="email" />
            </div>

            <div className="form-field">
                <label htmlFor="password"></label>
                <input className='inputLp' type="password" name="password" placeholder='Password' id="password" />
            </div>

            <div className="buttonsLp">
                <button type='submit' > Login </button>
                <a href="register" onClick={handleLinkClick}>Register</a>
            </div>

            </form>

        </main>
        
    )
}

export default LoginPage