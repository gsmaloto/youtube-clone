import React, { useState } from "react";
import "../styles/SideNav.css";
import SideNavItem from "./SideNavItem";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";

import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

const SideNav = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="sidebar">
      <div className="sidebar__links">
        <div className={active ? "sidebar__link active" : "sidebar__link"}>
          <SideNavItem
            icon={active ? <HomeIcon /> : <HomeOutlinedIcon />}
            title="Home"
          />
        </div>
        <div className="sidebar__link">
          <SideNavItem icon={<ExploreOutlinedIcon />} title="Explore" />
        </div>
        <div className="sidebar__link">
          <SideNavItem icon={<PlayArrowOutlinedIcon />} title="Short" />
        </div>
        <div className="sidebar__link">
          <SideNavItem
            icon={<SubscriptionsOutlinedIcon />}
            title="Subscriptions"
          />
        </div>
      </div>

      <hr />

      <div className="sidebar__links">
        <div className="sidebar__link">
          <SideNavItem icon={<VideoLibraryOutlinedIcon />} title="Library" />
        </div>
        <div className="sidebar__link">
          <SideNavItem icon={<HistoryOutlinedIcon />} title="History" />
        </div>
        <div className="sidebar__link">
          <SideNavItem
            icon={<SmartDisplayOutlinedIcon />}
            title="Your videos"
          />
        </div>
        <div className="sidebar__link">
          <SideNavItem icon={<WatchLaterOutlinedIcon />} title="Watch later" />
        </div>
        <div className="sidebar__link">
          <SideNavItem icon={<ThumbUpOutlinedIcon />} title="Liked videos" />
        </div>
      </div>

      <hr />

      <div className="sidebar__bottom">
        <div className="sidebar__bottomRow">
          <a href="*" target="_blank">About</a>
          <a href="*" target="_blank">Press</a>
          <a href="*" target="_blank">Copyright</a>
        </div>
        <div className="sidebar__bottomRow">
          <a href="*" target="_blank">Contact us</a>
          <a href="*" target="_blank">Creators</a>
        </div>
        <div className="sidebar__bottomRow">
          <a href="*" target="_blank">Advertise</a>
          <a href="*" target="_blank">Developers</a>
        </div>
        <div className="sidebar__bottomRow">
          <a href="*" target="_blank">Terms</a>
          <a href="*" target="_blank">Privacy</a>
          <a href="*" target="_blank">Policy & Safety</a>
        </div>
        <div className="sidebar__bottomRow">
          <a href="*" target="_blank">How YouTube works</a>
        </div>
        <div className="sidebar__bottomRow">
          <a href="*" target="_blank">Test new features</a>
        </div>
        <div className="sidebar__bottomRow">
          <a href="*" target="_blank" className="sidebar__bottomCredits">© 2022 GENER MALOTO</a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
