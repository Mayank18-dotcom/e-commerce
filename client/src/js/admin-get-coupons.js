$(document).ready(function () {
  $.ajax({
    url:
      "https://testing1.thestrategybook.com/deepak-ecommerce/server/api/admin/coupons/retrieve.php",
    type: "GET",
    success: function (response) {
      if (response.data) {
        response.data.forEach((coupon, index) => {
          console.log(escape(coupon.title));
          $("tbody").append(`
                  <tr>
                  <th
                    scope="row"
                  >
                    ${index + 1}
                  </th>
                  <td>${coupon.coupon_code || "N/A"}</td>
                  <td>${coupon.min_amount_needed || "N/A"}</td>
                  <td>${
                    coupon.flat_off_amount ||
                    coupon.flat_off_percentage ||
                    "N/A"
                  }</td>
                  <td>${coupon.use_limit || "N/A"}</td>
                  <td>${coupon.description || "N/A"}</td>
                  <td>${coupon.ts_create || "N/A"}</td>
                  <td>
                    <button type="button" class="btn btn-danger delete-btn"  id = ${
                      coupon.coupon_code
                    }>Delete</button>
                  </td>
                </tr>      
                  `);
        });
        // delete api inside the success for previous api
        $(".delete-btn").click(function () {
          console.log("hi");
          let coupon_code = $(this)[0].id;
          console.log(coupon_code);
          $.ajax({
            url:
              "https://testing1.thestrategybook.com/deepak-ecommerce/server/api/admin/coupons/remove.php",
            type: "POST",
            data: JSON.stringify({
              coupon_code: coupon_code,
            }),
            xhrFields: {
              withCredentials: true,
            },
            success: function (response, status, xhr) {
              alert("Coupon Deleted");
              window.location.reload();
            },
            error: function (xhr, status) {
              console.log("error", xhr, status);
              alert("Error deleting the coupon!");
            },
          });
        });
      } else {
        alert("No coupon found");
      }
    },
    error: function (xhr, status) {
      console.log("error", xhr, status);
    },
  });
});
