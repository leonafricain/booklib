//const md5 = require('md5')
const Image = require('../models/image')
const ctrl={};


ctrl.getImages= (req, res, next) =>{

};

ctrl.createImage = (req, res, next) => {

  console.log('============', req.file)
  const newImage = new Image({
    title : req.body.title,
    filename: req.file.filename,
    description: req.body.descritption
  });
  console.log('newImage :', newImage);
  newImage
    .save()
    .then(result => {
      console.log('res', result)
     res.json({
       image: result
     })
    }).catch(err => {
        console.log(err)
    })
 
};

ctrl.getOneImage = (req, res, next) => {
    

}

ctrl.removeImage = (req, res, next) => {
    

}

module.exports = ctrl;