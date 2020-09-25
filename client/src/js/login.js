$(function() {

    $("#username_error_message").hide();
    $("#pass_error_message").hide();

    var error_username = false;
    var error_pass = false;

    $("#username").focusout(function(){
       check_username();
    });
    $("#pass").focusout(function() {
       check_pass();
    });

    function check_username() {
       var username_len = $("#username").val().length;
       if (username_len < 4) {
            $("#username_error_message").html("Must have atleast 5 character");
            $("#username_error_message").show();
            error_username = true;
            
       } else {
            $("#username_error_message").hide();
       }
    }

    function check_pass() {
       var pass_length = $("#pass").val().length;
       if (pass_length < 7) {
          $("#pass_error_message").html("Must have atleast 8 Characters");
          $("#pass_error_message").show();
          error_pass = true;
       } else {
          $("#pass_error_message").hide();
       }
    }

    $("#login-form").submit(function() {
       error_username = false;
       error_pass = false;

       check_username();
       check_pass();

       if (error_username === false && error_pass === false) {
          alert("Registration Successfull");
          return true;
       } else {
          alert("Please Fill the form Correctly");
          return false;
       }

    });
 });