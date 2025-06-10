"use strict";

const UTMLink = document.getElementById("utmLink");
const icon = document.getElementById("icon");

const generateUrl = function () {
  const baseUrl = document.getElementById("baseUrl").value;
  const campaignSource = document.getElementById("campaignSource").value;
  const campaignMedium = document.getElementById("campaignMedium").value;
  const campaignName = document.getElementById("campaignName").value;
  const campaignContent = document.getElementById("campaignContent").value;
  const campaignTerm = document.getElementById("campaignTerm").value;

  const form = document.getElementById("form");

  const params = new URLSearchParams();
  if (campaignSource) params.append("utm_source", campaignSource);
  if (campaignMedium) params.append("utm_medium", campaignMedium);
  if (campaignName) params.append("utm_campaign", campaignName);
  if (campaignContent) params.append("utm_content", campaignContent);
  if (campaignTerm) params.append("utm_term", campaignTerm);

  // form.addEventListener("click", (e) => {
  //   e.preventDefault();
  // });

  const finalUrls = `${baseUrl}?${params.toString()}`;

  UTMLink.value = finalUrls;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
};

icon.addEventListener("click", () => {
  const link = UTMLink.value;
  if (link) {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        // 🔹 Change it to something else (e.g., checkmark icon after copying)
        icon.setAttribute("name", "checkmark-outline");

        // Optionally, revert after a few seconds
        setTimeout(() => {
          icon.setAttribute("name", "copy-outline");
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  }
});
