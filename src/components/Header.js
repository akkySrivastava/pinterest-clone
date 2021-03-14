import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { Chat, Notifications } from "@material-ui/icons";
import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://www.net-aware.org.uk/siteassets/images-and-icons/application-icons/app-icons-pinterest.png?w=585&scale=down"
          alt=""
        />
        <div className="header__leftOptions">
          <h3>Home</h3>
          <h3>Today</h3>
          <h3>Following</h3>
        </div>
        <div className="header__leftOptionsSearch">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <Notifications />
        <Chat />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
