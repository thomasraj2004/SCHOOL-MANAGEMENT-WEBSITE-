function showDetail(id) {
  document.getElementById("academics-grid").style.display = "none";
  document.querySelectorAll(".academic-detail").forEach(detail => {
    detail.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}

function goBack() {
  document.querySelectorAll(".academic-detail").forEach(detail => {
    detail.style.display = "none";
  });
  document.getElementById("academics-grid").style.display = "grid";
}
