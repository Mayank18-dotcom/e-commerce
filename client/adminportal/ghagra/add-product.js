$("#submit-btn1").click(function () {
  console.log("Call add product API");
  let id = $("#id1").val();
  let title = $("#title1").val();
  let sub_title = $("#sub_title1").val();
  let price = $("#price1").val();
  // let sub_cat = $("#sub-cat1").val();
  let description = $("#des1").val();
  let type = $("#type1").val();
  let fab = $("#faab1").val();

  var sizes = [];
  $("#size-container1 input:checked").each(function () {
    sizes.push(this.value);
  });

  var occasions = [];
  $("#occasion-cont1 input:checked").each(function () {
    occasions.push(this.value);
  });
  console.log("occ", occasions);

  var washcares = [];
  $("#washcare-cont1 input:checked").each(function () {
    washcares.push(this.value);
  });

  var finalbody = {
    productid: id,
    title: title,
    subtitle: sub_title,
    price: price,
    // colors
    // image1
    // image2
    // image3
    // image4
    // image5
    // image6
    description: description,
    type: type,
    fabric: fab,
    // washcare1
    // washcare2
    // washcare3
  };

  //append occasions to body
  occasions.forEach((occ, index) => {
    finalbody[`occasion${index + 1}`] = occ;
  });
  //append size to body
  sizes.forEach((size, index) => {
    finalbody[`size${index + 1}`] = size;
  });
  //append washcares to body
  washcares.forEach((washcare, index) => {
    finalbody[`washcare${index + 1}`] = washcare;
  });
  console.log(finalbody);

  $.ajax({
    url:
      "https://testing1.thestrategybook.com/deepak-ecommerce/server/api/products/ghagra/add.php",
    type: "POST",
    data: JSON.stringify(finalbody),
    success: function (response) {
      alert("Added product successfully!");
    },
    error: function (xhr, status) {
      console.log("error", xhr, status);
      alert("Something went wrong");
    },
  });
});
