// backend/routes/documents.js
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const multer = require('multer');

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '..', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['.pdf', '.jpg', '.jpeg', '.png', '.docx'];
  const ext = path.extname(file.originalname).toLowerCase();
  
  if (allowedTypes.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only PDF, JPG, PNG, and DOCX are allowed.'));
  }
};

const upload = multer({ 
  storage, 
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB limit
});

// Upload document
router.post('/upload', upload.single('document'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    
    // Create a mock response for demonstration
    const document = {
      _id: Date.now().toString(),
      filename: req.file.filename,
      originalName: req.file.originalname,
      mimetype: req.file.mimetype,
      path: req.file.path,
      size: req.file.size,
      verified: false,
      verificationResult: 'Pending'
    };
    
    // Simulate verification process
    setTimeout(() => {
      // Real implementation would update the document in database
      console.log('Document verification completed');
    }, 2000);
    
    res.status(201).json(document);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get document verification status
router.get('/:id', (req, res) => {
  try {
    // Mock response for demonstration
    const document = {
      _id: req.params.id,
      verified: Math.random() > 0.5,
      verificationResult: Math.random() > 0.5 ? 'Document is authentic' : 'Document may be fraudulent'
    };
    
    res.json(document);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;