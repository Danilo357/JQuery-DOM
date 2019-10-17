$(document).ready(function() {
  $("#accordian").on("click", "a", function() {
    $(".content").removeClass("active")
    $(this)
      .find("+.content")
      .addClass("active")
  })
})
