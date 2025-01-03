import { useState } from "react";
import "../css/Header.css";
import { CiShoppingBasket } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Badge from "@mui/material/Badge";

function Header() {
  const navigate = useNavigate();

  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    const root = document.getElementById("root");

    if (theme) {
      root.style.backgroundColor = "black";
      root.style.color = "#fff";
    } else {
      root.style.backgroundColor = "#fff";
      root.style.color = "black";
    }
    setTheme(!theme);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="flex-row" onClick={() => navigate("/")}>
        <img className="logo" src="./src/images/transparent.png" />
        <p className="logo-text">MUHİTTİN A.Ş</p>
      </div>

      <div className="flex-row">
        <input className="search-input" type="text" placeholder="Arayın..." />
        <div>
          {theme ? (
            <FaMoon className="icon" onClick={changeTheme} />
          ) : (
            <CiLight className="icon" onClick={changeTheme} />
          )}
          <Badge badgeContent={4} color="error">
            <CiShoppingBasket style={{marginRight:"6px"}} className="icon" />
          </Badge>
        </div>
      </div>
    </div>
  );
}

export default Header;
