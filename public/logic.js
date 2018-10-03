$(function () {





});


let sendingObj = {};


$('#userLoginForm').submit('click', function(e){
    e.preventDefault();
    let loginUserName = $('#userLogin').val().trim();
    sendingObj = {
        loginUserName: loginUserName
    }
    // console.log($('#userLogin').val().trim());


    $.post('/user/account/login', sendingObj).then(function(data){
            // console.log(data.sendingInfo.username + "This is the returned data");
            if(data.sendingInfo.username){
                appendArea(data.sendingInfo.username);
                let socket = io.connect();

            }else{
                console.log("That account does not exist");
            }
    });
});




$('#userForm').submit('click', function (e) {
    e.preventDefault();
    let userName = $('#userName').val().trim();
    sendingObj = {
        userName: userName
    }
    // console.log($('#userName').val().trim());


    $.post('/user/account/create', sendingObj).then(function (data) {
        console.log(data.sendingInfo);
        if (data.sendingInfo) {
        appendArea(data.sendingInfo);
        }else{
            console.log("something went wrong");
        }

    });

});


let appendArea = () =>{
        $("#userFormArea").hide();
        $("#userLoginArea").hide();
        $("#messageArea").show();
        

        $.get('/user/accounts').then(function (data) {
            // console.log(data);
            for (let i = 0; i < data.length; i++) {
                $("#users").append(`<li class="list-group-item">${data[i].username}</li>`);
            }
        });
    
};