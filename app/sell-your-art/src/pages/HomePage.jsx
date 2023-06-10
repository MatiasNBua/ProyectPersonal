import Header from '../components/Header'
import AuctionList from '../components/AuctionList'
import MyAuctions from '../components/MyAuctions'
import NewAuction from '../components/NewAuction'
import Profile from '../components/Profile'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

import './HomePage.css'

import { Routes, Route, useNavigate } from "react-router-dom";

function HomePage (){

  const navigate = useNavigate()
  

  const handleNewAuctionClick = () => {
    navigate('/newauction')
  }

  const handleMyAuctionsClick = () => {
    navigate('/myauctions')
  }

  const handleProfileClick = () => {
    navigate('/profile')
  }

  const handleHomeClick = () => {
    navigate('/')
  }



  return (
    <div className="HomePage-container-full">

      <header className='header'>
      {/* <h2 className='logo'>SellYourArt</h2> */}
        <Header/>
      </header>


      <main className='body'>
        <Routes>

          <Route path="/" element={ <AuctionList />} />
          <Route path="myauctions" element={ <MyAuctions /> } />
          <Route path="newauction" element={ <NewAuction /> } />
          <Route path='profile' element={ <Profile /> } />
          <Route  />
          <Route  />

        </Routes>
      </main>


      <footer className='footer'>
      <Footer 
        onNewAuctionClick={handleNewAuctionClick} 
        onMyAuctionsClick={handleMyAuctionsClick}
        onProfileClick={handleProfileClick}
        onHomeClick={handleHomeClick}
        />
      </footer>
  
  
  </div>
  )
}

export default HomePage