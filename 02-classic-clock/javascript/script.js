$(window).on("load", function () {
  setInterval(function () {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const teiseks = date.getSeconds();
    $(".hour").css(
      "transform",
      `translate(-50%,-50%) rotate(${hour * (360 / 12)}deg)`
    );
    $(".minute").css(
      "transform",
      `translate(-50%,-50%) rotate(${minute * (360 / 60)}deg)`
    );
    $(".teiseks").css(
      "transform",
      `translate(-50%,-50%) rotate(${teiseks * (360 / 60)}deg)`
    );
  }, 1000);
});
