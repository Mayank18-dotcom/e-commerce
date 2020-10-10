$("#user-register-btn").on("click", function (event) {
  event.preventDefault();
  var form_data = $("#user-registration_form").serializeArray();
  var body_data = {};
  let flag = 0;
  for (let i = 0; i < form_data.length; i++) {
    if (!form_data[i].value) {
      flag = 1;
      break;
    } else {
      body_data[form_data[i].name] = form_data[i].value;
    }
  }
  if (flag != 0) {
    $.ajax({
      url:
        "https://testing1.thestrategybook.com/deepak-ecommerce/server/api/user/add.php",
      type: "POST",
      data: JSON.stringify(body),
      success: function (response) {
        alert("User registerations successfull!");
      },
      error: function (xhr, status) {
        console.log("error", xhr, status);
        alert("Some unknown error occured. Please try logging in.");
      },
    });
  } else {
    alert("Please enter all the details");
  }
});


/*$(function () {
  $("#name_error_message").hide();
  $("#email_error_message").hide();
  $("#password_error_message").hide();
  $("#confirm_password_error_message").hide();
  $("#address_error_message").hide();
  $("#phone_number_error_message").hide();

  var error_name = false;
  var error_email = false;
  var error_password = false;
  var error_confirm_password = false;
  var error_address = false;
  var error_phone_number = false;

  $("#name").focusout(function () {
    check_name();
  });
  $("#email").focusout(function () {
    check_email();
  });
  $("#password").focusout(function () {
    check_password();
  });
  $("#confirm_password").focusout(function () {
    check_confirm_password();
  });
  $("#address").focusout(function () {
    check_address();
  });
  $("#phone_number").focusout(function () {
    check_phone_number();
  });

  function check_name() {
    var name_len = $("#name").val().length;
    if (name_len < 4) {
      $("#name_error_message").html("Should have atleast 5 character");
      $("#name_error_message").show();
      error_name = true;
    } else {
      $("#name_error_message").hide();
    }
  }

  function check_password() {
    var password_length = $("#password").val().length;
    if (password_length < 7) {
      $("#password_error_message").html("Should have atleast 8 Characters");
      $("#password_error_message").show();
      error_password = true;
    } else {
      $("#password_error_message").hide();
    }
  }

  function check_confirm_password() {
    var password = $("#password").val();
    var confirm_password = $("#confirm_password").val();
    if (password !== confirm_password) {
      $("#confirm_password_error_message").html("Password Did not Matched");
      $("#confirm_password_error_message").show();
      error_confirm_password = true;
    } else {
      $("#confirm_password_error_message").hide();
    }
  }

  function check_email() {
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#email").val();
    if (pattern.test(email) && email !== "") {
      $("#email_error_message").hide();
    } else {
      $("#email_error_message").html("Invalid Email");
      $("#email_error_message").show();
      error_email = true;
    }
  }

  function check_address() {
    var address_len = $("#address").val().length;
    if (address_len < 1) {
      $("#address_error_message").html("Address is empty");
      $("#address_error_message").show();
      error_address = true;
    } else {
      $("#address_error_message").hide();
    }
  }

  function check_phone_number() {
    var pattern = /^[0-9]\d{9}$/;
    var phone_number = $("#phone_number").val();
    if (pattern.test(phone_number) && phone_number !== "") {
      $("#phone_number_error_message").hide();
    } else {
      $("#phone_number_error_message").html("Invalid Phone Number");
      $("#phone_number_error_message").show();
      error_phone_number = true;
    }
  }

  $("#registration_form").submit(function () {
    error_name = false;
    error_email = false;
    error_password = false;
    error_confirm_password = false;
    error_address = false;
    error_phone_number = false;

    check_name();
    check_email();
    check_password();
    check_confirm_password();
    check_address();
    check_phone_number();

    if (
      error_name === false &&
      error_email === false &&
      error_password === false &&
      error_confirm_password === false &&
      error_address === false &&
      error_phone_number === false
    ) {
      alert("Registration Successfull");
    //   Call ajax here
      return true;
    } else {
      alert("Please Fill the form Correctly");
      return false;
    }
  });
});*/
