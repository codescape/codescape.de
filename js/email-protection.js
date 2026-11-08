document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".email-protected").forEach(function (link) {
    const email = link.dataset.email
      .split("")
      .reverse()
      .join("");

    link.href = "mailto:" + email;
    link.querySelector(".email-text").textContent = email;
  });
});
