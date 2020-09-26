$("#login-btn").on("click", function (event) {
   event.preventDefault();
   var username = $("#username").val();
   var pass = $("#pass").val();
   console.log(username, pass);
   if (username && pass) {
     let body = {
       email: username,
       password: pass,
     };
     $.ajax({
       url:
         "https://testing1.thestrategybook.com/deepak-ecommerce/server/api/user/login.php",
       type: "POST",
       data: JSON.stringify(body),
       success: function (response) {
         console.log(response);
         location.replace(
           "https://harshgoel05.github.io/deepak-ecommerce/client/adminportal.html"
         );
       },
       error: function (xhr, status) {
         console.log("error", xhr, status);
         alert("Some unknown error occured");
       },
     });
   } else {
     alert("Please enter all the details");
   }
 });
 // FrontDesk => Add client, Trainer ( employee, time)
 // Admin => All menus
 
 $("#logout-btn").click(function (e) {
   e.preventDefault();
   var url =
     "https://testing1.thestrategybook.com/deepak-ecommerce/server/api/logout.php";
 
   $.ajax({
     url: url,
     type: "GET",
     crossDomain: true,
     success: function (response) {
       localStorage.removeItem("status");
       localStorage.removeItem("role");
       localStorage.removeItem("user");
       location.replace(
         "https://harshgoel05.github.io/deepak-ecommerce/client/login.html"
       );
     },
     error: function (xhr, status) {
       console.log("error", xhr, status);
       alert("Some unknown error occured");
     },
   });
 });
 
//VALIDATION : 
/*$(function() {

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
 });*/