const express = require('express')
const router = express.Router()

// importe Controllers
//const userController = require('../controllers/user')
const imageController = require('../controllers/image')

// User routes
/* router.post('/register', userController.register)
router.post('/login', userController.login) */



const multer = require('multer');
//const upload = multer({dest: 'uploads/'})

 const storage = multer.diskStorage({
  destination : function(req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function(req, file, cb){
    cb(null, new Date().toISOString() + file.originalname)
  }
})

const fileFilter = (req, file, cb) => {
  console.log('file', file)
  // reject a file 
  if (file.mimetype === 'image/jpg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif'){
    cb(null, true);

  }else {
    
    cb(new Error('Hi there! Only images are allowed'), false)
  }
}

const upload =  multer({
  storage:storage, 
  limits:{
    fileSize : 1024 * 1024 * 5
},
fileFilter:fileFilter
})
 
// image routes
router.post('/images', upload.single('imageProduct') ,imageController.createImage)
router.get('/images', imageController.getImages)
router.get('/images/:id', imageController.getOneImage)
//router.put('/images/:id', imageController.saveOneImage)

module.exports = router
