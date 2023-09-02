"use strict";

const canvas = document.querySelector("canvas");
const toolBtns = document.querySelectorAll(".tool");
const brushBtn = document.querySelector(".brush");
const eraseBtn = document.querySelector(".eraser");
const fillColorBtn = document.querySelector(".fill-color");
const sizeSlider = document.querySelector("#size-slider");
const size = document.querySelector(".size");
const pickedColor = document.querySelector("#pick-color");
const clearCanvas = document.querySelector(".clear");
const saveImg = document.querySelector(".save");
const ctx = canvas.getContext("2d");

let prevMouseX,
  prevMouseY,
  snapshot,
  isDrawing = false,
  fillColor = false,
  selectedTool = "brush",
  brushWidth = 1,
  selectedColor = "#000";

const setCanvasBackground = () => {
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = selectedColor;
};
const drawRect = (event) => {
  if (!fillColor) {
    return ctx.strokeRect(
      event.offsetX,
      event.offsetY,
      prevMouseX - event.offsetX,
      prevMouseY - event.offsetY
    );
  }
  ctx.fillRect(
    event.offsetX,
    event.offsetY,
    prevMouseX - event.offsetX,
    prevMouseY - event.offsetY
  );
};
const drawCircle = (event) => {
  ctx.beginPath();

  let radius = Math.sqrt(
    Math.pow(prevMouseX - event.offsetX, 2) +
      Math.pow(prevMouseY - event.offsetY, 2)
  );
  ctx.arc(prevMouseX, prevMouseY, radius, 0, 2 * Math.PI);

  fillColor ? ctx.fill() : ctx.stroke();
};
const drawTriangle = (event) => {
  ctx.beginPath();
  ctx.moveTo(prevMouseX, prevMouseY);
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.lineTo(prevMouseX * 2 - event.offsetX, event.offsetY);
  ctx.closePath();

  fillColor ? ctx.fill() : ctx.stroke();
};
const startDraw = (event) => {
  isDrawing = true;
  prevMouseX = event.offsetX;
  prevMouseY = event.offsetY;
  ctx.beginPath();
  ctx.lineWidth = brushWidth;
  ctx.strokeStyle = selectedColor;
  ctx.fillStyle = selectedColor;
  snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
};
const drawing = (event) => {
  if (!isDrawing) return;
  ctx.putImageData(snapshot, 0, 0);
  if (selectedTool === "brush" || selectedTool === "eraser") {
    ctx.strokeStyle = selectedTool === "eraser" ? "#fff" : selectedColor;

    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  } else if (selectedTool === "rectangle") {
    drawRect(event);
  } else if (selectedTool === "circle") {
    drawCircle(event);
  } else {
    drawTriangle(event);
  }
};
window.addEventListener("load", () => {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  setCanvasBackground();
});
pickedColor.addEventListener(
  "change",
  () => (selectedColor = pickedColor.value)
);
sizeSlider.addEventListener("input", () => {
  brushWidth = sizeSlider.value;
  size.textContent = sizeSlider.value;
});
brushBtn.addEventListener("click", () => {
  selectedTool = "brush";

  brushBtn.className = "btn btn-primary w-100 text-start brush";
  eraseBtn.className = "btn btn-outline-primary w-100 text-start eraser";

  toolBtns.forEach((btn) => {
    btn.className = "btn btn-outline-primary w-100 text-start tool";
  });
});
eraseBtn.addEventListener("click", () => {
  selectedTool = "eraser";

  brushBtn.className = "btn btn-outline-primary w-100 text-start brush";
  eraseBtn.className = "btn btn-primary w-100 text-start eraser";

  toolBtns.forEach((btn) => {
    btn.className = "btn btn-outline-primary w-100 text-start tool";
  });
});
fillColorBtn.addEventListener("click", () => {
  if (fillColor) {
    fillColor = false;
    fillColorBtn.className =
      "btn btn-outline-primary w-100 text-start fill-color";
  } else {
    fillColor = true;
    fillColorBtn.className = "btn btn-primary w-100 text-start fill-color";
  }
});
toolBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    toolBtns.forEach((btn) => {
      btn.className = "btn btn-outline-primary w-100 text-start tool";
    });

    btn.className = "btn btn-primary w-100 text-start tool";
    brushBtn.className = "btn btn-outline-primary w-100 text-start brush";
    eraseBtn.className = "btn btn-outline-primary w-100 text-start eraser";

    selectedTool = btn.id;
  });
});
clearCanvas.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  setCanvasBackground();
});
saveImg.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = `${Date.now()}-S1mon009.jpg`;
  link.href = canvas.toDataURL();
  link.click();
});
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => (isDrawing = false));
