document.addEventListener("DOMContentLoaded", () => {
  const storageKey = "tankstelle-theme-v2";
  const themeButtons = document.querySelectorAll("[data-theme-toggle]");
  const preferredTheme = localStorage.getItem(storageKey) || "light";

  const applyTheme = (theme) => {
    const isDark = theme === "dark";
    document.body.classList.toggle("dark-mode", isDark);
    themeButtons.forEach((button) => {
      button.setAttribute("aria-pressed", String(isDark));
      button.setAttribute("aria-label", isDark ? "Zum hellen Modus wechseln" : "Zum dunklen Modus wechseln");
      button.setAttribute("title", isDark ? "Light Mode" : "Dark Mode");
    });
  };

  applyTheme(preferredTheme);

  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextTheme = document.body.classList.contains("dark-mode") ? "light" : "dark";
      localStorage.setItem(storageKey, nextTheme);
      applyTheme(nextTheme);
    });
  });

  const menuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (menuButton && mobileMenu) {
    menuButton.addEventListener("click", () => {
      const hidden = mobileMenu.classList.toggle("hidden");
      menuButton.setAttribute("aria-expanded", String(!hidden));
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  const siteMenuButton = document.getElementById("site-menu-button");
  const siteMenu = document.getElementById("site-menu");
  const menuRoot = document.querySelector("[data-site-menu-root]");

  if (siteMenuButton && siteMenu && menuRoot) {
    const closeSiteMenu = () => {
      siteMenu.classList.add("hidden");
      siteMenuButton.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    };

    siteMenuButton.addEventListener("click", (event) => {
      event.stopPropagation();
      const hidden = siteMenu.classList.toggle("hidden");
      siteMenuButton.setAttribute("aria-expanded", String(!hidden));
      document.body.classList.toggle("menu-open", !hidden);
    });

    siteMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        closeSiteMenu();
      });
    });

    siteMenu.addEventListener("click", (event) => {
      if (event.target === siteMenu) {
        closeSiteMenu();
      }
    });

    document.addEventListener("click", (event) => {
      if (!menuRoot.contains(event.target)) {
        closeSiteMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeSiteMenu();
      }
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
});
