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
$("#submit-btn8").click(function () {
  console.log("Call add product API");

  let id = $("#id8").val();
  let title = $("#title8").val();
  let sub_title = $("#sub_title8").val();
  let price = $("#price8").val();
  let sub_category = $("#sub-cat8").val();
  let description = $("#des").val();
  let kfl = $("#kfl8").val();
  let bfl = $("#bfl8").val();
  let dl = $("#dl8").val();
  let type= $("#type8").val();
  let fabric= $("#faab8").val();
  let kl= $("#kl8").val();
  let sl= $("#sl8").val();
  let ss= $("#ss8").val();
  let neck= $("#neck8").val();
  let ornamentation= $("#orna8").val();
  let fabric2= $("#fab82").val();

  // For sizes
  var sizes = [];
  $("#size-container8 input:checked").each(function () {
    sizes.push(this.value);
  });
  // For occasions
  var occasions = [];
  $("#occasion-cont8 input:checked").each(function () {
    occasions.push(this.value);
  });
  console.log("occ", occasions);
  var washcares = [];
  $("#washcare-cont8 input:checked").each(function () {
    washcares.push(this.value);
  });

  var finalbody = {
    productid: id,
    subcategory:sub_category,
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
    kfl: kfl,
    bfl: bfl,
    dl: dl,
    type: type,
    fabric:fabric,
    kl:kl,
    sl:sl,
    ss:ss,
    neck:neck,
    ornamentation:ornamentation,
    fabric2:fabric2
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
      "https://testing1.thestrategybook.com/deepak-ecommerce/server/api/products/kurtis/add.php",
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
