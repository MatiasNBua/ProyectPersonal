import React, { useState } from 'react';

import ArrowRightImg from '../assets/Arrow-Rigth.svg';
import ArrowLeftImg from '../assets/Arrow-Left.svg';
import HomeSVG from '../assets/Home (1).svg';
import NewAuctionSVG from '../assets/NewAuction.svg';
import MyAuctions from '../assets/MyAuctions.svg';
import ProfilePNG from '../assets/Profile.png'

import './Footer.css';

function Sidebar({ onNewAuctionClick, onMyAuctionsClick, onProfileClick, onHomeClick }) {
    const [isOpen, setIsOpen] = useState(null);

    // Estados del menu
    const openMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(null);
    };
    // Fin estados menu

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

    // Fin Navegacion Sidebar Clicks

    return (
        <div className="Menu">
            {isOpen === null && (
                <nav className="isCloseActive">
                    <ul className="menu-header-items">
                        <li className="openMenuContainer">
                            <button className="button-header" onClick={openMenu}>
                                <img src={ArrowRightImg} alt="img with arrow right" />
                            </button>
                        </li>
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
            )}

            {isOpen && (
                <nav className="isOpenActive">
                    <div className="openMenuContainer">
                        <button onClick={closeMenu}>
                            <img className="button-header" src={ArrowLeftImg} alt="img with arrow left" />
                        </button>
                    </div>
                    <div className="listContainerOpenMenu">

                        <ul className="menu-header-items">

                            <li>
                                <button onClick={handleHomeClick} >
                                    <img src={HomeSVG} alt="icon of house" />
                                </button>
                            </li>
                            <li>
                                <button onClick={handleMyAuctionsClick}>
                                    <img src={MyAuctions} alt="icon of checkbox" />
                                </button>
                            </li>
                            <li>
                                <button onClick={handleNewAuctionClick}>
                                    <img src={NewAuctionSVG} alt="icon of plus" />
                                </button>
                            </li>
                            <li>
                                <button onClick={handlePorfileClick} >
                                    <img src={ProfilePNG} alt="icon of profile" />
                                </button>
                            </li>

                        </ul>

                    </div>
                </nav>
            )}
        </div>
    );
}

export default Sidebar;
