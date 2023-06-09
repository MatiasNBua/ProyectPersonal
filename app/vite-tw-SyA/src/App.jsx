import { Routes, Route, useNavigate } from 'react-router-dom'

import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import RegisterPage from './pages/registerPage'

import './App.css'

function App() {
  const navigate = useNavigate()

  const handleNavigateToHome = () => {
    navigate('/')
  }

  const handleLogoutClick = () => {
    navigate('login')
  }


  return (
    <div className='h-screen bg-sky-900'>
      
      <Routes>
        <Route path='/login' element={ <LoginPage /> } /> 
        <Route path='/register' element={ <RegisterPage/> } />
        <Route path='/*' element={ <HomePage onLogoutClick={handleLogoutClick}/> } />
      </Routes>

    </div>
  )
}

export default App
