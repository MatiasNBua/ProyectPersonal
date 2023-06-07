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
    <div className='bg-gray-400'>
      
      <Routes>
        <Route path='/login' element={ <LoginPage onLoginClick={handleNavigateToHome}/> } /> 
        <Route path='register' element={ <RegisterPage/> } />
        <Route path='/*' element={ <HomePage onLogoutClick={handleLogoutClick}/> } />
      </Routes>

    </div>
  )
}

export default App
