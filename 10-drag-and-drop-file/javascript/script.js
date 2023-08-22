import $ from "jquery";

$(window).on("load", function () {
  function previewImage(image) {
    const imageSrc = URL.createObjectURL(image);
    $(".input-container").css("background", `url(${imageSrc})`);
    $(".input-container").css("background-position", "center");
    $(".input-container").css("background-size", "100%");
    $(".input-container").css("background-repeat", "no-repeat");
    $(".input-file").css("z-index", "-1");
  }
  $(".input-container").on("drop", function (ev) {
    ev.preventDefault();
    ev.stopPropagation();
    if (ev.originalEvent.dataTransfer) {
      if (ev.originalEvent.dataTransfer.files.length) {
        var droppedFiles = ev.originalEvent.dataTransfer.files;
        previewImage(droppedFiles[0]);
      }
    }
    return false;
  });

  $(".input-container").on("dragover", function (ev) {
    ev.preventDefault();
  });
  $(".input-file").on("change", function (ev) {
    previewImage(ev.target.files[0]);
  });
});
