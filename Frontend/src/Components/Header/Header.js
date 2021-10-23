import "./Header.css";

export default function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark nav2">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        Navbar
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarColor02"
                        aria-controls="navbarColor02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarColor02"
                    >
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/flowcharts">
                                    Flowcharts
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/tracker">
                                    Tracker
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/login">
                                    Login
                                </a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    Dropdown
                                </a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                    <div className="dropdown-divider" />
                                    <a className="dropdown-item" href="#">
                                        Separated link
                                    </a>
                                </div>
                            </li> */}
                        </ul>
                        <form className="d-flex">
                            <input
                                className="form-control me-sm-2"
                                type="text"
                                placeholder="Search"
                            />
                            <button
                                className="btn btn-secondary my-2 my-sm-0"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}
