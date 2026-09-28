import sanitizeHtml from "sanitize-html";

// Liste blanche adaptée au contenu produit par l'éditeur Quill
const options = {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "iframe", "h1", "h2", "span", "u", "s"]),
    allowedAttributes: {
        "*": ["class"],
        a: ["href", "name", "target", "rel"],
        img: ["src", "alt", "title", "width", "height", "loading"],
        iframe: ["src", "width", "height", "allow", "allowfullscreen", "frameborder"],
        span: ["class", "style"],
        p: ["class", "style"],
    },
    allowedStyles: {
        "*": {
            color: [/^#[0-9a-f]{3,6}$/i, /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/],
            "background-color": [/^#[0-9a-f]{3,6}$/i, /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/],
            "text-align": [/^(left|right|center|justify)$/],
        },
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    allowedIframeHostnames: ["www.youtube.com", "www.youtube-nocookie.com", "player.vimeo.com"],
    transformTags: {
        a: sanitizeHtml.simpleTransform("a", { rel: "noopener noreferrer" }),
    },
};

export default function sanitize(html) {
    return sanitizeHtml(html ?? "", options);
}
