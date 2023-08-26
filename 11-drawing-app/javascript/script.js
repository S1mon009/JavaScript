"use strict";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let prevX = null;
let prevY = null;

// How thick the lines should be
ctx.lineWidth = 1;

canvas.addEventListener("mousemove", (e) => {
  console.log("Mouse X: " + e.clientX);
  console.log("Mouse Y: " + e.clientY);
  if (prevX == null || prevY == null) {
    // Set the previous mouse positions to the current mouse positions
    prevX = e.clientX;
    prevY = e.clientY;
    return;
  }

  // Current mouse position
  let currentX = e.clientX;
  let currentY = e.clientY;

  // Drawing a line from the previous mouse position to the current mouse position
  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(currentX, currentY);
  ctx.stroke();

  // Update previous mouse position
  prevX = currentX;
  prevY = currentY;
});
