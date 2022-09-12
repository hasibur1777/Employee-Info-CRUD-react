import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className="">
      <nav
        className="navbar navbar-expand-lg navbar-white fixed-top"
        style={{ backgroundColor: '#bbded7' }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler navbar-light"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
            aria-controls="offcanvasExample"
          >
            <span
              className="navbar-toggler-icon"
              data-bs-target="#sidebar"
            ></span>
          </button>
          <Link
            className="navbar-brand me-auto ms-lg-0 ms-3 text-uppercase fw-bold color-black"
            to={`/`}
          >
            <span>Dashboard</span>
          </Link>
          <button
            className="navbar-toggler navbar-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#topNavBar"
            aria-controls="topNavBar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="topNavBar">
            <div className="d-flex ms-auto my-3 my-lg-0"></div>
            <ul className="navbar-nav">
              <li>
                <Link
                  className="btn btn-sm btn-outline-danger"
                  to={`/`}
                >
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start sidebar-nav"
        tabIndex="-1"
        id="sidebar"
        style={{ backgroundColor: '#bbded7ab' }}
      >
        <div className="offcanvas-body p-0">
          <nav className="navbar-white">
            <ul className="navbar-nav">
              <li>
                <div className="text-muted small fw-bold text-uppercase px-3"></div>
              </li>
              <li>
                <Link
                  className="nav-link px-3 active color-black"
                  to={`/`}
                >
                  <span className="me-2">
                    <i className="bi bi-speedometer2"></i>
                  </span>
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link px-3 active color-black"
                  to={`/about`}
                >
                  <span className="me-2">
                    <i className="bi bi-person-fill"></i>
                  </span>
                  <span>About</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
