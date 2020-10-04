
$("#submit_btn2").click(function () {
  console.log("Call add product API");
  let id = $("#id2").val();
  let sub_category = $("#sub-cat2").val();
  let title = $("#title2").val();
  let sub_title = $("#sub_title2").val();
  let price = $("#price2").val();
  let quant = $("#quant2").val();
  let description = $("#des2").val();
  let type= $("#type2").val();
  let fabric= $("#faab2").val();
  let neck= $("#neck2").val();
  let sleeves= $("#sleeves2").val();


  
  var sizes = [];
  $("#size-container2 input:checked").each(function () {
    sizes.push(this.value);
  });
  // For occasions
  var occasions = [];
  $("#occasion-cont2 input:checked").each(function () {
    occasions.push(this.value);
  });
  console.log("occ", occasions);
  var washcares = [];
  $("#washcare-cont2 input:checked").each(function () {
    washcares.push(this.value);
  });

  
  var finalbody = {
    productid: id,
    title: title,
    subcategory:sub_category,
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
      "https://testing1.thestrategybook.com/deepak-ecommerce/server/api/products/readymadeDresses/add.php",
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
