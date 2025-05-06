import ChatbotSection from "../components/ChatbotSection.jsx";

// import DocumentVerificationSection from "../components/DocumentVerification.jsx";
import LawyerConnectSection from "../components/LawyerConnectSection.jsx";

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-3">
                Modern solutions for{" "}
                <span className="text-primary">legal challenges</span>
              </h1>
              <p className="lead text-muted mb-4">
                LegalConnect combines AI technology with legal expertise to
                provide accessible, efficient legal services for everyone.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-2">
                <a href="#chatbot" className="btn btn-primary btn-lg px-4 py-3">
                  Try AI Chatbot
                </a>
                <a
                  href="#connect-lawyer"
                  className="btn btn-outline-primary btn-lg px-4 py-3"
                >
                  Find a Lawyer
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1505663912202-ac22d4cb3707?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                alt="Legal office"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      <ChatbotSection />
      {/* <DocumentVerificationSection /> */}
      <LawyerConnectSection />

      {/* Call to Action Section */}
      <section className="py-5 bg-primary text-white">
        <div className="container py-4">
          <div className="text-center">
            <h2 className="display-6 fw-bold mb-3">
              Need specialized legal help?
              <br />
              Contact us today.
            </h2>
            <p className="lead opacity-75 mb-4">
              Our team of expert lawyers is ready to assist you with any legal
              matter.
            </p>

            <a
              href="#"
              className="btn btn-light btn-lg px-4 py-2 text-primary fw-semibold"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
