$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
$("#submit-btn25").click(function () {
  console.log("Call add product API");
  let id = $("#id25").val();
  let title = $("#title25").val();
  let sub_title = $("#sub_title25").val();
  let price = $("#price25").val();
  let description = $("#des25").val();
  let type= $("#type25").val();
  let fabric= $("#faab25").val();
  let neck= $("#neck25").val();
  let sleeves= $("#sleeves25").val();

  var sizes = [];
  $("#size-container25 input:checked").each(function () {
    sizes.push(this.value);
  });
  // For occasions
  var occasions = [];
  $("#occasion-cont25 input:checked").each(function () {
    occasions.push(this.value);
  });
  console.log("occ", occasions);
  var washcares = [];
  $("#washcare-cont25 input:checked").each(function () {
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
    description:description,
    type: type,
    fabric:fabric,
    neck:neck,
    sleeves:sleeves
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
      "https://testing1.thestrategybook.com/deepak-ecommerce/server/api/products/readymadeBlouse/add.php",
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
