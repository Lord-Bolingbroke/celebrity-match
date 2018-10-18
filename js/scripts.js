$(document).ready(function() {
  $("#survey").submit(function(event) {

    var nameFirst = $("#nameFirst").val();
    var nameLast = $("#nameLast").val();
    var gender = $("input:radio[name=gender]:checked").val();
    var age = parseInt($("#age").val());
    var job = $("#job").val();

    // $(".nameFirst").text(nameFirst);
    // $(".nameLast").text(nameLast);
    // $(".gender").text(gender);
    // $(".age").text(age);
    // $(".job").text(job);

    // debugger;
    // $(".result").slideToggle().removeClass("hidden");
    event.preventDefault();
  });
});
