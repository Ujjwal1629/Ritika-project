const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: 'dh5g10qny', 
  api_key: '574535588234773', 
  api_secret: "sOxpO1WoZvPwRRfZ6n3B-QWtYDw",
  secure: true
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  try {
    const result = await cloudinary.uploader.upload(file, {
      resource_type: "auto",
      folder: "mern-ecommerce",
      use_filename: true,
      unique_filename: true
    });
    return result;
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw error;
  }
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
