import React from "react";
import '../styles/Header.css'
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <nav className="nav">
      <div className="nav__top">
        <div className="nav__left">
          <MenuIcon className="nav__icon nav__menu-icon" />
          <img
            src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-transparent-image-5.png"
            alt="youtube"
            className="nav__logo"
          />
        </div>
        <div className="nav__center">
            <div className="nav__search">
                <input type="text" className="nav__input" placeholder="Search"/>
          <SearchIcon className="nav__icon nav__search-icon" />
            </div>
          
          <MicIcon className="nav__icon nav__mic-icon" />
        </div>
        <div className="nav__right">
          <VideoCallOutlinedIcon className="nav__icon nav__add-icon" />
          <div className="nav__notification">
            <NotificationsOutlinedIcon className=" nav__icon nav__bell-icon" />
            <p className="nav__notifBadge">3</p>
          </div>
          
          <img className="nav__profile" src="https://scontent.fmnl30-2.fna.fbcdn.net/v/t1.15752-9/295241513_1033493307358221_905789698868731728_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHUSGfygAgHl-kx6d8oVSwMyfLtr6fuBOvJ8u2vp-4E669JCSIVnv3BZ_L61aXcmu0VS-rn-Z5qvFhlwVG4wB24&_nc_ohc=m1SaLUeIl-4AX_ucb3u&tn=kV0FVz8sAEmqeo7-&_nc_ht=scontent.fmnl30-2.fna&oh=03_AVKPT27wBc4Vv88waVxJT85CmCrfhWGEW4jdCUSHodrpCA&oe=630F67CD" alt="" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
