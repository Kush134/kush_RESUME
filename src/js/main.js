$(document).ready(function () {
    console.log("hello");

    setTimeout(function() {
        $("body").fadeIn(500);
    }, 500);
  
    if ($("html").attr("color-mode") == "dark") {
      $('input[name="toggle-theme"]').prop("checked", true);
    }
  
    $('input[name="toggle-theme"]').click(function () {
      if ($(this).is(":checked")) {
        $("html").attr("color-mode", "dark");
      } else if ($(this).is(":not(:checked)")) {
        $("html").attr("color-mode", "light");
      }
    });
});
  