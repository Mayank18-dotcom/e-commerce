$("#add-btn").on("click", function (event) {
   event.preventDefault();
   var username = $("#username").val();
   var pass = $("#pass").val();
   var confirm_pass = $("#confirm_pass").val();
   var phone_number = $("#phone_number").val();
   console.log(username, pass);
   if (username && pass) {
     let body = {
       email: username,
       password: pass,
       confirm_password:confirm_pass,
       number : phone_number
     };
     $.ajax({
       url:
         "https://testing1.thestrategybook.com/deepak-ecommerce/server/api/admin/add.php",
       type: "POST",
       data: JSON.stringify(body),
       success: function (response) {
         console.log(response);
         alert("Admin added sucessfully!");
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
// $(function() {

//     $("#email_error_message").hide();
//     $("#pass_error_message").hide();

//     var error_email = false;
//     var error_pass = false;

//     $("#email").focusout(function(){
//        check_email();
//     });
//     $("#pass").focusout(function() {
//        check_pass();
//     });

//     function check_email() {
//       var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//       var email = $("#email").val();
//       if (pattern.test(email) && email !== '') {
//          $("#email_error_message").hide();
//       } else {
//          $("#email_error_message").html("Invalid Email");
//          $("#email_error_message").show();
//          error_email = true;
//       }
//    }

//     function check_pass() {
//        var pass_length = $("#pass").val().length;
//        if (pass_length < 7) {
//           $("#pass_error_message").html("Must have atleast 8 Characters");
//           $("#pass_error_message").show();
//           error_pass = true;
//        } else {
//           $("#pass_error_message").hide();
//        }
//     }

//     $("#iam_form").submit(function() {
//        error_email = false;
//        error_pass = false;

//        check_email();
//        check_pass();

//        if (error_email === false && error_pass === false) {
//           alert("Registration Successfull");
//           return true;
//        } else {
//           alert("Please Fill the form Correctly");
//           return false;
//        }

//     });
//  });