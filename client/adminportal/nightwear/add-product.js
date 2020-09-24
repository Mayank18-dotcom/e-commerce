$(document).ready(function () {
  $("#sidebar").mCustomScrollbar({
      theme: "minimal"
  });

  $('#dismiss, .overlay').on('click', function () {
      $('#sidebar').removeClass('active');
      $('.overlay').removeClass('active');
  });

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').addClass('active');
      $('.overlay').addClass('active');
      $('.collapse.in').toggleClass('in');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});
$("#add-product").click(function () {
  console.log("Call add product API");
  let id = $("#product_id").val();
  let title = $("#title").val();
  let sub_title = $("#sub_title").val();
  let price = $("#price").val();

  let kurtafabric = $("#kurta_fabric").val();
  let bottomfabric = $("#bottom_fabric").val();
  let dupattafabric = $("#dupatta_fabric").val();
  let kfl = $("#kfl").val();
  let bfl = $("#bfl").val();
  let dl = $("#dl").val();
  let type = $("#type").val();
  let stitch = $("#stitch").val();
  // For sizes
  var sizes = [];
  $("#size-container input:checked").each(function () {
    sizes.push(this.value);
  });
  // For occasions
  var occasions = [];
  $("#occasion-cont input:checked").each(function () {
    occasions.push(this.value);
  });
  console.log("occ", occasions);
  var washcares = [];
  $("#washcare-cont input:checked").each(function () {
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
    kurtafabric: kurtafabric,
    bottomfabric: bottomfabric,
    dupattafabric: dupattafabric,
    kfl: kfl,
    bfl: bfl,
    dl: dl,
    type: type,
    stitch: stitch,
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
      "https://testing1.thestrategybook.com/deepak-ecommerce/server/api/products/dressMaterials/add.php",
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

console.log("fwef");

/*
$("#submit-btn3").click(function () {
  console.log("Call add product API");
  let id = $("#id").val();
  let title = $("#title3").val();
  let sub_title = $("#sub_title3").val();
  let price = $("#price3").val();
  let description = $("#des3").val();
  let type= $("#type3").val();
  let fabric= $("#faab3").val();
  let length= $("#length3").val();


  var sizes = [];
  $("#size-container3 input:checked").each(function () {
    sizes.push(this.value);
  });
  
  var washcares = [];
  $("#washcare-cont3 input:checked").each(function () {
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
    length=length
    // washcare1
    // washcare2
    // washcare3
  };
  
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
      "https://testing1.thestrategybook.com/deepak-ecommerce/server/api/products/nightwear/add.php",
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
});*/
