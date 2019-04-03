

var multer  = require('multer')
var aws = require('aws-sdk')
var multerS3 = require('multer-s3')


const s3 = new aws.S3();

const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: 'naybo-s3-bucket',
      acl: 'public-read',
      metadata: function (req, file, cb) {
        cb(null, {fieldName: 'TESTING_META_DATA'});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
  });


const singleUpload = upload.single('image')

module.exports = function(app) {
// Create a new example
app.post("/api/image-upload", function(req, res) {
  singleUpload(req, res, function(err, some) {
        if (err) {
          console.log('error = ', err);
            return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.meessage}] });
        }
        return res.json({'imageUrl': req.file.location});

    })
  });
};
