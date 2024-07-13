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

    // Limit rotation to within -90 to 90 degrees for X-axis
    rotateX = Math.max(-90, Math.min(90, rotateX));

    // Limit rotation to within 0 to 180 degrees for Y-axis
    rotateY = Math.max(0, Math.min(360, rotateY));

    box.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    startX = e.clientX;
    startY = e.clientY;
  }
  function aboutMeHandler() {
    ab = !ab;
    cr = false;
    cm = false;
    pr = false;
  }
});
