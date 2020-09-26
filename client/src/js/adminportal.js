/*$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

$(document).ready(function () {
  $('.sec').hide();
  $('#targetdiv1').show();
  $('#selectMe').change(function () {
    $('.sec').hide();
    $('#'+$(this).val()).show();
  })
});*/
function initImageUpload(box) {
  let uploadField = box.querySelector(".image-upload");

  uploadField.addEventListener("change", getFile);

  function getFile(e) {
    let file = e.currentTarget.files[0];
    checkType(file);
  }

  function previewImage(file) {
    let thumb = box.querySelector(".js--image-preview"),
      reader = new FileReader();

    reader.onload = function () {
      thumb.style.backgroundImage = "url(" + reader.result + ")";
    };
    reader.readAsDataURL(file);
    thumb.className += " js--no-default";
  }

  function checkType(file) {
    let imageType = /image.*/;
    if (!file.type.match(imageType)) {
      throw "Datei ist kein Bild";
    } else if (!file) {
      throw "Kein Bild gewählt";
    } else {
      previewImage(file);
    }
  }
}

// initialize box-scope
var boxes = document.querySelectorAll(".box");

for (let i = 0; i < boxes.length; i++) {
  let box = boxes[i];
  initDropEffect(box);
  initImageUpload(box);
}

/// drop-effect
function initDropEffect(box) {
  let area,
    drop,
    areaWidth,
    areaHeight,
    maxDistance,
    dropWidth,
    dropHeight,
    x,
    y;

  // get clickable area for drop effect
  area = box.querySelector(".js--image-preview");
  area.addEventListener("click", fireRipple);

  function fireRipple(e) {
    area = e.currentTarget;
    // create drop
    if (!drop) {
      drop = document.createElement("span");
      drop.className = "drop";
      this.appendChild(drop);
    }
    // reset animate class
    drop.className = "drop";

    // calculate dimensions of area (longest side)
    areaWidth = getComputedStyle(this, null).getPropertyValue("width");
    areaHeight = getComputedStyle(this, null).getPropertyValue("height");
    maxDistance = Math.max(parseInt(areaWidth, 10), parseInt(areaHeight, 10));

    // set drop dimensions to fill area
    drop.style.width = maxDistance + "px";
    drop.style.height = maxDistance + "px";

    // calculate dimensions of drop
    dropWidth = getComputedStyle(this, null).getPropertyValue("width");
    dropHeight = getComputedStyle(this, null).getPropertyValue("height");

    // calculate relative coordinates of click
    // logic: click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center
    x = e.pageX - this.offsetLeft - parseInt(dropWidth, 10) / 2;
    y = e.pageY - this.offsetTop - parseInt(dropHeight, 10) / 2 - 30;

    // position drop and animate
    drop.style.top = y + "px";
    drop.style.left = x + "px";
    drop.className += " animate";
    e.stopPropagation();
  }
}

// Channge this
var type;
var sub_cat;
var blouse;
var kurta_fabric_length;

var id,
  title,
  sub_title,
  price,
  size,
  color,
  description,
  kurta_fabric_length,
  bottom_fabric_length,
  dupatta_fabric_length,
  type,
  occasion,
  fabric,
  kurti_length,
  sleeves_length,
  sleeves_styling,
  neck,
  ornamentation,
  material,
  wash_care,
  fabric2,
  color2,
  coupon1,
  coupon2,
  coupon3,
  discount;

/* FORM 1*/
$("#submit-btn1").click(function (event) {
  event.preventDefault();
  console.log("w3rr");
  var id = $("#id1").val();
  var title = $("#title1").val();
  var sub_title = $("#sub_title1").val();
  var price = $("#price1").val();
  $("#sub-cat1").change(function () {
    var sub_cat = $("#sub-cat1").val();
  });
  var size;
  if ($("#defaultCheck11").is(":checked")) {
    size = size + "_" + $("#defaultCheck11").val();
  }
  if ($("#defaultCheck12").is(":checked")) {
    size = size + "_" + $("#defaultCheck12").val();
  }
  if ($("#defaultCheck13").is(":checked")) {
    size = size + "_" + $("#defaultCheck13").val();
  }
  if ($("#defaultCheck14").is(":checked")) {
    size = size + "_" + $("#defaultCheck14").val();
  }
  if ($("#defaultCheck15").is(":checked")) {
    size = size + "_" + $("#defaultCheck15").val();
  }
  if ($("#defaultCheck16").is(":checked")) {
    size = size + "_" + $("#defaultCheck16").val();
  }

  var color;
  if ($("#col11").is(":checked")) {
    color = color + "_" + $("#col11").val();
  }
  if ($("#col12").is(":checked")) {
    color = color + "_" + $("#col12").val();
  }
  if ($("#col13").is(":checked")) {
    color = color + "_" + $("#col13").val();
  }
  if ($("#col14").is(":checked")) {
    color = color + "_" + $("#col14").val();
  }
  if ($("#col15").is(":checked")) {
    color = color + "_" + $("#col15").val();
  }
  if ($("#col16").is(":checked")) {
    color = color + "_" + $("#col16").val();
  }
  if ($("#col17").is(":checked")) {
    color = color + "_" + $("#col17").val();
  }
  if ($("#col18").is(":checked")) {
    color = color + "_" + $("#col18").val();
  }
  if ($("#col19").is(":checked")) {
    color = color + "_" + $("#col19").val();
  }
  if ($("#col110").is(":checked")) {
    color = color + "_" + $("#col110").val();
  }
  if ($("#col111").is(":checked")) {
    color = color + "_" + $("#col111").val();
  }
  if ($("#col112").is(":checked")) {
    color = color + "_" + $("#col112").val();
  }
  if ($("#col113").is(":checked")) {
    color = color + "_" + $("#col113").val();
  }
  if ($("#col114").is(":checked")) {
    color = color + "_" + $("#col114").val();
  }
  if ($("#col115").is(":checked")) {
    color = color + "_" + $("#col115").val();
  }
  if ($("#col116").is(":checked")) {
    color = color + "_" + $("#col116").val();
  }
  if ($("#col117").is(":checked")) {
    color = color + "_" + $("#col117").val();
  }
  if ($("#col118").is(":checked")) {
    color = color + "_" + $("#col118").val();
  }
  if ($("#col119").is(":checked")) {
    color = color + "_" + $("#col119").val();
  }
  if ($("#col120").is(":checked")) {
    color = color + "_" + $("#col120").val();
  }
  if ($("#col121").is(":checked")) {
    color = color + "_" + $("#col121").val();
  }
  if ($("#col122").is(":checked")) {
    color = color + "_" + $("#col122").val();
  }
  if ($("#col123").is(":checked")) {
    color = color + "_" + $("#col123").val();
  }
  if ($("#col124").is(":checked")) {
    color = color + "_" + $("#col124").val();
  }
  if ($("#col125").is(":checked")) {
    color = color + "_" + $("#col125").val();
  }
  if ($("#col126").is(":checked")) {
    color = color + "_" + $("#col126").val();
  }
  if ($("#col127").is(":checked")) {
    color = color + "_" + $("#col127").val();
  }
  if ($("#col128").is(":checked")) {
    color = color + "_" + $("#col128").val();
  }
  if ($("#col129").is(":checked")) {
    color = color + "_" + $("#col129").val();
  }
  if ($("#col130").is(":checked")) {
    color = color + "_" + $("#col130").val();
  }
  /*image*/

  var description = $("#des1").val();

  $("#type1").change(function () {
    var type = $("#type1").val();
  });

  var occasion;
  if ($("#o11").is(":checked")) {
    occasion = occasion + "_" + $("#o11").val();
  }
  if ($("#o12").is(":checked")) {
    occasion = occasion + "_" + $("#o12").val();
  }
  if ($("#o13").is(":checked")) {
    occasion = occasion + "_" + $("#o13").val();
  }
  if ($("#o14").is(":checked")) {
    occasion = occasion + "_" + $("#o14").val();
  }
  if ($("#o15").is(":checked")) {
    occasion = occasion + "_" + $("#o15").val();
  }
  if ($("#o16").is(":checked")) {
    occasion = occasion + "_" + $("#o16").val();
  }
  if ($("#o17").is(":checked")) {
    occasion = occasion + "_" + $("#o17").val();
  }

  var fabric = $("#fab1").val();

  var wash_care;

  if ($("#w11").is(":checked")) {
    wash_care = wash_care + "_" + $("#w11").val();
  }
  if ($("#w12").is(":checked")) {
    wash_care = wash_care + "_" + $("#w12").val();
  }
  if ($("#w13").is(":checked")) {
    wash_care = wash_care + "_" + $("#w13").val();
  }

  var coupon1 = $("#cp11").val();
  var coupon2 = $("#cp12").val();
  var coupon3 = $("#cp13").val();
  var discount = $("#dis1").val();

  var formData = {
    id: id,
    title: title,
    sub_title: sub_title,
    price: price,
    sub_cat: sub_cat,
    size: size,
    color: color,
    /*img*/
    description: description,
    type: type,
    occasion: occasion,
    fabric: fabric,
    wash_care: wash_care,
    coupon1: coupon1,
    coupon2: coupon2,
    coupon3: coupon3,
    discount: discount,
  };
  $.ajax({
    url: "https://ecommerce-try.herokuapp.com/server/api/user/add.php",
    type: "POST",
    data: JSON.stringify(formData),
    crossDomain: true,
    success: function (response) {
      console.log(response);
    },
    error: function (xhr, status) {
      console.log("error", xhr, status);
      alert("Some unknown error occured");
    },
  });
});

/***************************** */

/* FORM 2*/
$("#submit-btn2").click(function (event) {
  event.preventDefault();
  var id = $("#id2").val();
  var title = $("#title2").val();
  var sub_title = $("#sub_title2").val();
  var price = $("#price2").val();

  $("#sub-cat2").change(function () {
    var sub_cat = $("#sub-cat2").val();
  });

  var size;
  if ($("#defaultCheck21").is(":checked")) {
    size = size + "_" + $("#defaultCheck21").val();
  }
  if ($("#defaultCheck22").is(":checked")) {
    size = size + "_" + $("#defaultCheck22").val();
  }
  if ($("#defaultCheck23").is(":checked")) {
    size = size + "_" + $("#defaultCheck23").val();
  }
  if ($("#defaultCheck24").is(":checked")) {
    size = size + "_" + $("#defaultCheck24").val();
  }
  if ($("#defaultCheck25").is(":checked")) {
    size = size + "_" + $("#defaultCheck25").val();
  }
  if ($("#defaultCheck26").is(":checked")) {
    size = size + "_" + $("#defaultCheck26").val();
  }

  var color;
  if ($("#col21").is(":checked")) {
    color = color + "_" + "#col21".val();
  }
  if ($("#col22").is(":checked")) {
    color = color + "_" + "#col22".val();
  }
  if ($("#col23").is(":checked")) {
    color = color + "_" + "#col23".val();
  }
  if ($("#col24").is(":checked")) {
    color = color + "_" + "#col24".val();
  }
  if ($("#col25").is(":checked")) {
    color = color + "_" + "#col25".val();
  }
  if ($("#col26").is(":checked")) {
    color = color + "_" + "#col26".val();
  }
  if ($("#col27").is(":checked")) {
    color = color + "_" + "#col27".val();
  }
  if ($("#col28").is(":checked")) {
    color = color + "_" + "#col28".val();
  }
  if ($("#col29").is(":checked")) {
    color = color + "_" + "#col29".val();
  }
  if ($("#col210").is(":checked")) {
    color = color + "_" + "#col210".val();
  }
  if ($("#col211").is(":checked")) {
    color = color + "_" + $("#col211").val();
  }
  if ($("#col212").is(":checked")) {
    color = color + "_" + $("#col212").val();
  }
  if ($("#col213").is(":checked")) {
    color = color + "_" + $("#col213").val();
  }
  if ($("#col214").is(":checked")) {
    color = color + "_" + $("#col214").val();
  }
  if ($("#col215").is(":checked")) {
    color = color + "_" + $("#col215").val();
  }
  if ($("#col216").is(":checked")) {
    color = color + "_" + $("#col216").val();
  }
  if ($("#col217").is(":checked")) {
    color = color + "_" + $("#col217").val();
  }
  if ($("#col218").is(":checked")) {
    color = color + "_" + $("#col218").val();
  }
  if ($("#col219").is(":checked")) {
    color = color + "_" + $("#col219").val();
  }
  if ($("#col220").is(":checked")) {
    color = color + "_" + $("#col220").val();
  }
  if ($("#col221").is(":checked")) {
    color = color + "_" + $("#col221").val();
  }
  if ($("#col222").is(":checked")) {
    color = color + "_" + $("#col222").val();
  }
  if ($("#col223").is(":checked")) {
    color = color + "_" + $("#col223").val();
  }
  if ($("#col224").is(":checked")) {
    color = color + "_" + $("#col224").val();
  }
  if ($("#col225").is(":checked")) {
    color = color + "_" + $("#col225").val();
  }
  if ($("#col226").is(":checked")) {
    color = color + "_" + $("#col226").val();
  }
  if ($("#col227").is(":checked")) {
    color = color + "_" + $("#col227").val();
  }
  if ($("#col228").is(":checked")) {
    color = color + "_" + $("#col228").val();
  }
  if ($("#col229").is(":checked")) {
    color = color + "_" + $("#col229").val();
  }
  if ($("#col230").is(":checked")) {
    color = color + "_" + $("#col230").val();
  }
  /*image*/

  var description = $("#des2").val();

  $("#type2").change(function () {
    var type = $("#type2").val();
  });

  var occasion;
  if ($("#o21").is(":checked")) {
    occasion = occasion + "_" + $("#o21").val();
  }
  if ($("#o22").is(":checked")) {
    occasion = occasion + "_" + $("#o22").val();
  }
  if ($("#o23").is(":checked")) {
    occasion = occasion + "_" + $("#o23").val();
  }
  if ($("#o24").is(":checked")) {
    occasion = occasion + "_" + $("#o24").val();
  }
  if ($("#o25").is(":checked")) {
    occasion = occasion + "_" + $("#o25").val();
  }
  if ($("#o26").is(":checked")) {
    occasion = occasion + "_" + $("#o26").val();
  }
  if ($("#o27").is(":checked")) {
    occasion = occasion + "_" + $("#o27").val();
  }

  var fabric = $("#fab2").val();

  $("#neck2").change(function () {
    var neck = $("#neck2").val();
  });

  $("#sleeves2").change(function () {
    var sleeves = $("#sleeves2").val();
  });

  var wash_care;

  if ($("#w21").is(":checked")) {
    wash_care = wash_care + "_" + $("#w21").val();
  }
  if ($("#w22").is(":checked")) {
    wash_care = wash_care + "_" + $("#w22").val();
  }
  if ($("#w23").is(":checked")) {
    wash_care = wash_care + "_" + $("#w23").val();
  }

  var coupon1 = $("#cp21").val();
  var coupon2 = $("#cp22").val();
  var coupon3 = $("#cp23").val();
  var discount = $("#dis2").val();

  var formData = {
    id: id,
    title: title,
    sub_title: sub_title,
    price: price,
    sub_cat: sub_cat,
    size: size,
    color: color,
    /*img*/
    description: description,
    type: type,
    occasion: occasion,
    fabric: fabric,
    neck: neck,
    sleeves: sleeves,
    wash_care: wash_care,
    coupon1: coupon1,
    coupon2: coupon2,
    coupon3: coupon3,
    discount: discount,
  };
  $.ajax({
    url: "https://ecommerce-try.herokuapp.com/server/api/user/add.php",
    type: "POST",
    data: JSON.stringify(formData),
    crossDomain: true,
    success: function (response) {
      console.log(response);
    },
    error: function (xhr, status) {
      console.log("error", xhr, status);
      alert("Some unknown error occured");
    },
  });
});

/***************************** */

/* FORM 3*/
$("#submit-btn3").click(function () {
  event.preventDefault();
  var id = $("#id3").val();
  var title = $("#title3").val();
  var sub_title = $("#sub_title3").val();
  var price = $("#price3").val();

  var size;
  if ($("#defaultCheck31").is(":checked")) {
    size = size + "_" + $("#defaultCheck31").val();
  }
  if ($("#defaultCheck32").is(":checked")) {
    size = size + "_" + $("#defaultCheck32").val();
  }
  if ($("#defaultCheck33").is(":checked")) {
    size = size + "_" + $("#defaultCheck33").val();
  }
  if ($("#defaultCheck34").is(":checked")) {
    size = size + "_" + $("#defaultCheck34").val();
  }
  if ($("#defaultCheck35").is(":checked")) {
    size = size + "_" + $("#defaultCheck35").val();
  }
  if ($("#defaultCheck36").is(":checked")) {
    size = size + "_" + $("#defaultCheck36").val();
  }

  var color;
  if ($("#col31").is(":checked")) {
    color = color + "_" + "#col31".val();
  }
  if ($("#col32").is(":checked")) {
    color = color + "_" + "#col32".val();
  }
  if ($("#col33").is(":checked")) {
    color = color + "_" + "#col33".val();
  }
  if ($("#col34").is(":checked")) {
    color = color + "_" + "#col34".val();
  }
  if ($("#col35").is(":checked")) {
    color = color + "_" + "#col35".val();
  }
  if ($("#col36").is(":checked")) {
    color = color + "_" + "#col36".val();
  }
  if ($("#col37").is(":checked")) {
    color = color + "_" + "#col37".val();
  }
  if ($("#col38").is(":checked")) {
    color = color + "_" + "#col38".val();
  }
  if ($("#col39").is(":checked")) {
    color = color + "_" + "#col39".val();
  }
  if ($("#col310").is(":checked")) {
    color = color + "_" + "#col310".val();
  }
  if ($("#col311").is(":checked")) {
    color = color + "_" + $("#col311").val();
  }
  if ($("#col312").is(":checked")) {
    color = color + "_" + $("#col312").val();
  }
  if ($("#col313").is(":checked")) {
    color = color + "_" + $("#col313").val();
  }
  if ($("#col314").is(":checked")) {
    color = color + "_" + $("#col314").val();
  }
  if ($("#col315").is(":checked")) {
    color = color + "_" + $("#col315").val();
  }
  if ($("#col316").is(":checked")) {
    color = color + "_" + $("#col316").val();
  }
  if ($("#col317").is(":checked")) {
    color = color + "_" + $("#col317").val();
  }
  if ($("#col318").is(":checked")) {
    color = color + "_" + $("#col318").val();
  }
  if ($("#col319").is(":checked")) {
    color = color + "_" + $("#col319").val();
  }
  if ($("#col320").is(":checked")) {
    color = color + "_" + $("#col320").val();
  }
  if ($("#col321").is(":checked")) {
    color = color + "_" + $("#col321").val();
  }
  if ($("#col322").is(":checked")) {
    color = color + "_" + $("#col322").val();
  }
  if ($("#col323").is(":checked")) {
    color = color + "_" + $("#col323").val();
  }
  if ($("#col324").is(":checked")) {
    color = color + "_" + $("#col324").val();
  }
  if ($("#col325").is(":checked")) {
    color = color + "_" + $("#col325").val();
  }
  if ($("#col326").is(":checked")) {
    color = color + "_" + $("#col326").val();
  }
  if ($("#col327").is(":checked")) {
    color = color + "_" + $("#col327").val();
  }
  if ($("#col328").is(":checked")) {
    color = color + "_" + $("#col328").val();
  }
  if ($("#col329").is(":checked")) {
    color = color + "_" + $("#col329").val();
  }
  if ($("#col330").is(":checked")) {
    color = color + "_" + $("#col330").val();
  }
  /*image*/

  var description = $("#des3").val();

  $("#type3").change(function () {
    var type = $("#type3").val();
  });

  var fabric = $("#fab3").val();

  $("#length3").change(function () {
    var length = $("#length3").val();
  });

  var wash_care;

  if ($("#w31").is(":checked")) {
    wash_care = wash_care + "_" + $("#w31").val();
  }
  if ($("#w32").is(":checked")) {
    wash_care = wash_care + "_" + $("#w32").val();
  }
  if ($("#w33").is(":checked")) {
    wash_care = wash_care + "_" + $("#w33").val();
  }

  var coupon1 = $("#cp31").val();
  var coupon2 = $("#cp32").val();
  var coupon3 = $("#cp33").val();
  var discount = $("#dis3").val();

  var formData = {
    id: id,
    title: title,
    sub_title: sub_title,
    price: price,
    size: size,
    color: color,
    /*img*/
    description: description,
    type: type,
    fabric: fabric,
    length: length,
    wash_care: wash_care,
    coupon1: coupon1,
    coupon2: coupon2,
    coupon3: coupon3,
    discount: discount,
  };
  $.ajax({
    url: "https://ecommerce-try.herokuapp.com/server/api/user/add.php",
    type: "POST",
    data: JSON.stringify(formData),
    crossDomain: true,
    success: function (response) {
      console.log(response);
    },
    error: function (xhr, status) {
      console.log("error", xhr, status);
      alert("Some unknown error occured");
    },
  });
});

/***************************** */

/* FORM 4*/
$("#submit-btn4").click(function () {
  event.preventDefault();
  var id = $("#id4").val();
  var title = $("#title4").val();
  var sub_title = $("#sub_title4").val();
  var price = $("#price4").val();

  var size;
  if ($("#defaultCheck41").is(":checked")) {
    size = size + "_" + $("#defaultCheck41").val();
  }
  if ($("#defaultCheck42").is(":checked")) {
    size = size + "_" + $("#defaultCheck42").val();
  }
  if ($("#defaultCheck43").is(":checked")) {
    size = size + "_" + $("#defaultCheck43").val();
  }
  if ($("#defaultCheck44").is(":checked")) {
    size = size + "_" + $("#defaultCheck44").val();
  }
  if ($("#defaultCheck45").is(":checked")) {
    size = size + "_" + $("#defaultCheck45").val();
  }
  if ($("#defaultCheck46").is(":checked")) {
    size = size + "_" + $("#defaultCheck46").val();
  }

  var color;
  if ($("#col41").is(":checked")) {
    color = color + "_" + "#col41".val();
  }
  if ($("#col42").is(":checked")) {
    color = color + "_" + "#col42".val();
  }
  if ($("#col43").is(":checked")) {
    color = color + "_" + "#col43".val();
  }
  if ($("#col44").is(":checked")) {
    color = color + "_" + "#col44".val();
  }
  if ($("#col45").is(":checked")) {
    color = color + "_" + "#col45".val();
  }
  if ($("#col46").is(":checked")) {
    color = color + "_" + "#col46".val();
  }
  if ($("#col47").is(":checked")) {
    color = color + "_" + "#col47".val();
  }
  if ($("#col48").is(":checked")) {
    color = color + "_" + "#col48".val();
  }
  if ($("#col49").is(":checked")) {
    color = color + "_" + "#col49".val();
  }
  if ($("#col410").is(":checked")) {
    color = color + "_" + "#col410".val();
  }
  if ($("#col411").is(":checked")) {
    color = color + "_" + $("#col411").val();
  }
  if ($("#col412").is(":checked")) {
    color = color + "_" + $("#col412").val();
  }
  if ($("#col413").is(":checked")) {
    color = color + "_" + $("#col413").val();
  }
  if ($("#col414").is(":checked")) {
    color = color + "_" + $("#col414").val();
  }
  if ($("#col415").is(":checked")) {
    color = color + "_" + $("#col415").val();
  }
  if ($("#col416").is(":checked")) {
    color = color + "_" + $("#col416").val();
  }
  if ($("#col417").is(":checked")) {
    color = color + "_" + $("#col417").val();
  }
  if ($("#col418").is(":checked")) {
    color = color + "_" + $("#col418").val();
  }
  if ($("#col419").is(":checked")) {
    color = color + "_" + $("#col419").val();
  }
  if ($("#col420").is(":checked")) {
    color = color + "_" + $("#col420").val();
  }
  if ($("#col421").is(":checked")) {
    color = color + "_" + $("#col421").val();
  }
  if ($("#col422").is(":checked")) {
    color = color + "_" + $("#col422").val();
  }
  if ($("#col423").is(":checked")) {
    color = color + "_" + $("#col423").val();
  }
  if ($("#col424").is(":checked")) {
    color = color + "_" + $("#col424").val();
  }
  if ($("#col425").is(":checked")) {
    color = color + "_" + $("#col425").val();
  }
  if ($("#col426").is(":checked")) {
    color = color + "_" + $("#col426").val();
  }
  if ($("#col427").is(":checked")) {
    color = color + "_" + $("#col427").val();
  }
  if ($("#col428").is(":checked")) {
    color = color + "_" + $("#col428").val();
  }
  if ($("#col429").is(":checked")) {
    color = color + "_" + $("#col429").val();
  }
  if ($("#col430").is(":checked")) {
    color = color + "_" + $("#col430").val();
  }

  /*image*/

  var kurta_fabric = $("#kf4").val();
  var bottom_fabric = $("#bf4").val();
  var dupatta_fabric = $("#df4").val();

  $("#kfl4").change(function () {
    var kurta_fabric_length = $("#kfl4").val();
  });
  $("#bfl4").change(function () {
    var bottom_fabric_length = $("#bfl4").val();
  });
  $("#dl4").change(function () {
    var dupatta_fabric_length = $("#dl4").val();
  });
  $("#type4").change(function () {
    var type = $("#type4").val();
  });

  var occasion;
  if ($("#o41").is(":checked")) {
    occasion = occasion + "_" + $("#o41").val();
  }
  if ($("#o42").is(":checked")) {
    occasion = occasion + "_" + $("#o42").val();
  }
  if ($("#o43").is(":checked")) {
    occasion = occasion + "_" + $("#o43").val();
  }
  if ($("#o44").is(":checked")) {
    occasion = occasion + "_" + $("#o44").val();
  }
  if ($("#o45").is(":checked")) {
    occasion = occasion + "_" + $("#o45").val();
  }
  if ($("#o46").is(":checked")) {
    occasion = occasion + "_" + $("#o46").val();
  }
  if ($("#o47").is(":checked")) {
    occasion = occasion + "_" + $("#o47").val();
  }

  $("#stitch").change(function () {
    var stitch = $("#stitch").val();
  });

  var wash_care;

  if ($("#w41").is(":checked")) {
    wash_care = wash_care + "_" + $("#w41").val();
  }
  if ($("#w42").is(":checked")) {
    wash_care = wash_care + "_" + $("#w42").val();
  }
  if ($("#w43").is(":checked")) {
    wash_care = wash_care + "_" + $("#w43").val();
  }

  var coupon1 = $("#cp41").val();
  var coupon2 = $("#cp42").val();
  var coupon3 = $("#cp43").val();
  var discount = $("#dis4").val();

  var formData = {
    id: id,
    title: title,
    sub_title: sub_title,
    price: price,
    size: size,
    color: color,
    /*img*/
    kurta_fabric: kurta_fabric,
    bottom_fabric: bottom_fabric,
    dupatta_fabric: dupatta_fabric,
    kurta_fabric_length: kurta_fabric_length,
    bottom_fabric_length: bottom_fabric_length,
    dupatta_fabric_length: dupatta_fabric_length,
    type: type,
    occasion: occasion,
    stitch: stitch,
    wash_care: wash_care,
    coupon1: coupon1,
    coupon2: coupon2,
    coupon3: coupon3,
    discount: discount,
  };
  $.ajax({
    url: "https://ecommerce-try.herokuapp.com/server/api/user/add.php",
    type: "POST",
    data: JSON.stringify(formData),
    crossDomain: true,
    success: function (response) {
      console.log(response);
    },
    error: function (xhr, status) {
      console.log("error", xhr, status);
      alert("Some unknown error occured");
    },
  });
});

/***************************** */

/* FORM 5*/
$("#submit-btn5").click(function () {
  event.preventDefault();
  var id = $("#id5").val();
  var title = $("#title5").val();
  var sub_title = $("#sub_title5").val();
  var price = $("#price5").val();

  $("#sub-cat5").change(function () {
    var sub_cat = $("#sub-cat5").val();
  });

  var size;
  if ($("#defaultCheck51").is(":checked")) {
    size = size + "_" + $("#defaultCheck51").val();
  }
  if ($("#defaultCheck52").is(":checked")) {
    size = size + "_" + $("#defaultCheck52").val();
  }
  if ($("#defaultCheck53").is(":checked")) {
    size = size + "_" + $("#defaultCheck53").val();
  }
  if ($("#defaultCheck54").is(":checked")) {
    size = size + "_" + $("#defaultCheck54").val();
  }
  if ($("#defaultCheck55").is(":checked")) {
    size = size + "_" + $("#defaultCheck55").val();
  }
  if ($("#defaultCheck56").is(":checked")) {
    size = size + "_" + $("#defaultCheck56").val();
  }

  var color;
  if ($("#col51").is(":checked")) {
    color = color + "_" + "#col51".val();
  }
  if ($("#col52").is(":checked")) {
    color = color + "_" + "#col52".val();
  }
  if ($("#col53").is(":checked")) {
    color = color + "_" + "#col53".val();
  }
  if ($("#col54").is(":checked")) {
    color = color + "_" + "#col54".val();
  }
  if ($("#col55").is(":checked")) {
    color = color + "_" + "#col55".val();
  }
  if ($("#col56").is(":checked")) {
    color = color + "_" + "#col56".val();
  }
  if ($("#col57").is(":checked")) {
    color = color + "_" + "#col57".val();
  }
  if ($("#col58").is(":checked")) {
    color = color + "_" + "#col58".val();
  }
  if ($("#col59").is(":checked")) {
    color = color + "_" + "#col59".val();
  }
  if ($("#col510").is(":checked")) {
    color = color + "_" + "#col510".val();
  }
  if ($("#col511").is(":checked")) {
    color = color + "_" + $("#col511").val();
  }
  if ($("#col512").is(":checked")) {
    color = color + "_" + $("#col512").val();
  }
  if ($("#col513").is(":checked")) {
    color = color + "_" + $("#col513").val();
  }
  if ($("#col514").is(":checked")) {
    color = color + "_" + $("#col514").val();
  }
  if ($("#col515").is(":checked")) {
    color = color + "_" + $("#col515").val();
  }
  if ($("#col516").is(":checked")) {
    color = color + "_" + $("#col516").val();
  }
  if ($("#col517").is(":checked")) {
    color = color + "_" + $("#col517").val();
  }
  if ($("#col518").is(":checked")) {
    color = color + "_" + $("#col518").val();
  }
  if ($("#col519").is(":checked")) {
    color = color + "_" + $("#col519").val();
  }
  if ($("#col520").is(":checked")) {
    color = color + "_" + $("#col520").val();
  }
  if ($("#col521").is(":checked")) {
    color = color + "_" + $("#col521").val();
  }
  if ($("#col522").is(":checked")) {
    color = color + "_" + $("#col522").val();
  }
  if ($("#col523").is(":checked")) {
    color = color + "_" + $("#col523").val();
  }
  if ($("#col524").is(":checked")) {
    color = color + "_" + $("#col524").val();
  }
  if ($("#col525").is(":checked")) {
    color = color + "_" + $("#col525").val();
  }
  if ($("#col526").is(":checked")) {
    color = color + "_" + $("#col526").val();
  }
  if ($("#col527").is(":checked")) {
    color = color + "_" + $("#col527").val();
  }
  if ($("#col528").is(":checked")) {
    color = color + "_" + $("#col528").val();
  }
  if ($("#col529").is(":checked")) {
    color = color + "_" + $("#col529").val();
  }
  if ($("#col530").is(":checked")) {
    color = color + "_" + $("#col530").val();
  }
  /*image*/

  var description = $("#des5").val();

  $("#type5").change(function () {
    var type = $("#type5").val();
  });

  var occasion;
  if ($("#o51").is(":checked")) {
    occasion = occasion + "_" + $("#o51").val();
  }
  if ($("#o52").is(":checked")) {
    occasion = occasion + "_" + $("#o52").val();
  }
  if ($("#o53").is(":checked")) {
    occasion = occasion + "_" + $("#o53").val();
  }
  if ($("#o54").is(":checked")) {
    occasion = occasion + "_" + $("#o54").val();
  }
  if ($("#o55").is(":checked")) {
    occasion = occasion + "_" + $("#o55").val();
  }
  if ($("#o56").is(":checked")) {
    occasion = occasion + "_" + $("#o56").val();
  }
  if ($("#o57").is(":checked")) {
    occasion = occasion + "_" + $("#o57").val();
  }

  var blouse_fabric = $("#bfab5").val();

  $("#blouse5").change(function () {
    var blouse = $("#blouse5").val();
  });

  var saree_fabric = $("#sfab5").val();

  var wash_care;

  if ($("#w51").is(":checked")) {
    wash_care = wash_care + "_" + $("#w51").val();
  }
  if ($("#w52").is(":checked")) {
    wash_care = wash_care + "_" + $("#w52").val();
  }
  if ($("#w53").is(":checked")) {
    wash_care = wash_care + "_" + $("#w53").val();
  }

  $("#length5").change(function () {
    var length = $("#length5").val();
  });

  $("#width5").change(function () {
    var width = $("#width5").val();
  });
  var coupon1 = $("#cp51").val();
  var coupon2 = $("#cp52").val();
  var coupon3 = $("#cp53").val();
  var discount = $("#dis5").val();

  var formData = {
    id: id,
    title: title,
    sub_title: sub_title,
    price: price,
    sub_cat: sub_cat,
    size: size,
    color: color,
    /*img*/
    description: description,
    type: type,
    occasion: occasion,
    blouse_fabric: blouse_fabric,
    blouse: blouse,
    saree_fabric: saree_fabric,
    wash_care: wash_care,
    length: length,
    width: width,
    coupon1: coupon1,
    coupon2: coupon2,
    coupon3: coupon3,
    discount: discount,
  };
  $.ajax({
    url: "https://ecommerce-try.herokuapp.com/server/api/user/add.php",
    type: "POST",
    data: JSON.stringify(formData),
    crossDomain: true,
    success: function (response) {
      console.log(response);
    },
    error: function (xhr, status) {
      console.log("error", xhr, status);
      alert("Some unknown error occured");
    },
  });
});

/************************************************************* */

/* FORM 6*/
$("#submit-btn1").click(function () {
  event.preventDefault();
  var id = $("#id6").val();
  var title = $("#title6").val();
  var sub_title = $("#sub_title6").val();
  var price = $("#price6").val();
  var brand = $("#brand").val();
  $("#sub-cat6").change(function () {
    var sub_cat = $("#sub-cat6").val();
  });
  var size;
  if ($("#defaultCheck61").is(":checked")) {
    size = size + "_" + $("#defaultCheck61").val();
  }
  if ($("#defaultCheck62").is(":checked")) {
    size = size + "_" + $("#defaultCheck62").val();
  }
  if ($("#defaultCheck63").is(":checked")) {
    size = size + "_" + $("#defaultCheck63").val();
  }
  if ($("#defaultCheck64").is(":checked")) {
    size = size + "_" + $("#defaultCheck64").val();
  }
  if ($("#defaultCheck65").is(":checked")) {
    size = size + "_" + $("#defaultCheck65").val();
  }
  if ($("#defaultCheck66").is(":checked")) {
    size = size + "_" + $("#defaultCheck66").val();
  }

  var color;
  if ($("#col61").is(":checked")) {
    color = color + "_" + $("#col61").val();
  }
  if ($("#col62").is(":checked")) {
    color = color + "_" + $("#col62").val();
  }
  if ($("#col63").is(":checked")) {
    color = color + "_" + $("#col63").val();
  }
  if ($("#col64").is(":checked")) {
    color = color + "_" + $("#col64").val();
  }
  if ($("#col65").is(":checked")) {
    color = color + "_" + $("#col65").val();
  }
  if ($("#col66").is(":checked")) {
    color = color + "_" + $("#col66").val();
  }
  if ($("#col67").is(":checked")) {
    color = color + "_" + $("#col67").val();
  }
  if ($("#col68").is(":checked")) {
    color = color + "_" + $("#col68").val();
  }
  if ($("#col69").is(":checked")) {
    color = color + "_" + $("#col69").val();
  }
  if ($("#col610").is(":checked")) {
    color = color + "_" + $("#col610").val();
  }
  if ($("#col611").is(":checked")) {
    color = color + "_" + $("#col611").val();
  }
  if ($("#col612").is(":checked")) {
    color = color + "_" + $("#col612").val();
  }
  if ($("#col613").is(":checked")) {
    color = color + "_" + $("#col613").val();
  }
  if ($("#col614").is(":checked")) {
    color = color + "_" + $("#col614").val();
  }
  if ($("#col615").is(":checked")) {
    color = color + "_" + $("#col615").val();
  }
  if ($("#col616").is(":checked")) {
    color = color + "_" + $("#col616").val();
  }
  if ($("#col617").is(":checked")) {
    color = color + "_" + $("#col617").val();
  }
  if ($("#col618").is(":checked")) {
    color = color + "_" + $("#col618").val();
  }
  if ($("#col619").is(":checked")) {
    color = color + "_" + $("#col619").val();
  }
  if ($("#col620").is(":checked")) {
    color = color + "_" + $("#col620").val();
  }
  if ($("#col621").is(":checked")) {
    color = color + "_" + $("#col621").val();
  }
  if ($("#col622").is(":checked")) {
    color = color + "_" + $("#col622").val();
  }
  if ($("#col623").is(":checked")) {
    color = color + "_" + $("#col623").val();
  }
  if ($("#col624").is(":checked")) {
    color = color + "_" + $("#col624").val();
  }
  if ($("#col625").is(":checked")) {
    color = color + "_" + $("#col625").val();
  }
  if ($("#col626").is(":checked")) {
    color = color + "_" + $("#col626").val();
  }
  if ($("#col627").is(":checked")) {
    color = color + "_" + $("#col627").val();
  }
  if ($("#col628").is(":checked")) {
    color = color + "_" + $("#col628").val();
  }
  if ($("#col629").is(":checked")) {
    color = color + "_" + $("#col629").val();
  }
  if ($("#col630").is(":checked")) {
    color = color + "_" + $("#col630").val();
  }
  /*image*/

  var description = $("#des6").val();

  $("#type6").change(function () {
    var type = $("#type6").val();
  });

  var occasion;
  if ($("#o61").is(":checked")) {
    occasion = occasion + "_" + $("#o61").val();
  }
  if ($("#o62").is(":checked")) {
    occasion = occasion + "_" + $("#o62").val();
  }
  if ($("#o63").is(":checked")) {
    occasion = occasion + "_" + $("#o63").val();
  }
  if ($("#o64").is(":checked")) {
    occasion = occasion + "_" + $("#o64").val();
  }
  if ($("#o65").is(":checked")) {
    occasion = occasion + "_" + $("#o65").val();
  }
  if ($("#o66").is(":checked")) {
    occasion = occasion + "_" + $("#o66").val();
  }
  if ($("#o67").is(":checked")) {
    occasion = occasion + "_" + $("#o67").val();
  }

  var fabric = $("#fab6").val();
  var material = $("#mat6").val();

  var wash_care;

  if ($("#w61").is(":checked")) {
    wash_care = wash_care + "_" + $("#w61").val();
  }
  if ($("#w62").is(":checked")) {
    wash_care = wash_care + "_" + $("#w62").val();
  }
  if ($("#w63").is(":checked")) {
    wash_care = wash_care + "_" + $("#w63").val();
  }

  var coupon1 = $("#cp61").val();
  var coupon2 = $("#cp62").val();
  var coupon3 = $("#cp63").val();
  var discount = $("#dis6").val();

  var formData = {
    id: id,
    title: title,
    sub_title: sub_title,
    price: price,
    brand: brand,
    sub_cat: sub_cat,
    size: size,
    color: color,
    /*img*/
    description: description,
    type: type,
    occasion: occasion,
    fabric: fabric,
    material: material,
    wash_care: wash_care,
    coupon1: coupon1,
    coupon2: coupon2,
    coupon3: coupon3,
    discount: discount,
  };
  $.ajax({
    url: "https://ecommerce-try.herokuapp.com/server/api/user/add.php",
    type: "POST",
    data: JSON.stringify(formData),
    crossDomain: true,
    success: function (response) {
      console.log(response);
    },
    error: function (xhr, status) {
      console.log("error", xhr, status);
      alert("Some unknown error occured");
    },
  });
});

/***************************** */

/* FORM 7*/
$("#submit-btn7").click(function () {
  event.preventDefault();
  var id = $("#id7").val();
  var title = $("#title7").val();
  var sub_title = $("#sub_title7").val();
  var price = $("#price7").val();
  $("#sub-cat7").change(function () {
    var sub_cat = $("#sub-cat7").val();
  });
  var size;
  if ($("#defaultCheck71").is(":checked")) {
    size = size + "_" + $("#defaultCheck71").val();
  }
  if ($("#defaultCheck72").is(":checked")) {
    size = size + "_" + $("#defaultCheck72").val();
  }
  if ($("#defaultCheck73").is(":checked")) {
    size = size + "_" + $("#defaultCheck73").val();
  }
  if ($("#defaultCheck74").is(":checked")) {
    size = size + "_" + $("#defaultCheck74").val();
  }
  if ($("#defaultCheck75").is(":checked")) {
    size = size + "_" + $("#defaultCheck75").val();
  }
  if ($("#defaultCheck76").is(":checked")) {
    size = size + "_" + $("#defaultCheck76").val();
  }

  var color;
  if ($("#col71").is(":checked")) {
    color = color + "_" + "#col71".val();
  }
  if ($("#col72").is(":checked")) {
    color = color + "_" + "#col72".val();
  }
  if ($("#col73").is(":checked")) {
    color = color + "_" + "#col73".val();
  }
  if ($("#col74").is(":checked")) {
    color = color + "_" + "#col74".val();
  }
  if ($("#col75").is(":checked")) {
    color = color + "_" + "#col75".val();
  }
  if ($("#col76").is(":checked")) {
    color = color + "_" + "#col76".val();
  }
  if ($("#col77").is(":checked")) {
    color = color + "_" + "#col77".val();
  }
  if ($("#col78").is(":checked")) {
    color = color + "_" + "#col78".val();
  }
  if ($("#col79").is(":checked")) {
    color = color + "_" + "#col79".val();
  }
  if ($("#col710").is(":checked")) {
    color = color + "_" + "#col710".val();
  }
  if ($("#col711").is(":checked")) {
    color = color + "_" + $("#col711").val();
  }
  if ($("#col712").is(":checked")) {
    color = color + "_" + $("#col712").val();
  }
  if ($("#col713").is(":checked")) {
    color = color + "_" + $("#col713").val();
  }
  if ($("#col714").is(":checked")) {
    color = color + "_" + $("#col714").val();
  }
  if ($("#col715").is(":checked")) {
    color = color + "_" + $("#col715").val();
  }
  if ($("#col716").is(":checked")) {
    color = color + "_" + $("#col716").val();
  }
  if ($("#col717").is(":checked")) {
    color = color + "_" + $("#col717").val();
  }
  if ($("#col718").is(":checked")) {
    color = color + "_" + $("#col718").val();
  }
  if ($("#col719").is(":checked")) {
    color = color + "_" + $("#col719").val();
  }
  if ($("#col720").is(":checked")) {
    color = color + "_" + $("#col720").val();
  }
  if ($("#col721").is(":checked")) {
    color = color + "_" + $("#col721").val();
  }
  if ($("#col722").is(":checked")) {
    color = color + "_" + $("#col722").val();
  }
  if ($("#col723").is(":checked")) {
    color = color + "_" + $("#col723").val();
  }
  if ($("#col724").is(":checked")) {
    color = color + "_" + $("#col724").val();
  }
  if ($("#col725").is(":checked")) {
    color = color + "_" + $("#col725").val();
  }
  if ($("#col726").is(":checked")) {
    color = color + "_" + $("#col726").val();
  }
  if ($("#col727").is(":checked")) {
    color = color + "_" + $("#col727").val();
  }
  if ($("#col728").is(":checked")) {
    color = color + "_" + $("#col728").val();
  }
  if ($("#col729").is(":checked")) {
    color = color + "_" + $("#col729").val();
  }
  if ($("#col730").is(":checked")) {
    color = color + "_" + $("#col730").val();
  }

  /*image*/
  var description = $("#des7").val();

  $("#type7").change(function () {
    var type = $("#type7").val();
  });

  var occasion;
  if ($("#o71").is(":checked")) {
    occasion = occasion + "_" + $("#o71").val();
  }
  if ($("#o72").is(":checked")) {
    occasion = occasion + "_" + $("#o72").val();
  }
  if ($("#o73").is(":checked")) {
    occasion = occasion + "_" + $("#o73").val();
  }
  if ($("#o74").is(":checked")) {
    occasion = occasion + "_" + $("#o74").val();
  }
  if ($("#o75").is(":checked")) {
    occasion = occasion + "_" + $("#o75").val();
  }
  if ($("#o76").is(":checked")) {
    occasion = occasion + "_" + $("#o76").val();
  }
  if ($("#o77").is(":checked")) {
    occasion = occasion + "_" + $("#o77").val();
  }

  $("#length7").change(function () {
    var length = $("#length7").val();
  });
  $("#pattern7").change(function () {
    var pattern = $("#pattern7").val();
  });

  var material = $("#mat7").val();

  var wash_care;

  if ($("#w71").is(":checked")) {
    wash_care = wash_care + "_" + $("#w71").val();
  }
  if ($("#w72").is(":checked")) {
    wash_care = wash_care + "_" + $("#w72").val();
  }
  if ($("#w73").is(":checked")) {
    wash_care = wash_care + "_" + $("#w73").val();
  }

  var coupon1 = $("#cp71").val();
  var coupon2 = $("#cp72").val();
  var coupon3 = $("#cp73").val();
  var discount = $("#dis7").val();

  var formData = {
    id: id,
    title: title,
    sub_title: sub_title,
    price: price,
    size: size,
    color: color,
    /*img*/
    description: description,
    type: type,
    length: length,
    pattern: pattern,
    material: material,
    wash_care: wash_care,
    coupon1: coupon1,
    coupon2: coupon2,
    coupon3: coupon3,
    discount: discount,
  };
  $.ajax({
    url: "https://ecommerce-try.herokuapp.com/server/api/user/add.php",
    type: "POST",
    data: JSON.stringify(formData),
    crossDomain: true,
    success: function (response) {
      console.log(response);
    },
    error: function (xhr, status) {
      console.log("error", xhr, status);
      alert("Some unknown error occured");
    },
  });
});

/***************************** */

/* FORM 8*/
$("#submit-btn8").click(function () {
  event.preventDefault();
  var id = $("#id8").val();
  var title = $("#title8").val();
  var sub_title = $("#sub_title8").val();
  var price = $("#price8").val();
  $("#sub-cat8").change(function () {
    var sub_cat = $("#sub-cat8").val();
  });
  var size;
  if ($("#defaultCheck81").is(":checked")) {
    size = size + "_" + $("#defaultCheck81").val();
  }
  if ($("#defaultCheck82").is(":checked")) {
    size = size + "_" + $("#defaultCheck82").val();
  }
  if ($("#defaultCheck83").is(":checked")) {
    size = size + "_" + $("#defaultCheck83").val();
  }
  if ($("#defaultCheck84").is(":checked")) {
    size = size + "_" + $("#defaultCheck84").val();
  }
  if ($("#defaultCheck85").is(":checked")) {
    size = size + "_" + $("#defaultCheck85").val();
  }
  if ($("#defaultCheck86").is(":checked")) {
    size = size + "_" + $("#defaultCheck86").val();
  }

  var color;
  if ($("#col81").is(":checked")) {
    color = color + "_" + "#col81".val();
  }
  if ($("#col82").is(":checked")) {
    color = color + "_" + "#col82".val();
  }
  if ($("#col83").is(":checked")) {
    color = color + "_" + "#col83".val();
  }
  if ($("#col84").is(":checked")) {
    color = color + "_" + "#col84".val();
  }
  if ($("#col85").is(":checked")) {
    color = color + "_" + "#col85".val();
  }
  if ($("#col86").is(":checked")) {
    color = color + "_" + "#col86".val();
  }
  if ($("#col87").is(":checked")) {
    color = color + "_" + "#col87".val();
  }
  if ($("#col88").is(":checked")) {
    color = color + "_" + "#col88".val();
  }
  if ($("#col89").is(":checked")) {
    color = color + "_" + "#col89".val();
  }
  if ($("#col810").is(":checked")) {
    color = color + "_" + "#col810".val();
  }
  if ($("#col811").is(":checked")) {
    color = color + "_" + $("#col811").val();
  }
  if ($("#col812").is(":checked")) {
    color = color + "_" + $("#col812").val();
  }
  if ($("#col813").is(":checked")) {
    color = color + "_" + $("#col813").val();
  }
  if ($("#col814").is(":checked")) {
    color = color + "_" + $("#col814").val();
  }
  if ($("#col815").is(":checked")) {
    color = color + "_" + $("#col815").val();
  }
  if ($("#col816").is(":checked")) {
    color = color + "_" + $("#col816").val();
  }
  if ($("#col817").is(":checked")) {
    color = color + "_" + $("#col817").val();
  }
  if ($("#col818").is(":checked")) {
    color = color + "_" + $("#col818").val();
  }
  if ($("#col819").is(":checked")) {
    color = color + "_" + $("#col819").val();
  }
  if ($("#col820").is(":checked")) {
    color = color + "_" + $("#col820").val();
  }
  if ($("#col821").is(":checked")) {
    color = color + "_" + $("#col821").val();
  }
  if ($("#col822").is(":checked")) {
    color = color + "_" + $("#col822").val();
  }
  if ($("#col823").is(":checked")) {
    color = color + "_" + $("#col823").val();
  }
  if ($("#col824").is(":checked")) {
    color = color + "_" + $("#col824").val();
  }
  if ($("#col825").is(":checked")) {
    color = color + "_" + $("#col825").val();
  }
  if ($("#col826").is(":checked")) {
    color = color + "_" + $("#col826").val();
  }
  if ($("#col827").is(":checked")) {
    color = color + "_" + $("#col827").val();
  }
  if ($("#col828").is(":checked")) {
    color = color + "_" + $("#col828").val();
  }
  if ($("#col829").is(":checked")) {
    color = color + "_" + $("#col829").val();
  }
  if ($("#col830").is(":checked")) {
    color = color + "_" + $("#col830").val();
  }

  /*image*/
  var description = $("#des8").val();

  $("#kfl8").change(function () {
    var kurta_fabric_length = $("#kfl8").val();
  });
  $("#bfl8").change(function () {
    var bottom_fabric_length = $("#bfl8").val();
  });
  $("#dl8").change(function () {
    var dupatta_fabric_length = $("#dl8").val();
  });
  $("#type8").change(function () {
    var type = $("#type8").val();
  });

  var occasion;
  if ($("#o81").is(":checked")) {
    occasion = occasion + "_" + $("#o81").val();
  }
  if ($("#o82").is(":checked")) {
    occasion = occasion + "_" + $("#o82").val();
  }
  if ($("#o83").is(":checked")) {
    occasion = occasion + "_" + $("#o83").val();
  }
  if ($("#o84").is(":checked")) {
    occasion = occasion + "_" + $("#o84").val();
  }
  if ($("#o85").is(":checked")) {
    occasion = occasion + "_" + $("#o85").val();
  }
  if ($("#o86").is(":checked")) {
    occasion = occasion + "_" + $("#o86").val();
  }
  if ($("#o87").is(":checked")) {
    occasion = occasion + "_" + $("#o87").val();
  }

  var fabric = $("#fab8").val();

  $("#kl8").change(function () {
    var kurti_length = $("#kl8").val();
  });
  $("#sl8").change(function () {
    var sleeves_length = $("#sl8").val();
  });
  $("#ss8").change(function () {
    var sleeves_styling = $("#ss8").val();
  });
  $("#neck8").change(function () {
    var neck = $("#neck8").val();
  });
  $("#orna8").change(function () {
    var ornamentation = $("#orna8").val();
  });
  var material = $("#mat8").val();

  var wash_care;

  if ($("#w81").is(":checked")) {
    wash_care = wash_care + "_" + $("#w81").val();
  }
  if ($("#w82").is(":checked")) {
    wash_care = wash_care + "_" + $("#w82").val();
  }
  if ($("#w83").is(":checked")) {
    wash_care = wash_care + "_" + $("#w83").val();
  }
  var fabric2 = $("#fab82").val();

  var color2;
  if ($("#col881").is(":checked")) {
    color2 = color2 + "_" + "#col881".val();
  }
  if ($("#col882").is(":checked")) {
    color2 = color2 + "_" + "#col882".val();
  }
  if ($("#col883").is(":checked")) {
    color2 = color2 + "_" + "#col883".val();
  }
  if ($("#col884").is(":checked")) {
    color2 = color2 + "_" + "#col884".val();
  }
  if ($("#col885").is(":checked")) {
    color2 = color2 + "_" + "#col885".val();
  }
  if ($("#col886").is(":checked")) {
    color2 = color2 + "_" + "#col886".val();
  }
  if ($("#col887").is(":checked")) {
    color2 = color2 + "_" + "#col887".val();
  }
  if ($("#col888").is(":checked")) {
    color2 = color2 + "_" + "#col888".val();
  }
  if ($("#col889").is(":checked")) {
    color2 = color2 + "_" + "#col889".val();
  }
  if ($("#col8810").is(":checked")) {
    color2 = color2 + "_" + "#col8810".val();
  }
  if ($("#col8811").is(":checked")) {
    color2 = color2 + "_" + $("#col8811").val();
  }
  if ($("#col8812").is(":checked")) {
    color2 = color2 + "_" + $("#col8812").val();
  }
  if ($("#col8813").is(":checked")) {
    color2 = color2 + "_" + $("#col8813").val();
  }
  if ($("#col8814").is(":checked")) {
    color2 = color2 + "_" + $("#col8814").val();
  }
  if ($("#col8815").is(":checked")) {
    color2 = color2 + "_" + $("#col8815").val();
  }
  if ($("#col8816").is(":checked")) {
    color2 = color2 + "_" + $("#col8816").val();
  }
  if ($("#col8817").is(":checked")) {
    color2 = color2 + "_" + $("#col8817").val();
  }
  if ($("#col8818").is(":checked")) {
    color2 = color2 + "_" + $("#col8818").val();
  }
  if ($("#col8819").is(":checked")) {
    color2 = color2 + "_" + $("#col8819").val();
  }
  if ($("#col8820").is(":checked")) {
    color2 = color2 + "_" + $("#col8820").val();
  }
  if ($("#col8821").is(":checked")) {
    color2 = color2 + "_" + $("#col8821").val();
  }
  if ($("#col8822").is(":checked")) {
    color2 = color2 + "_" + $("#col8822").val();
  }
  if ($("#col8823").is(":checked")) {
    color2 = color2 + "_" + $("#col8823").val();
  }
  if ($("#col8824").is(":checked")) {
    color2 = color2 + "_" + $("#col8824").val();
  }
  if ($("#col8825").is(":checked")) {
    color2 = color2 + "_" + $("#col8825").val();
  }
  if ($("#col8826").is(":checked")) {
    color2 = color2 + "_" + $("#col8826").val();
  }
  if ($("#col8827").is(":checked")) {
    color2 = color2 + "_" + $("#col8827").val();
  }
  if ($("#col8828").is(":checked")) {
    color2 = color2 + "_" + $("#col8828").val();
  }
  if ($("#col8829").is(":checked")) {
    color2 = color2 + "_" + $("#col8829").val();
  }
  if ($("#col8830").is(":checked")) {
    color2 = color2 + "_" + $("#col8830").val();
  }

  var coupon1 = $("#cp81").val();
  var coupon2 = $("#cp82").val();
  var coupon3 = $("#cp83").val();
  var discount = $("#dis8").val();

  var formData = {
    id: id,
    title: title,
    sub_title: sub_title,
    price: price,
    size: size,
    color: color,
    /*img*/
    description: description,
    kurta_fabric_length: kurta_fabric_length,
    bottom_fabric_length: bottom_fabric_length,
    dupatta_fabric_length: dupatta_fabric_length,
    type: type,
    occasion: occasion,
    fabric: fabric,
    kurti_length: kurti_length,
    sleeves_length: sleeves_length,
    sleeves_styling: sleeves_styling,
    neck: neck,
    ornamentation: ornamentation,
    material: material,
    wash_care: wash_care,
    fabric2: fabric2,
    color2: color2,
    coupon1: coupon1,
    coupon2: coupon2,
    coupon3: coupon3,
    discount: discount,
  };
  $.ajax({
    url: "https://ecommerce-try.herokuapp.com/server/api/user/add.php",
    type: "POST",
    data: JSON.stringify(formData),
    crossDomain: true,
    success: function (response) {
      console.log(response);
    },
    error: function (xhr, status) {
      console.log("error", xhr, status);
      alert("Some unknown error occured");
    },
  });
});

/***************************** */

/* FORM 9*/
$("#submit-btn9").click(function () {
  event.preventDefault();
  var id = $("#id9").val();
  var title = $("#title9").val();
  var sub_title = $("#sub_title9").val();
  var price = $("#price9").val();
  $("#sub-cat9").change(function () {
    var sub_cat = $("#sub-cat9").val();
  });
  var size;
  if ($("#defaultCheck91").is(":checked")) {
    size = size + "_" + $("#defaultCheck91").val();
  }
  if ($("#defaultCheck92").is(":checked")) {
    size = size + "_" + $("#defaultCheck92").val();
  }
  if ($("#defaultCheck93").is(":checked")) {
    size = size + "_" + $("#defaultCheck93").val();
  }
  if ($("#defaultCheck94").is(":checked")) {
    size = size + "_" + $("#defaultCheck94").val();
  }
  if ($("#defaultCheck95").is(":checked")) {
    size = size + "_" + $("#defaultCheck95").val();
  }
  if ($("#defaultCheck96").is(":checked")) {
    size = size + "_" + $("#defaultCheck96").val();
  }

  var color;
  if ($("#col91").is(":checked")) {
    color = color + "_" + "#col91".val();
  }
  if ($("#col92").is(":checked")) {
    color = color + "_" + "#col92".val();
  }
  if ($("#col93").is(":checked")) {
    color = color + "_" + "#col93".val();
  }
  if ($("#col94").is(":checked")) {
    color = color + "_" + "#col94".val();
  }
  if ($("#col95").is(":checked")) {
    color = color + "_" + "#col95".val();
  }
  if ($("#col96").is(":checked")) {
    color = color + "_" + "#col96".val();
  }
  if ($("#col97").is(":checked")) {
    color = color + "_" + "#col97".val();
  }
  if ($("#col98").is(":checked")) {
    color = color + "_" + "#col98".val();
  }
  if ($("#col99").is(":checked")) {
    color = color + "_" + "#col99".val();
  }
  if ($("#col910").is(":checked")) {
    color = color + "_" + "#col910".val();
  }
  if ($("#col911").is(":checked")) {
    color = color + "_" + $("#col911").val();
  }
  if ($("#col912").is(":checked")) {
    color = color + "_" + $("#col912").val();
  }
  if ($("#col913").is(":checked")) {
    color = color + "_" + $("#col913").val();
  }
  if ($("#col914").is(":checked")) {
    color = color + "_" + $("#col914").val();
  }
  if ($("#col915").is(":checked")) {
    color = color + "_" + $("#col915").val();
  }
  if ($("#col916").is(":checked")) {
    color = color + "_" + $("#col916").val();
  }
  if ($("#col917").is(":checked")) {
    color = color + "_" + $("#col917").val();
  }
  if ($("#col918").is(":checked")) {
    color = color + "_" + $("#col918").val();
  }
  if ($("#col919").is(":checked")) {
    color = color + "_" + $("#col919").val();
  }
  if ($("#col920").is(":checked")) {
    color = color + "_" + $("#col920").val();
  }
  if ($("#col921").is(":checked")) {
    color = color + "_" + $("#col921").val();
  }
  if ($("#col922").is(":checked")) {
    color = color + "_" + $("#col922").val();
  }
  if ($("#col923").is(":checked")) {
    color = color + "_" + $("#col923").val();
  }
  if ($("#col924").is(":checked")) {
    color = color + "_" + $("#col924").val();
  }
  if ($("#col925").is(":checked")) {
    color = color + "_" + $("#col925").val();
  }
  if ($("#col926").is(":checked")) {
    color = color + "_" + $("#col926").val();
  }
  if ($("#col927").is(":checked")) {
    color = color + "_" + $("#col927").val();
  }
  if ($("#col928").is(":checked")) {
    color = color + "_" + $("#col928").val();
  }
  if ($("#col929").is(":checked")) {
    color = color + "_" + $("#col929").val();
  }
  if ($("#col930").is(":checked")) {
    color = color + "_" + $("#col930").val();
  }

  /*image*/
  var description = $("#des9").val();

  $("#kfl9").change(function () {
    var kurta_fabric_length = $("#kfl9").val();
  });
  $("#bfl9").change(function () {
    var bottom_fabric_length = $("#bfl9").val();
  });
  $("#dl9").change(function () {
    var dupatta_fabric_length = $("#dl9").val();
  });
  $("#type9").change(function () {
    var type = $("#type9").val();
  });

  var occasion;
  if ($("#o91").is(":checked")) {
    occasion = occasion + "_" + $("#o91").val();
  }
  if ($("#o92").is(":checked")) {
    occasion = occasion + "_" + $("#o92").val();
  }
  if ($("#o93").is(":checked")) {
    occasion = occasion + "_" + $("#o93").val();
  }
  if ($("#o94").is(":checked")) {
    occasion = occasion + "_" + $("#o94").val();
  }
  if ($("#o95").is(":checked")) {
    occasion = occasion + "_" + $("#o95").val();
  }
  if ($("#o96").is(":checked")) {
    occasion = occasion + "_" + $("#o96").val();
  }
  if ($("#o97").is(":checked")) {
    occasion = occasion + "_" + $("#o97").val();
  }

  var fabric = $("#fab9").val();

  $("#kl9").change(function () {
    var kurti_length = $("#kl9").val();
  });
  $("#sl9").change(function () {
    var sleeves_length = $("#sl9").val();
  });
  $("#ss9").change(function () {
    var sleeves_styling = $("#ss9").val();
  });
  $("#neck9").change(function () {
    var neck = $("#neck9").val();
  });
  $("#orna9").change(function () {
    var ornamentation = $("#orna9").val();
  });
  var material = $("#mat9").val();

  var wash_care;

  if ($("#w91").is(":checked")) {
    wash_care = wash_care + "_" + $("#w91").val();
  }
  if ($("#w92").is(":checked")) {
    wash_care = wash_care + "_" + $("#w92").val();
  }
  if ($("#w93").is(":checked")) {
    wash_care = wash_care + "_" + $("#w93").val();
  }
  var fabric2 = $("#fab92").val();

  var color2;
  if ($("#col991").is(":checked")) {
    color2 = color2 + "_" + "#col991".val();
  }
  if ($("#col992").is(":checked")) {
    color2 = color2 + "_" + "#col992".val();
  }
  if ($("#col993").is(":checked")) {
    color2 = color2 + "_" + "#col993".val();
  }
  if ($("#col994").is(":checked")) {
    color2 = color2 + "_" + "#col994".val();
  }
  if ($("#col995").is(":checked")) {
    color2 = color2 + "_" + "#col995".val();
  }
  if ($("#col996").is(":checked")) {
    color2 = color2 + "_" + "#col996".val();
  }
  if ($("#col997").is(":checked")) {
    color2 = color2 + "_" + "#col997".val();
  }
  if ($("#col998").is(":checked")) {
    color2 = color2 + "_" + "#col998".val();
  }
  if ($("#col999").is(":checked")) {
    color2 = color2 + "_" + "#col999".val();
  }
  if ($("#col9910").is(":checked")) {
    color2 = color2 + "_" + "#col9910".val();
  }
  if ($("#col9911").is(":checked")) {
    color2 = color2 + "_" + $("#col9911").val();
  }
  if ($("#col9912").is(":checked")) {
    color2 = color2 + "_" + $("#col9912").val();
  }
  if ($("#col9913").is(":checked")) {
    color2 = color2 + "_" + $("#col9913").val();
  }
  if ($("#col9914").is(":checked")) {
    color2 = color2 + "_" + $("#col9914").val();
  }
  if ($("#col9915").is(":checked")) {
    color2 = color2 + "_" + $("#col9915").val();
  }
  if ($("#col9916").is(":checked")) {
    color2 = color2 + "_" + $("#col9916").val();
  }
  if ($("#col9917").is(":checked")) {
    color2 = color2 + "_" + $("#col9917").val();
  }
  if ($("#col9918").is(":checked")) {
    color2 = color2 + "_" + $("#col9918").val();
  }
  if ($("#col9919").is(":checked")) {
    color2 = color2 + "_" + $("#col9919").val();
  }
  if ($("#col9920").is(":checked")) {
    color2 = color2 + "_" + $("#col9920").val();
  }
  if ($("#col9921").is(":checked")) {
    color2 = color2 + "_" + $("#col9921").val();
  }
  if ($("#col9922").is(":checked")) {
    color2 = color2 + "_" + $("#col9922").val();
  }
  if ($("#col9923").is(":checked")) {
    color2 = color2 + "_" + $("#col9923").val();
  }
  if ($("#col9924").is(":checked")) {
    color2 = color2 + "_" + $("#col9924").val();
  }
  if ($("#col9925").is(":checked")) {
    color2 = color2 + "_" + $("#col9925").val();
  }
  if ($("#col9926").is(":checked")) {
    color2 = color2 + "_" + $("#col9926").val();
  }
  if ($("#col9927").is(":checked")) {
    color2 = color2 + "_" + $("#col9927").val();
  }
  if ($("#col9928").is(":checked")) {
    color2 = color2 + "_" + $("#col9928").val();
  }
  if ($("#col9929").is(":checked")) {
    color2 = color2 + "_" + $("#col9929").val();
  }
  if ($("#col9930").is(":checked")) {
    color2 = color2 + "_" + $("#col9930").val();
  }

  var coupon1 = $("#cp91").val();
  var coupon2 = $("#cp92").val();
  var coupon3 = $("#cp93").val();
  var discount = $("#dis9").val();

  var formData = {
    id: id,
    title: title,
    sub_title: sub_title,
    price: price,
    size: size,
    color: color,
    /*img*/
    description: description,
    kurta_fabric_length: kurta_fabric_length,
    bottom_fabric_length: bottom_fabric_length,
    dupatta_fabric_length: dupatta_fabric_length,
    type: type,
    occasion: occasion,
    fabric: fabric,
    kurti_length: kurti_length,
    sleeves_length: sleeves_length,
    sleeves_styling: sleeves_styling,
    neck: neck,
    ornamentation: ornamentation,
    material: material,
    wash_care: wash_care,
    fabric2: fabric2,
    color2: color2,
    coupon1: coupon1,
    coupon2: coupon2,
    coupon3: coupon3,
    discount: discount,
  };
  console.log(formData);
  $.ajax({
    url:
      "http://testing1.thestrategybook.com/deepak-ecommerce/server/api/user/add.php", // change url to product
    type: "POST",
    data: JSON.stringify(formData),
    crossDomain: true,
    success: function (response) {
      console.log(response);
    },
    error: function (xhr, status) {
      console.log("error", xhr, status);
      alert("Some unknown error occured");
    },
  });
});