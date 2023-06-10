import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'

import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'


// css Stlyes
import './App.css'

function App() {
  const navigate = useNavigate()

  const handleNavigationToRegister = () => {
    navigate('/register')

    logger.debug('navigate to register')
}

  const handleNavigationToLogin = () => {
    navigate('/login')

    logger.debug('navigate to login')
  }

const handleNavigationToHome = () => {
  navigate('/')

  logger.debug('navigate to home')
}


  
  return (
      <div className="app full-container">
    <Routes>
        <Route path='/login' element={ <LoginPage onLinkClick={handleNavigationToRegister} onLoginClick={handleNavigationToHome} /> } />
        <Route path='/register' element={ <RegisterPage onLinkClick={handleNavigationToLogin} /> } />
        <Route path='/*' element={ <HomePage  /> } />
        {/* <Route path='/' element={ <Navigate to={"/login"} /> } /> */}
        
    </Routes>
      </div>

)
}

export default App



// const toggleTheme = () => document.documentElement.classList.toggle('ligth')
// <Context.Provider value={{asdas}{asdas}}>

    

        // </Context.Provider>


        
// import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
// const navigate = useNavigate()