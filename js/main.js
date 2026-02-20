// year
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = String(new Date().getFullYear());
});

// mobile menu
const btn = document.querySelector("[data-menu-btn]");
const mobileNav = document.querySelector("[data-mobile-nav]");
if (btn && mobileNav) {
  btn.addEventListener("click", () => {
    const isOpen = mobileNav.style.display === "flex";
    mobileNav.style.display = isOpen ? "none" : "flex";
  });
}
// Portal tabs
(function () {
  const tabs = document.querySelectorAll(".kTab");
  const panels = document.querySelectorAll(".kPanel");
  if (!tabs.length || !panels.length) return;

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tab = btn.getAttribute("data-tab");
      tabs.forEach((t) => t.classList.remove("isActive"));
      panels.forEach((p) => p.classList.remove("isActive"));
      btn.classList.add("isActive");
      const panel = document.querySelector(`.kPanel[data-panel="${tab}"]`);
      if (panel) panel.classList.add("isActive");
    });
  });
})();
// Integrations search filter
(function () {
  const input = document.getElementById("kIntSearchInput");
  const grid = document.getElementById("kIntGrid");
  if (!input || !grid) return;

  const items = Array.from(grid.querySelectorAll(".kIntItem"));

  function norm(s) {
    return String(s || "").toLowerCase().trim();
  }

  input.addEventListener("input", () => {
    const q = norm(input.value);
    items.forEach((el) => {
      const hay = norm(el.textContent) + " " + norm(el.getAttribute("data-tags"));
      const match = !q || hay.includes(q);
      el.classList.toggle("isHidden", !match);
    });
  });
})();
