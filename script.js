function openMenu() {
    document.getElementById("menuOverlay").classList.add("menu-is-open");
    document.body.style.overflow = "hidden";
  }
  
  function closeMenu() {
    document.getElementById("menuOverlay").classList.remove("menu-is-open");
    document.body.style.overflow = "";
  }