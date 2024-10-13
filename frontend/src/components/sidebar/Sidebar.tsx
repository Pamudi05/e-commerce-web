import { useState } from "react";
import "./Sidebar.css";

function Sidebar() {
  const [dropDown, setDropDown] = useState<string | null>(null);

  const toggleDropdown = (section: string) => {
    setDropDown(dropDown === section ? null : section);
  };

  return (
    <div className="sidebar">
      <ul className="dropdown">
        <li>
          <div onClick={() =>toggleDropdown("womens")}>
            Woman’s Fashion
            <img
              src="/assets/DropDown.svg"
              alt="DropDown"
            />
          </div>

          {dropDown === "womens" && (
            <ul className="dropdown-item">
              <li>Dresses</li>
              <li>Shoes</li>
              <li>Accessories</li>
              <li>Handbags</li>
            </ul>
          )}
        </li>
        
        <li>
          <div onClick={() => toggleDropdown("mens")}>
            Men’s Fashion
            <img
              src="/assets/DropDown.svg"
              alt="DropDown"
            />
          </div>
          {dropDown === "mens" && (
            <ul className="dropdown-item">
              <li>Dresses</li>
              <li>Shoes</li>
              <li>Accessories</li>
              <li>Handbags</li>
            </ul>
          )}
        </li>

        <li><div>Electronics</div></li>
        <li><div>Home & Lifestyle</div></li>
        <li><div>Medicine</div></li>
        <li><div>Sports & Outdoor</div></li>
        <li><div>Baby’s & Toys</div></li>
        <li><div>Groceries & Pets</div></li>
        <li><div>Health & Beauty</div></li>
      </ul>
    </div>
  );
}

export default Sidebar;
