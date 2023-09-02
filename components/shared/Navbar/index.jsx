import Image from "next/image";
import Link from "next/link";
import React from "react";
import MegaMenu from "./MegaMenu";
import navList from "./Menu.json";
import SubMenu from "./SubMenu";

const NavBar = () => {
  return (
    <nav id="topnav" className="defaultscroll is-sticky">
      <div className="container">
        <Link className="logo pl-0" href="/">
          <Image
            src="/assets/images/logo-dark.png"
            width={138}
            height={24}
            className="inline-block dark:hidden"
            alt="sdf"
          />
          <Image
            src="/assets/images/logo-light.png"
            width={138}
            height={24}
            className="hidden dark:inline-block"
            alt="dsf"
          />
        </Link>

        <div className="menu-extras">
          <div className="menu-item">
            {/* onclick="toggleMenu()" */}
            <a className="navbar-toggle" id="isToggle">
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
          </div>
        </div>

        <ul className="buy-button list-none mb-0">
          <li className="inline mb-0">
            <Link
              href="/demo"
              className="btn bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md mt-3"
            >
              Demo <i className="mdi mdi-chevron-right align-middle"></i>
            </Link>
          </li>
        </ul>

        <div id="navigation">
          <ul className="navigation-menu">
            {navList.map((item, index) => (
              <li
                key={`menu-item-index-${index}`}
                className={`${
                  item?.hasChild ? "has-submenu parent-parent-menu-item" : ""
                }`}
              >
                <Link href={item?.url}>{item?.title}</Link>
                {item?.hasChild && <span className="menu-arrow"></span>}
                {item?.hasChild && item?.megaMenu && <MegaMenu item={item} />}
                {item?.hasChild && item?.subMenu?.length > 0 && (
                  <SubMenu subMenu={item.subMenu} />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
