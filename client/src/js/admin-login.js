$("#login-btn").on("click", function (event) {
  event.preventDefault();
  var username = $("#username").val();
  var pass = $("#pass").val();
  console.log(username, pass);
  if (username && pass) {
    let body = {
      username: username,
      password: pass,
    };
    $.ajax({
      url:
        "https://testing1.thestrategybook.com/deepak-ecommerce/server/api/admin/login.php",
      type: "POST",
      data: JSON.stringify(body),
      success: function (response, status, xhr) {
        console.log(response);
        // console.log(xhr.getAllResponseHeaders("set-cookie"));
        // console.log(xhr.getResponseHeader());
        // localStorage.setItem("isloggedin", "true");
        // localStorage.setItem("role", "admin");
        // location.replace(
        //   "https://harshgoel05.github.io/deepak-ecommerce/client/adminportal.html"
        // );
      },
      error: function (xhr, status) {
        console.log("error", xhr, status);
        alert("The username or password doesn't match");
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
      // localStorage.removeItem("isloggedin", "true");
      // localStorage.removeItem("role", "admin");
      // location.replace(
      //   "https://harshgoel05.github.io/deepak-ecommerce/client/admin-login.html"
      // );
    },
    error: function (xhr, status) {
      console.log("error", xhr, status);
      alert("Some unknown error occured");
    },
  });
});
// Get user profile
// $(document).on(function () {});
// $.ajax({
//   url:
//     "https://testing1.thestrategybook.com/deepak-ecommerce/server/api/admin/profile.php",
//   type: "GET",
//   xhrFields: {
//     withCredentials: true,
//   },
//   success: function (response, status, xhr) {},
//   error: function (xhr, status) {
//     console.log("error", xhr, status);
//     // alert("Some unknown error occured");
//   },
// });
