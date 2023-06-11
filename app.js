const sideContainer = document.getElementById("sidebar");
const dashboardBtn = document.getElementById("dashboard");

dashboardBtn.addEventListener("click", () => {
  sideContainer.classList.toggle("shrink");
});
