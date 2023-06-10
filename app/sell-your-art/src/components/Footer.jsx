import HomeSVG from '../assets/Home (1).svg';
import NewAuctionSVG from '../assets/NewAuction.svg';
import MyAuctions from '../assets/MyAuctions.svg';
import ProfilePNG from '../assets/Profile.png'

import './Footer.css';

function Sidebar({ onNewAuctionClick, onMyAuctionsClick, onProfileClick, onHomeClick }) {
   

    // Navegacion Sidebar Clicks
    const handleNewAuctionClick = () => {
        onNewAuctionClick();
    };

    const handleMyAuctionsClick = () => {
        onMyAuctionsClick();
    }

    const handlePorfileClick = () => {
        onProfileClick();
    }

    const handleHomeClick = () => {
        onHomeClick()
    }

    return (
        <div className="Menu">
                <nav className="nav-Container">
                    <ul className="menu-header-items">
                        <li>
                            <button onClick={handleHomeClick} >
                                <img src={HomeSVG} alt="icon of plus" />
                            </button>
                        </li>

                        <li>
                            <button onClick={handleMyAuctionsClick}>
                                <img src={MyAuctions} alt="icon of checkbox" />
                            </button>
                        </li>
                        <li>
                            <button onClick={handleNewAuctionClick}>
                                <img src={NewAuctionSVG} alt="icon of house" />
                            </button>
                        </li>
                        <li>
                            <button onClick={handlePorfileClick} >
                                <img src={ProfilePNG} alt="icon of profile" />
                            </button>
                        </li>

                    </ul>

                </nav>
        </div>
    );
}

export default Sidebar;
