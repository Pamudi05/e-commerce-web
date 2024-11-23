const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const uniqueFileName = `${uuidv4()}${ext}`;
        cb(null, uniqueFileName);
    }
});

const upload = multer({ storage });

module.exports = upload;
