document.addEventListener("DOMContentLoaded", function () {
  const box = document.getElementById("box");
  let isDragging = false;
  let startX, startY;
  let rotateX = 10,
    rotateY = 130; // initial rotation values

  box.addEventListener("mousedown", startDrag);
  document.addEventListener("mouseup", endDrag);
  document.addEventListener("mousemove", drag);

  function startDrag(e) {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    box.style.transition = "none";
  }

  function endDrag() {
    isDragging = false;
    box.style.transition = "transform 0.3s ease-out";
  }

  function drag(e) {
    if (!isDragging) return;
    const diffX = e.clientX - startX;
    const diffY = e.clientY - startY;
    rotateX -= diffY / 2; // scale down the rotation speed
    rotateY += diffX / 2; // scale down the rotation speed

    // Limit rotation to within -180 to 180 degrees for both X-axis and Y-axis
    rotateX = Math.max(-180, Math.min(180, rotateX));
    rotateY = Math.max(-180, Math.min(180, rotateY));

    box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    startX = e.clientX;
    startY = e.clientY;
  }
});
