import { NavLink, Outlet } from "react-router-dom";
import Carousel from "../components/Carousel";

const RootLayout = () => {
  return (
    <>
      <header>
        <h1 className="logo">
          Hadin Al-Musri <span>Katomas Pagaden Subang</span>
        </h1>
        <ul className="nav">
          <li className="nav-list">
            <NavLink to="/">Beranda</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/profil">Profil</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/timRedaksi">Tim Redaksi</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/infoIklan">Info Iklan</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/kontak">Kontak</NavLink>
          </li>
          <li className="nav-list">
            <NavLink to="/karir">Karir</NavLink>
          </li>
        </ul>
      </header>

      <Carousel />

      {/* <aside>
        <h1>aside</h1>
      </aside> */}

      <main>
        <Outlet />
      </main>

      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
};

export default RootLayout;
