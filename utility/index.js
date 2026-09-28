import { initScrollReveal } from "./scrollReveal";

// Chaque fonction renvoie une fonction de nettoyage : FutxoLayout est remonté à chaque page,
// sans nettoyage les écouteurs de scroll s'accumulaient à chaque navigation.
export const futxoUtility = {
  scrollAnimation() {
    return initScrollReveal();
  },
  stickyNav() {
    const header = document.getElementById("header-sticky");
    if (!header) return () => {};

    const onScroll = () => {
      header.classList.toggle("fixed-header", window.scrollY > 250);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  },
  scrollBtn() {
    const scrollBtn = document.querySelector(".scroll-to-target");
    if (!scrollBtn) return () => {};

    const onClick = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const onScroll = () => {
      scrollBtn.classList.toggle("d-inline-block", window.scrollY > 500);
    };
    scrollBtn.addEventListener("click", onClick);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      scrollBtn.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
    };
  },
};
