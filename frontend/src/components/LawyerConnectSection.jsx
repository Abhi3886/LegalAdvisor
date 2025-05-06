import { useState, useEffect } from "react";

const LawyerConnectSection = () => {
  const [cities, setCities] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const allLawyers = [
    {
      _id: "1",
      name: "Amit Sharma",
      specialization: "Criminal",
      city: "Mumbai",
      email: "amit.sharma@legalconnect.com",
      phone: "+91-9304374852",
    },
    {
      _id: "2",
      name: "Priya Mehta",
      specialization: "Tax",
      city: "Delhi",
      email: "priya.mehta@legalconnect.com",
      phone: "+91-7622521842",
    },
    {
      _id: "3",
      name: "Ravi Desai",
      specialization: "Intellectual Property",
      city: "Bangalore",
      email: "ravi.desai@legalconnect.com",
      phone: "+91-7411751455",
    },
    {
      _id: "4",
      name: "Anjali Kapoor",
      specialization: "Corporate",
      city: "Hyderabad",
      email: "anjali.kapoor@legalconnect.com",
      phone: "+91-8950690709",
    },
    {
      _id: "5",
      name: "Suresh Nair",
      specialization: "Civil",
      city: "Chennai",
      email: "suresh.nair@legalconnect.com",
      phone: "+91-7216299358",
    },
    {
      _id: "6",
      name: "Neha Singh",
      specialization: "Immigration",
      city: "Kolkata",
      email: "neha.singh@legalconnect.com",
      phone: "+91-9477407946",
    },
    {
      _id: "7",
      name: "Vikram Joshi",
      specialization: "Criminal",
      city: "Ahmedabad",
      email: "vikram.joshi@legalconnect.com",
      phone: "+91-7877843625",
    },
    {
      _id: "8",
      name: "Pooja Iyer",
      specialization: "Criminal",
      city: "Pune",
      email: "pooja.iyer@legalconnect.com",
      phone: "+91-7509780389",
    },
    {
      _id: "9",
      name: "Rahul Khanna",
      specialization: "Labor",
      city: "Jaipur",
      email: "rahul.khanna@legalconnect.com",
      phone: "+91-9616512807",
    },
    {
      _id: "10",
      name: "Kavita Reddy",
      specialization: "Criminal",
      city: "Lucknow",
      email: "kavita.reddy@legalconnect.com",
      phone: "+91-9120452766",
    },
    {
      _id: "11",
      name: "Manoj Verma",
      specialization: "Intellectual Property",
      city: "Patna",
      email: "manoj.verma@legalconnect.com",
      phone: "+91-9477388231",
    },
    {
      _id: "12",
      name: "Swati Bansal",
      specialization: "Immigration",
      city: "Bhopal",
      email: "swati.bansal@legalconnect.com",
      phone: "+91-7946831994",
    },
    {
      _id: "13",
      name: "Arjun Chatterjee",
      specialization: "Intellectual Property",
      city: "Chandigarh",
      email: "arjun.chatterjee@legalconnect.com",
      phone: "+91-9756866997",
    },
    {
      _id: "14",
      name: "Sneha Patil",
      specialization: "Civil",
      city: "Surat",
      email: "sneha.patil@legalconnect.com",
      phone: "+91-9574309524",
    },
    {
      _id: "15",
      name: "Nitin Saxena",
      specialization: "Intellectual Property",
      city: "Nagpur",
      email: "nitin.saxena@legalconnect.com",
      phone: "+91-9060989209",
    },
    {
      _id: "16",
      name: "Divya Menon",
      specialization: "Family",
      city: "Indore",
      email: "divya.menon@legalconnect.com",
      phone: "+91-7623228970",
    },
    {
      _id: "17",
      name: "Ajay Thakur",
      specialization: "Family",
      city: "Thiruvananthapuram",
      email: "ajay.thakur@legalconnect.com",
      phone: "+91-8911109000",
    },
    {
      _id: "18",
      name: "Ruchi Agarwal",
      specialization: "Immigration",
      city: "Guwahati",
      email: "ruchi.agarwal@legalconnect.com",
      phone: "+91-8560155381",
    },
    {
      _id: "19",
      name: "Karan Malhotra",
      specialization: "Tax",
      city: "Ranchi",
      email: "karan.malhotra@legalconnect.com",
      phone: "+91-7190128760",
    },
    {
      _id: "20",
      name: "Isha Chauhan",
      specialization: "Environmental",
      city: "Dehradun",
      email: "isha.chauhan@legalconnect.com",
      phone: "+91-9497075293",
    },
  ];

  useEffect(() => {
    const uniqueCities = [...new Set(allLawyers.map((l) => l.city))];
    setCities(uniqueCities);
  }, []);

  useEffect(() => {
    if (selectedCity === "") {
      const allSpecs = [...new Set(allLawyers.map((l) => l.specialization))];
      setSpecializations(allSpecs);
    } else {
      const filteredSpecs = [
        ...new Set(
          allLawyers
            .filter((l) => l.city === selectedCity)
            .map((l) => l.specialization)
        ),
      ];
      setSpecializations(filteredSpecs);
      setSelectedSpecialization(""); // Reset specialization on city change
    }
  }, [selectedCity]);

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true);
    setSearched(true);

    setTimeout(() => {
      const filtered = allLawyers.filter((lawyer) => {
        const cityMatch = selectedCity === "" || lawyer.city === selectedCity;
        const specMatch =
          selectedSpecialization === "" ||
          lawyer.specialization === selectedSpecialization;
        return cityMatch && specMatch;
      });

      setLawyers(filtered);
      setLoading(false);
    }, 800);
  };

  return (
    <section id="connect-lawyer" className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <span className="text-primary fw-semibold">FIND REPRESENTATION</span>
          <h2 className="section-subtitle">Connect with a Lawyer</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Find the right attorney for your specific legal needs.
          </p>
        </div>

        <div className="card shadow-lg border-0">
          <div className="card-body p-4 p-md-5">
            <form onSubmit={handleSearch}>
              <div className="row mb-4">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <select
                    id="city"
                    className="form-select form-select-lg"
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    <option value="">All Cities</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="specialization" className="form-label">
                    Specialization
                  </label>
                  <select
                    id="specialization"
                    className="form-select form-select-lg"
                    value={selectedSpecialization}
                    onChange={(e) => setSelectedSpecialization(e.target.value)}
                  >
                    <option value="">All Specializations</option>
                    {specializations.map((spec, index) => (
                      <option key={index} value={spec}>
                        {spec}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg px-4 py-2"
                  disabled={loading}
                >
                  {loading ? "Searching..." : "Find Lawyers"}
                </button>
              </div>
            </form>

            {loading && (
              <div className="text-center mt-4">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2 text-muted">Finding lawyers...</p>
              </div>
            )}

            {searched && !loading && (
              <div className="mt-4">
                <h4 className="mb-3">Search Results</h4>
                {lawyers.length === 0 ? (
                  <p className="text-muted">
                    No lawyers found. Try different filters.
                  </p>
                ) : (
                  <div className="row g-3">
                    {lawyers.map((lawyer) => (
                      <div key={lawyer._id} className="col-md-6 col-lg-4">
                        <div className="card h-100 border">
                          <div className="card-body">
                            <h5 className="card-title fw-bold">
                              {lawyer.name}
                            </h5>
                            <p className="card-text text-primary mb-3">
                              {lawyer.specialization}
                            </p>
                            <p className="card-text mb-1">
                              <strong>Location:</strong> {lawyer.city}
                            </p>
                            <p className="card-text mb-1">
                              <strong>Email:</strong> {lawyer.email}
                            </p>
                            <p className="card-text mb-3">
                              <strong>Phone:</strong> {lawyer.phone}
                            </p>
                            <button className="btn btn-sm btn-primary">
                              Contact Now
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerConnectSection;
