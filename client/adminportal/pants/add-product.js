$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
$("#submit-btn61").click(function () {
  console.log("Call add product API");
  let id = $("#id61").val();
  let title = $("#title61").val();
  let sub_title = $("#sub_title61").val();
  let price = $("#price61").val();
  let brand= $("#brand61").val();
  let description = $("#des61").val();
  let material = $("#mat61").val();
  let type= $("#type61").val();
  let fabric= $("#faab61").val();

  // For sizes
  var sizes = [];
  $("#size-container61 input:checked").each(function () {
    sizes.push(this.value);
  });
  // For occasions
  var occasions = [];
  $("#occasion-cont61 input:checked").each(function () {
    occasions.push(this.value);
  });
  console.log("occ", occasions);
  var washcares = [];
  $("#washcare-cont61 input:checked").each(function () {
    washcares.push(this.value);
  });


  var finalbody = {
    productid: id,
    title: title,
    subtitle: sub_title,
    brand:brand,
    price: price,
    // colors
    // image1
    // image2
    // image3
    // image4
    // image5
    // image6
    description:description,
    type: type,
    fabric:fabric,
    material:material
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
      "https://testing1.thestrategybook.com/deepak-ecommerce/server/api/products/pants/add.php",
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
