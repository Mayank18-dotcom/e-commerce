$("#user-login-btn").on("click", function (event) {
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
        window.location.href =
          "https://testing1.thestrategybook.com/deepak-ecommerce/client/user/profile.html";
      },
      error: function (xhr, status) {
        console.log("error", xhr, status);
        alert("Please check the credentials");
      },
    });
  } else {
    alert("Please enter all the details");
  }
});
