$(window).on("load", function () {
  setInterval(function () {
    const date = new Date();
    const hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minute =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds =
      date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    $(".hours").text(hour);
    $(".minutes").text(minute);
    $(".seconds").text(seconds);
  }, 1000);
});
