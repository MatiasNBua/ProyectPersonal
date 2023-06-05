import Footer from '../components/footer'
import AuctionList from '../components/AuctionList'
import MyAuctions from '../components/MyAuctions'
import NewAuction from '../components/NewAuction'
import Profile from '../components/Profile'

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