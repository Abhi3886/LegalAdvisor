const Footer = () => {
  return (
    <footer className="footer mt-auto py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <h5>LegalConnect</h5>
            <p className="text-muted">Modern solutions for legal challenges.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="#" className="text-secondary">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="#" className="text-secondary">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="#" className="text-secondary">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
            <p className="mt-3 text-muted">© 2025 LegalConnect. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;