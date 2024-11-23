import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const [dropDown, setDropDown] = useState<string | null>(null);
  const location = useLocation();

  const toggleDropdown = (section: string) => {
    setDropDown(dropDown === section ? null : section);
  };

  const isActive = (path: string) => location.pathname === path;

  const isSectionActive = (sectionPaths: string[]) =>
    sectionPaths.some((path) => location.pathname === path);

  return (
    <div className="sidebar">
      <ul className="dropdown">
        <li>
          <div
            onClick={() => toggleDropdown("womens")}
            className={
              isSectionActive([
                "/dresess",
                "/shoes",
                "/accessories",
                "/handbags",
              ])
                ? "active-section"
                : ""
            }
          >
            Woman’s Fashion
            <img src="/assets/DropDown.svg" alt="DropDown" />
          </div>

          {(dropDown === "womens" ||
            isSectionActive([
              "/dresess",
              "/shoes",
              "/accessories",
              "/handbags",
            ])) && (
            <ul className="dropdown-item">
              <Link to="/dresess">
                <li className={isActive("/dresess") ? "active" : ""}>
                  Dresses
                </li>
              </Link>
              <Link to="/shoes">
                <li className={isActive("/shoes") ? "active" : ""}>Shoes</li>
              </Link>
              <Link to="/accessories">
                <li className={isActive("/accessories") ? "active" : ""}>
                  Accessories
                </li>
              </Link>
              <Link to="/handbags">
                <li className={isActive("/handbags") ? "active" : ""}>
                  Handbags
                </li>
              </Link>
            </ul>
          )}
        </li>

        <li>
          <div
            onClick={() => toggleDropdown("mens")}
            className={
              isSectionActive([
                "/mens-dresses",
                "/mens-shoes",
                "/mens-accessories",
                "/mens-bags",
              ])
                ? "active-section"
                : ""
            }
          >
            Men’s Fashion
            <img src="/assets/DropDown.svg" alt="DropDown" />
          </div>
          {(dropDown === "mens" ||
            isSectionActive([
              "/mens-dresses",
              "/mens-shoes",
              "/mens-accessories",
              "/mens-bags",
            ])) && (
            <ul className="dropdown-item">
              <Link to="/mens-dresses">
                <li className={isActive("/mens-dresses") ? "active" : ""}>
                  Dresses
                </li>
              </Link>
              <Link to="/mens-shoes">
                <li className={isActive("/mens-shoes") ? "active" : ""}>
                  Shoes
                </li>
              </Link>
              <Link to="/mens-accessories">
                <li className={isActive("/mens-accessories") ? "active" : ""}>
                  Accessories
                </li>
              </Link>
              <Link to="/mens-bags">
                <li className={isActive("/mens-bags") ? "active" : ""}>Bags</li>
              </Link>
            </ul>
          )}
        </li>

        <li>
          <Link to="/electronics" className={isActive("/electronics") ? "active" : ""}>
            <div >
              Electronics
            </div>
          </Link>
        </li>
        <li>
          <Link to="/home-lifestyle" className={isActive("/home-lifestyle") ? "active" : ""}>
            <div>
              Home & Lifestyle
            </div>
          </Link>
        </li>
        <li>
          <Link to="/medicine" className={isActive("/medicine") ? "active" : ""}>
            <div>
              Medicine
            </div>
          </Link>
        </li>
        <li>
          <Link to="/sports-outdoor" className={isActive("/sports-outdoor") ? "active" : ""}>
            <div>
              Sports & Outdoor
            </div>
          </Link>
        </li>
        <li>
          <Link to="/babys-toys" className={isActive("/babys-toys") ? "active" : ""}>
            <div>
              Baby’s & Toys
            </div>
          </Link>
        </li>
        <li>
          <Link to="/groceries-pets" className={isActive("/groceries-pets") ? "active" : ""}>
            <div>
              Groceries & Pets
            </div>
          </Link>
        </li>
        <li>
          <Link to="/health-beauty" className={isActive("/health-beauty") ? "active" : ""}>
            <div>
              Health & Beauty
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
