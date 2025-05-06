// import { useState } from 'react';
// import axios from 'axios';

// const DocumentVerificationSection = () => {
//   const [file, setFile] = useState(null);
//   const [fileName, setFileName] = useState('');
//   const [uploading, setUploading] = useState(false);
//   const [result, setResult] = useState(null);
//   const [error, setError] = useState('');

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setFileName(selectedFile.name);
//       setError('');
//       setResult(null);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (!file) {
//       setError('Please select a file first');
//       return;
//     }
    
//     const formData = new FormData();
//     formData.append('document', file);
    
//     setUploading(true);
    
//     try {
//       const response = await axios.post('/api/documents/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
      
//       // Simulate verification process
//       setTimeout(() => {
//         setResult({
//           id: response.data._id || '123456',
//           status: 'Completed',
//           verified: Math.random() > 0.5, // Simulating verification result
//           message: Math.random() > 0.5 ? 'Document appears to be authentic.' : 'Document appears to have inconsistencies.'
//         });
//         setUploading(false);
//       }, 2000);
      
//     } catch (err) {
//       setError(err.response?.data?.message || 'Error uploading document');
//       setUploading(false);
//     }
//   };

//   return (
//     <section id="document-verification" className="py-5 bg-primary-light">
//       <div className="container">
//         <div className="text-center mb-5">
//           <span className="text-primary fw-semibold">VERIFICATION SYSTEM</span>
//           <h2 className="section-subtitle">Document Verification</h2>
//           <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
//             Verify the authenticity of your legal documents instantly.
//           </p>
//         </div>

//         <div className="card shadow-lg border-0">
//           <div className="card-body p-4 p-md-5">
//             <form onSubmit={handleSubmit}>
//               <div className="upload-box mb-4">
//                 <i className="bi bi-cloud-arrow-up text-muted" style={{ fontSize: '3rem' }}></i>
//                 <h5 className="mt-3">Upload Document</h5>
//                 <p className="text-muted mb-3">PDF, DOCX, JPG, PNG up to 10MB</p>
//                 <input 
//                   type="file" 
//                   id="file-upload" 
//                   className="d-none" 
//                   onChange={handleFileChange}
//                   accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
//                 />
//                 <label htmlFor="file-upload" className="btn btn-outline-primary mb-3">
//                   Choose File
//                 </label>
//                 {fileName && (
//                   <p className="mb-0 fw-semibold">Selected: {fileName}</p>
//                 )}
//               </div>

//               {error && (
//                 <div className="alert alert-danger" role="alert">
//                   {error}
//                 </div>
//               )}

//               <div className="text-center">
//                 <button
//                   type="submit"
//                   className="btn btn-primary btn-lg px-4"
//                   disabled={uploading}
//                 >
//                   {uploading ? 'Verifying...' : 'Verify Document'}
//                 </button>
//               </div>
//             </form>

//             {uploading && (
//               <div className="text-center mt-4">
//                 <div className="spinner-border text-primary" role="status">
//                   <span className="visually-hidden">Loading...</span>
//                 </div>
//                 <p className="mt-2 text-muted">Analyzing document...</p>
//               </div>
//             )}

//             {result && (
//               <div className={`alert mt-4 ${result.verified ? 'alert-success' : 'alert-danger'}`} role="alert">
//                 <div className="d-flex">
//                   <div>
//                     <i className={`bi ${result.verified ? 'bi-check-circle-fill' : 'bi-x-circle-fill'} me-2`}></i>
//                   </div>
//                   <div>
//                     <h5 className="alert-heading">{result.verified ? 'Verification Successful' : 'Verification Failed'}</h5>
//                     <p className="mb-0">{result.message}</p>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DocumentVerificationSection;