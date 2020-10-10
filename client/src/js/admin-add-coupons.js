$("#admin-add-coupon-btn").on("click", function (event) {
  event.preventDefault();
  var form_data = $("#add_coupon_form").serializeArray();
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
