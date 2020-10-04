$("#submit-btn").click(function () {
  console.log("Call add product API");
  let id = $("#id7").val();
  let title = $("#title7").val();
  let sub_title = $("#sub_title7").val();
  let price = $("#price7").val();
  let quant = $("#quant7").val();
  let description = $("#des7").val();
  let type = $("#type7").val();
  let length = $("#lenght7").val();
  let pattern = $("#pattern7").val();
  let material = $("#mat7").val();

  // For sizes
  var sizes = [];
  $("#size-container7 input:checked").each(function () {
    sizes.push(this.value);
  });
  // For occasions
  var occasions = [];
  $("#occasion-cont7 input:checked").each(function () {
    occasions.push(this.value);
  });
  console.log("occ", occasions);
  var washcares = [];
  $("#washcare-cont7 input:checked").each(function () {
    washcares.push(this.value);
  });

  var finalbody = {
    productid: id,
    title: title,
    subtitle: sub_title,
    price: price,
    quantity : quant,
    // colors
    // image1
    // image2
    // image3
    // image4
    // image5
    // image6
    description: description,
    type: type,
    length: length,
    pattern: pattern,
    material: material,
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
  // Ajax api call
  $.ajax({
    url:
      "https://testing1.thestrategybook.com/deepak-ecommerce/server/api/products/plazzos/add.php",
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
