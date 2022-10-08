import logo from "../img/logo.png";
import abonent from "../img/abonent.png";
import kolokolchik from "../img/kolokolchik.png";
import search from "../img/search.png";
import shop from "../img/shop.png";

function Header() {
  return (
    <>
      <div className="Header">
        <div className="head_logo">
          <img src={logo} alt="logo" />
          <p>Furniking</p>
        </div>

        <div className="head_search">
          <input type="text" placeholder="Search here" />
          <select>
            <option>Categories</option>
          </select>
          <button>
            <img src={search} alt="search" />
          </button>
        </div>

        <div className="head_user">
            <button>
                <img src={shop} alt="icon_1" />
            </button>
            <button>
                <img src={kolokolchik} alt="icon_2" />
            </button>
            <button>
                <img src={abonent} alt="icon_3" />
            </button>
        </div>

      </div>
    </>
  );
}

export default Header;
