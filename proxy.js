import { NextResponse } from "next/server";

// Anciennes URL qui ne diffèrent des nouvelles que par la casse.
// Elles ne peuvent pas aller dans next.config.mjs : les redirections y ignorent la casse
// et la nouvelle URL se redirigerait vers elle-même.
const CASE_REDIRECTS = {
    "/services/conception-graphique-UI-UX-Design": "/services/conception-graphique-ui-ux-design",
};

export function proxy(request) {
    const destination = CASE_REDIRECTS[request.nextUrl.pathname];
    if (destination) {
        return NextResponse.redirect(new URL(destination, request.url), 308);
    }
}

export const config = {
    matcher: "/services/:path*",
};
