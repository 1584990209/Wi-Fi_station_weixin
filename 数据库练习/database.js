
var model = require("./model");

/**
 * ����
 */
function insert() {
 
    var user = new model({
        username : 'Tracy McGrady',                 //�û��˺�
        userpwd: 'abcd',                            //����
        userage: 37,                                //����
        logindate : new Date()                      //�����¼ʱ��
    });

    user.save(function (err, res) {

        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }

    });
}

insert();

function update(){
    var wherestr = {'username' : 'Tracy McGrady'};
    var updatestr = {'userpwd': 'zzzz'};
    
    User.update(wherestr, updatestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

update();


function del(){
    var wherestr = {'username' : 'Tracy McGrady'};
    
    User.remove(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

del();

function getByConditions(){
    var wherestr = {'username' : 'Tracy McGrady'};
    
    User.find(wherestr, function(err, res){
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}

getByConditions();