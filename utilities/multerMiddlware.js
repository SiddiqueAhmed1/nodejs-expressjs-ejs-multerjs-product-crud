import multer from "multer";

// multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (file.fieldname === "productPhoto") {
      cb(null, "public/product");
    }
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

// multer middleware
export const productFileUpload = multer({ storage }).single("productPhoto");
export const userFileUpload = multer({ storage }).single("userPhoto");
