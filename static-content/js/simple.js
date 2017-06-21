/**
 * Created by fhuang on 6/20/2017.
 */
var btnVerifyClick = {};
btnVerifyClick = function() {
    var username = $("#username").val();
    var password = $("#password").val();

    if(username.length===0){
        $("#errMsg").html("");
        $("#username").focus();
        $("#errMsg").html("Please input user name first.");
        return false;
    }
    else if(password.length<5 || password.length>10){
        $("#errMsg").html("");
        $("#password").focus();
        $("#errMsg").html("Please input password between 5~10");
        return false;
    }
    else{
        $("#errMsg").html("username and password is right");
        return true;
    }
};

$(document).ready(function ()
{
    $('#submit').click(function(){
        return btnVerifyClick();
    });
});
