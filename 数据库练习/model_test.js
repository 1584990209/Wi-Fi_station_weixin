var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var vacationSchema = mongoose.Schema({
  username : { type: String },                    //�û��˺�
    userpwd: {type: String},                        //����
    userage: {type: Number},                        //����
    logindate : { type: Date}                       //�����¼ʱ��
});


var model = mongoose.model('model', vacationSchema);
module.exports = model;