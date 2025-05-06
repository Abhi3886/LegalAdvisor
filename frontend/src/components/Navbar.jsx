import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          LegalConnect
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#chatbot">
                AI Chatbot
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#document-verification">Document Verification</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="#connect-lawyer">
                Find Lawyer
              </a>
            </li>
          </ul>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
