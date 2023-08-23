import $ from "jquery";

$(window).on("load", function () {
  const borderColor = "#6c757d";
  const activeBorderColor = "#fff";

  function previewImage(image) {
    const imageSrc = URL.createObjectURL(image);
    $(".input-container").css("background", `url(${imageSrc})`);
    $(".input-container").css("background-position", "center");
    $(".input-container").css("background-size", "100%");
    $(".input-container").css("background-repeat", "no-repeat");
    $(".input-file").css("z-index", "-1");
  }
  $(".input-container").on("drop", function (event) {
    event.preventDefault();
    event.stopPropagation();
    $(".input-container").css("border", `5px dashed ${borderColor}`);
    if (event.originalEvent.dataTransfer) {
      if (event.originalEvent.dataTransfer.files.length) {
        var droppedFiles = event.originalEvent.dataTransfer.files;
        previewImage(droppedFiles[0]);
      }
    }
    return false;
  });

  $(".input-container").on("dragover", function (event) {
    event.preventDefault();
    $(".input-container").css("border", `5px dashed ${activeBorderColor}`);
  });
  $(".input-container").on("dragleave", function (event) {
    event.preventDefault();
    $(".input-container").css("border", `5px dashed ${borderColor}`);
  });
  $(".input-file").on("change", function (event) {
    previewImage(event.target.files[0]);
  });
});
