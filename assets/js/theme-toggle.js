document.addEventListener("DOMContentLoaded", function() {
    const currentPage = window.location.pathname;
  
    if (currentPage.includes("dark-page")) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  });