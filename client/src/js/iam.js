$(function() {

    $("#email_error_message").hide();
    $("#pass_error_message").hide();

    var error_email = false;
    var error_pass = false;

    $("#email").focusout(function(){
       check_email();
    });
    $("#pass").focusout(function() {
       check_pass();
    });

    function check_email() {
      var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      var email = $("#email").val();
      if (pattern.test(email) && email !== '') {
         $("#email_error_message").hide();
      } else {
         $("#email_error_message").html("Invalid Email");
         $("#email_error_message").show();
         error_email = true;
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

    $("#iam_form").submit(function() {
       error_email = false;
       error_pass = false;

       check_email();
       check_pass();

       if (error_email === false && error_pass === false) {
          alert("Registration Successfull");
          return true;
       } else {
          alert("Please Fill the form Correctly");
          return false;
       }

    });
 });