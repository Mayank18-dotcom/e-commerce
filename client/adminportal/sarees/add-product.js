$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
$("#submit-btn5").click(function () {
  console.log("Call add product API");
  let id = $("#id5").val();
  let sub_category = $("#sub-cat5").val();
  let title = $("#title5").val();
  let sub_title = $("#sub_title5").val();
  let price = $("#price5").val();
  let description = $("#des5").val();
  let type= $("#type5").val();
  let blousefabric= $("#bfab5").val();
  let blouse= $("#blouse5").val();
  let sareefabric= $("#sfab5").val();
  let length= $("#length5").val();
  let width= $("#width5").val();
  
  var sizes = [];
  $("#size-container5 input:checked").each(function () {
    sizes.push(this.value);
  });
  // For occasions
  var occasions = [];
  $("#occasion-cont5 input:checked").each(function () {
    occasions.push(this.value);
  });
  console.log("occ", occasions);
  var washcares = [];
  $("#washcare-cont5 input:checked").each(function () {
    washcares.push(this.value);
  });

  
  var finalbody = {
    productid: id,
    title: title,
    subcategory:sub_category,
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
    blousefabric:blousefabric,
    blouse:blouse,
    sareefabric:sareefabric,
    length:length,
    width:width
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
      "https://testing1.thestrategybook.com/deepak-ecommerce/server/api/products/sarees/add.php",
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
