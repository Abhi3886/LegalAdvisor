import { useState } from "react";
import axios from "axios";
import { CloudArrowUp } from "react-bootstrap-icons"; // Bootstrap Icon (install via `npm install react-bootstrap-icons`)

const ChatbotSection = () => {
  const [pdfFile, setPdfFile] = useState(null);
  const [answer, setAnswer] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!pdfFile) return alert("Please upload a PDF document.");

    const formData = new FormData();
    formData.append("pdf", pdfFile);

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/scan-pdf", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setAnswer(res.data.answer);
      setSummary(res.data.summary);
    } catch (error) {
      console.error(error);
      setAnswer("Failed to verify the document.");
      setSummary("");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    setPdfFile(e.target.files[0]);
  };

  return (
    <section id="chatbot" className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <span className="text-primary fw-semibold">AI ASSISTANT</span>
          <h2 className="section-subtitle">Legal Document Verifier</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Verify if your document is related to a legal case like a murder case by uploading your document.
          </p>
        </div>

        <div className="card shadow-lg border-0 mb-5">
          <div className="card-body p-4 p-md-5">
            <form onSubmit={handleUpload}>
              <div className="mb-4">
                <label className="form-label fw-bold mb-3">Upload PDF Document</label>
                <div className="upload-box position-relative border border-2 rounded-3 p-5 text-center bg-light">
                  <CloudArrowUp size={50} className="text-primary mb-3" />
                  <p className="fw-semibold mb-1">Drag & Drop your PDF here</p>
                  <p className="text-muted small">or click to browse</p>
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handleFileChange}
                    className="position-absolute w-100 h-100 top-0 start-0 opacity-0 cursor-pointer"
                    style={{ cursor: "pointer" }}
                  />
                  {pdfFile && (
                    <p className="text-success mt-3 fw-medium">{pdfFile.name}</p>
                  )}
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg px-4 py-2"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Verify Document"}
                </button>
              </div>
            </form>

            {answer && (
              <div className="mt-4 bg-light p-4 rounded">
                <h5 className="fw-bold">Verification Result:</h5>
                <div
                  className="text-muted"
                  style={{ fontSize: "1.5rem", textAlign: "center" }}
                >
                  {answer === "✔ Legal Document (Murder Case)" ? (
                    <span style={{ color: "green" }}>{answer}</span>
                  ) : answer === "❌ Not a Legal Document (Murder Case)" ? (
                    <span style={{ color: "red" }}>{answer}</span>
                  ) : (
                    <span>{answer}</span>
                  )}
                </div>
              </div>
            )}

            {summary && (
              <div className="mt-4 bg-light p-4 rounded">
                <h5 className="fw-bold">Summary:</h5>
                <div
                  className="text-muted"
                  style={{ whiteSpace: "pre-line", lineHeight: "1.6" }}
                >
                  {summary}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
