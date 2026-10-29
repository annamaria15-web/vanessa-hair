// Remplace par le numéro WhatsApp de la boutique, au format international sans + (ex. 2250715385057).
  var WA_NUMBER = "2250715385057";
  document.querySelectorAll("[data-wa]").forEach(function (a) {
    a.href = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(a.getAttribute("data-wa"));
    a.target = "_blank";
    a.rel = "noopener";
  });
  document.querySelectorAll(".heart").forEach(function (b) {
    b.addEventListener("click", function () {
      b.setAttribute("aria-pressed", b.getAttribute("aria-pressed") === "true" ? "false" : "true");
    });
  });
  var labels = { lisses: "Perruques lisses", ondulees: "Perruques ondulées", bouncy: "Perruques Bouncy", frontals: "Frontals et Closures", meches: "Mèches et Blend", postiches: "Postiches" };
  var items = document.querySelectorAll("#prods .prod"), bar = document.getElementById("filterbar");
  function applyFilter(key) {
    var all = !key || key === "all";
    items.forEach(function (li) { li.hidden = !all && (" " + li.getAttribute("data-cat") + " ").indexOf(" " + key + " ") < 0; });
    bar.hidden = all;
    document.getElementById("filterlabel").textContent = all ? "" : labels[key];
  }
  document.querySelectorAll("[data-filter]").forEach(function (a) {
    a.addEventListener("click", function () { applyFilter(a.getAttribute("data-filter")); });
  });
  document.getElementById("filterreset").addEventListener("click", function () { applyFilter("all"); });
  var hdr = document.getElementById("hdr"), burger = document.getElementById("burger");
  burger.addEventListener("click", function () {
    var open = hdr.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  hdr.querySelectorAll(".nav a").forEach(function (a) {
    a.addEventListener("click", function () {
      hdr.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
