// Remplace wowjs (abandonné) : anime les éléments .wow (classes animate.css) à leur entrée à l'écran.
// Mêmes conventions que wowjs : classe "wow" + nom d'animation, data-wow-delay, data-wow-duration.

function reveal(el) {
    el.style.visibility = "visible";
    if (el.dataset.wowDelay) el.style.animationDelay = el.dataset.wowDelay;
    if (el.dataset.wowDuration) el.style.animationDuration = el.dataset.wowDuration;
    el.classList.add("animated");
}

export function initScrollReveal() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
        document.querySelectorAll(".wow").forEach(el => (el.style.visibility = "visible"));
        return () => {};
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                reveal(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    const watch = root => {
        const nodes = root.matches?.(".wow") ? [root] : [];
        root.querySelectorAll?.(".wow:not(.animated)").forEach(el => nodes.push(el));
        nodes.forEach(el => {
            if (el.classList.contains("animated")) return;
            el.style.visibility = "hidden";
            observer.observe(el);
        });
    };

    watch(document.body);

    // Éléments ajoutés après coup (ex. articles chargés côté client)
    const mutations = new MutationObserver(records => {
        records.forEach(record => record.addedNodes.forEach(node => node.nodeType === 1 && watch(node)));
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
        observer.disconnect();
        mutations.disconnect();
    };
}
