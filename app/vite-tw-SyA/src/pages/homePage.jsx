import { Routes, Route , Navigate, useNavigate} from 'react-router-dom'

import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
import Settings from "../components/Settings"
import Messages from "../components/Messages"
import MyAuctions from '../components/MyAuctions'
import NewAuction from '../components/NewAuction'
import Profile from '../components/Profile'
import AuctionList from '../components/AuctionList'


function homePage( { onLogoutClick } ) {
  const navigate = useNavigate()

  // const handleSettingsClick = () => {
  //   on
  // }

    return (
      <div className=" flex flex-col h-screen">
        <header className="fixed top-0 inset-x-0 z-50">
        <Navbar 
        onLogoutClick={onLogoutClick}
        // onHomeClick={handleNavigateHome}
        // onSettingsClick={handleSettingsClick}
        // onMessagesClick={handleMessagesClick}
        
        /> 
        </header>


        <main className="flex-grow overflow-y-auto mx-auto px-3 my-16">
         <Routes>
          <Route path="/settings" element={ <Settings/> } />
          <Route path="/messages" element={ <Messages/> } />
          <Route path="/myauctions" element={ <MyAuctions/> } />
          <Route path="/newauction" element={ <NewAuction/> } />
          <Route path="/profile" element={ <Profile/> }/>
          <Route path="/" element={ <AuctionList/> }/>
         </Routes>
        </main>

        <footer className="fixed bottom-0 inset-x-0 bg-gray-800 p-3">
          <Footer 
          // onMyAuctionsClick={handleMyAuctionsClick}
          // onNewAuctionClick={handleNewAuctionsClick}
          // onProfileClick={handleProfileClick}
          />
        </footer>

      </div>
    )
  }
  
  export default homePage
  