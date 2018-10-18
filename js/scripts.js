$(document).ready(function() {
  $("#survey").submit(function(event) {

    var nameFirst = $("#nameFirst").val();
    var nameLast = $("#nameLast").val();
    var gender = $("input:radio[name=gender]:checked").val();
    var age = parseInt($("#age").val());
    var job = $("#job").val();

    if (gender === 'male' && age >= 50 && job === 'White Collar') {
      $('#dogHide').show();
    } else {
      $('#dogHide').hide();
    }

    if (gender === 'male' && age >= 50 && job === 'Blue Collar') {
      $('#manHide').show();
    } else {
      $('#manHide').hide();
    }

    if (gender === 'male' && age >= 50 && job === 'Job Abandoning') {
      $('#womanHide').show();
    } else {
      $('#womanHide').hide();
    }



    //   if (age >= 30) {
    //     $('#womanHide').show();
    //   } else {
    //     $('#womanHide').hide();
    //   }
    //  else {
    //   if (age < 30) {
    //     $('#dogHide').show();
    //   } else {
    //     $('#dogHide').hide();
    //     }
    //   }
    // }
    event.preventDefault();
  });
});
