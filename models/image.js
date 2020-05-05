
const mongoose = require('mongoose');

const Schema = mongoose.Schema

const imageSchema = new Schema({
  title : {type: String},
  description:{type: String },
  filename : { type: String},
  views : { type: Number, default:0},
  likes : { type: Number, default:0},
  timestamp: { type: Date, default:Date.now},
 // comments : [{type: Schema.Types.ObjectId, ref: Comment}]

})
imageSchema.virtual('uniqueId').get(function() {
  return this.filename.split('.')[0]+'.'+this.filename.split('.')[1];
})

imageSchema.set('toJSON', { getters: true });

module.exports = mongoose.model('Image', imageSchema)